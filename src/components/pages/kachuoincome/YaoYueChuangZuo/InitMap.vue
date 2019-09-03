<template>
  <div>
    <div class="amap-page-container" v-if="tabIndex != 4 && !listShow">
      <el-amap vid="amapDemo"  :center="mapCenter"  :zoom="zoom" class="amap-demo" :style="mapHeight" :events="events">
        <el-amap-marker v-for="(marker,index) in markers" :position="marker.position" :vid="index" :offset="taOffset" :key="marker.id" v-if="tabIndex != 3 & !showPopup & !showPopupYC">
          <div @touchstart="showModel(marker.id,marker.name)">
            <div class="marker-icon"></div>
          </div>
        </el-amap-marker>
        <el-amap-marker v-for="(marker,index) in SYOrderListData" :position="marker.position" :vid="index" :offset="taOffset" :key="marker.id" v-if="tabIndex == 3 & !showPopupSY">
          <div @touchstart="showModel(marker.id,marker.name)">
            <div class="marker-icon"></div>
          </div>
        </el-amap-marker>
        <el-amap-text v-for="text in markers" :text="text.name" :position="text.position"  :offset="[0,-54]" v-if="tabIndex !=3"></el-amap-text>
        <el-amap-text v-for="text in SYOrderListData" :text="text.name" :position="text.position"  :offset="[0,-54]" v-if="tabIndex == 3"></el-amap-text>
      </el-amap>
      <div class="list-bg" @click="listShow = true"></div>
    </div>
    <list-show :tabIndex="tabIndex" v-if="listShow" :listData="markers" :SYOrderListData="SYOrderListData"></list-show>
    <famous-family v-if="tabIndex == 4"></famous-family>
    <!-- 文创订单详情 -->
    <div v-transfer-dom>
      <popup v-model="showPopup" position="bottom" max-height="93%" :hide-on-blur="true">
        <div class="popup2">
          <p class="title">
            <span style="font-size:16px">{{dataObj.wc_name}}</span>
            <span class="tip" @click="ccc(1)">查看景区授权</span>
          </p>
          <p style="text-align:center;" v-show="!dataObj.details">
            <inline-loading></inline-loading>
          </p>
          <img :src="dataObj.details" alt srcset>
          <div class="btn-box">
            <x-button class="btn" type="primary" @click.native="submit(dataObj.jq_id)">我要抢单</x-button>
          </div>
        </div>
      </popup>
    </div>
    <!-- 艺创订单详情 -->
    <div v-transfer-dom>
      <popup v-model="showPopupYC" position="bottom" max-height="60%" :hide-on-blur="true">
        <div class="popup2">
          <p class="title">
            <span style="font-size:16px">{{dataObjYC.name}}</span>
            <span class="tip" @click="ccc(2)">查看景区授权</span>
          </p>
          <p style="text-align:center;" v-show="!dataObjYC.arr">
            <inline-loading></inline-loading>
          </p>
          <group class="ycqd-group">
            <cell v-for="(item,index) in dataObjYC.arr" :key="index" :title="item.jq_name" is-link @click.native="ycqdFn(item)">{{item.label}}</cell>
          </group>
        </div>
      </popup>
    </div>
    <!-- 溯源订单详情 -->
    <div v-transfer-dom class="custom">
      <popup v-model="showPopupSY" position="bottom" :hide-on-blur="true">
        <div class="popup2">
          <div class="address"><label>详细地址</label><span>{{SYItemDetile.address}}</span></div>
          <div class="cycle"><label>创作周期</label><span>{{SYItemDetile.work_time}}</span></div>
          <div class="cycle"><label>创作时间</label><span>{{ SYItemDetile.date }}</span></div>
          <div class="cycle"><label>作品类别</label><span>{{ SYItemDetile.name }}</span></div>
          <div class="cycle" style="border-bottom: 0;"><label>溯源佣金</label><span>{{ SYItemDetile.yj_price }}</span></div>
          <div class="btn">立即抢单</div>
        </div>
      </popup>
    </div>
    <!-- 景区授权 -->
    <div v-transfer-dom>
      <x-dialog v-model="showToast" class="dialog-demo">
        <div class="img-box">
          <img :src="qwe" style="max-width:100%;object-fit:contain;background:none">
        </div>
        <div @click="showToast=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>

    <confirm v-model="nameRuleShow" @on-confirm="nameRuleOnConfirm">
      <p style="text-align:center;">{{msg}}</p>
    </confirm>
  </div>
</template>
<script>

import {TransferDom, Popup, Group, XDialog, XButton, InlineLoading, Cell, Confirm} from "vux";
import { SCENICLIST } from "@/assets/data/scenic";
import listShow from './listShow'
import { GetSoliciList, SYorderList } from "@/servers/api";
import famousFamily from './famousFamily'
export default {
  directives: {
    TransferDom
  },
  name: "initMap",
  props: ['tabIndex'],
  data() {
    return {
      events:{},
      listShow:false,
      mapCenter: [116.397045, 39.917959],
      markers: [],
      taOffset: [-15,-35],
      zoom:4,
      showPopup: false,
      showToast: false,
      showPopupYC: false,
      showPopupSY: false,
      SYItemDetile:{},
      clickPosition: {},
      dataObj: {},
      dataObjYC: {
        name: "",
        arr: []
      },
      qwe:"",
      SYOrderListData: [],
      samePosition: [],
      nameRuleShow:false,
      msg:''
    };
  },

  components: { Popup, Group, XDialog, XButton, InlineLoading, Cell, Confirm ,famousFamily,listShow },

  computed: {
    mapHeight() {
      return { height: document.documentElement.clientHeight - 90 + "px" };
    }
  },

  mounted() {
    this.init()
  },

  methods: {
    // 溯源抢单

    init(){

      this.markers = []
      let strArr = JSON.stringify(this.SYOrderListData)
      this.SYOrderListData = []
      this.domBindEvent()
      setTimeout(()=>{
        this.markers = SCENICLIST
        this.SYOrderListData = JSON.parse(strArr)
      },100)

    },

    domBindEvent(){
      setTimeout(()=>{
        let dom  = document.getElementsByClassName('amap-overlay-text-container')

        for(var i=0;i<dom.length;i++){
          dom[i].style.boxShadow = '2px 2px 2px #ddd'
          dom[i].style.padding = '5px 7px'
          dom[i].style.borderRadius = '6px'

          if(this.tabIndex != 3){
            this.markers.forEach((item,index)=>{
              if(item.name == dom[i].innerText) dom[i].index = index
            })

            dom[i].ontouchstart = (e) =>{
              let index = e.target.index
              this.showModel(this.markers[index].id,this.markers[index].name)
            }
          }else{
            this.SYOrderListData.forEach((item,index)=>{
              if(item.name == dom[i].innerText) dom[i].index = index
            })

            dom[i].ontouchstart = (e) =>{
              let index = e.target.index
              this.showModel(this.SYOrderListData[index].id,this.SYOrderListData[index].name)
            }
          }
        }
      },800)
    },

    ccc(index){
      this.showToast = true
      if(index==1){
        this.qwe = this.dataObj.grant_img
      }else{
        this.qwe = this.dataObjYC.arr[0].grant_img
      }
      console.log(this.dataObjYC.arr)
    },
    SYGet(item) {
      this.$router.push({
        path: "/SuYuanQiangdan",
        query: { item:JSON.stringify(item) },
      });
    },

    getSYData() {

      this.SYOrderListData = [];

      SYorderList({}).then(res => {

        if (res.result === 1) {

          res.data.data.forEach(item=>{
            this.SYOrderListData.push({
              id: item.yc_id+'',
              name: item.category,
              date: item.date,
              position: item.ip.split(","),
              order: item.order,
              address: item.address,
              work_time: item.work_time,
              yj_price: item.yj_price
            });
          })

          this.samePosition = [];
          for (let i = 0; i < this.SYOrderListData.length; i++) {
            this.samePosition.push(this.SYOrderListData[i])
          }
          this.domBindEvent()
        }
      }).catch(err => {

        console.log(err);
      });

    },
    // 溯源订单列表

    ycqdFn(item) {
      console.log(item);
      this.$router.push({
        path: "/yichuangqiangdan",
        query: {
          id: item.wc_id,
          arr: item.details
        }
      });
    },



    submit(id) {
      //实名认证
      this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=goods.real.real_FirstOne")
        .then(({data})=>{
          console.log(data);
          if( data.result == 0 ){
            this.msg = data.msg
            this.nameRuleShow = true
          }else{
            this.$router.push("/wenchuangqiangdan?id=" + id);
          }
        })
    },

    nameRuleOnConfirm(){
      this.$router.push("/realnameauth")
    },

    doShowToast() {
      this.$vux.toast.show({
        text: "toast"
      });
    },
    getdataList( id, name) {
      GetSoliciList({ type: this.tabIndex  }).then(res => {

          if (res.result === 1) {

            if (this.tabIndex == 1) {
              this.showPopup = true;
              for (let i = 0; i < res.data.result.length; i++) {
                if (res.data.result[i].jq_id == id) {
                  this.dataObj = res.data.result[i];
                }
              }
            } else if (this.tabIndex == 2) {

              this.showPopupYC = true;
              for (let i in res.data.result) {

                if (i == name) {

                  this.dataObjYC.name = i;
                  this.dataObjYC.arr = res.data.result[i];
                }
              }
            }else{
              this.SYOrderListData.forEach(item=>{
                item.id ==  id ? this.SYItemDetile = item : null
              })
              this.showPopupSY = true
            }

          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    showModel(id, name) {
      this.getdataList( id, name);
    },

  },

  watch:{
    'listShow':function (to) {
      this.init()
    }
  }
};
</script>
<style lang='less' scoped>
@import "~vux/src/styles/close";
.custom{
  /deep/.vux-popup-dialog{
    border-radius: 8px 8px 0 0;
    .address{
      padding: 20px 0;
      margin: 0 15px;
      line-height: 21px;
      font-size: 16px;
      display: flex;
      border-bottom: 1px solid #E5E5E5;
      color: #222;
      label{
        width: 5em;
        color: #666666;
      }
    }
    .cycle{
      font-size: 16px;
      display: flex;
      margin: 0 15px;
      line-height: 55px;
      margin: 0 15px;
      border-bottom: 1px solid #E5E5E5;
      color: #222;
      label{
        width: 5em;
        color: #666666;
      }
    }
    .btn{
      background-color: #3976FF;
      line-height: 60px;
      text-align: center;
      font-size: 16px;
      color: #fff;
      width: 100%;
    }
  }
}

.marker-icon{
  width: 30px;
  height: 35px;
  background-image: url("../../../../assets/images/kachuo-location-icon.png");
  background-size: 100% 100%;
}
.list-bg{
  background-image: url("./list.png");
  background-size: 100% 100%;
  width: 40px;
  height: 50px;
  position: fixed;
  top: 108px;
  right: 15px;
}
.amap-page-container {
  position: relative;
}
.content-model {
  position: relative;
  z-index: 9999;
}
.popup2 {
  overflow: hidden;
  overflow-y: scroll;
  background: #fff;
}
.title {
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  font-weight: bold;
}
.tip {
  font-size: 12px;
  color: #666;
  width: 80px;
  height: 16px;
  overflow: hidden;
  padding: 2px;
  box-sizing: border-box;
  border: 1px solid #666;
  border-radius: 4px;
  font-weight: normal;
}
.dialog-demo {
  .weui-dialog {
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 350px;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
.btn-box{
  width: 100%;
  position: fixed;
  padding: 20px;
  background-color: #fff;
  bottom: 0;
}
.btn {
  width: 80%;
}
.order-list {
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #eee;
  padding-left: 15px;
  box-sizing: border-box;
}
</style>
