<template>
<div class="wrap">
    <x-header :left-options="{showBack: showLeftBack,preventGoBack:true}" @on-click-back='back' slot="header" style="width: 100%;position: absolute;left: 0;top: 0;z-index: 100;font-size: 20px;">{{titleContent}}
    <div slot="right">
      <div class="x-txt" v-if="toggle" @click="onEdit()">{{rText}}</div>
      <div class="x-txt" v-if="!toggle" @click="onOver()">{{rText}}</div>
    </div>
    </x-header>
    <div class="normal-content" :style="conHei">
      <div class="cart-panel">
        <div class="cart-header">
          <check-icon :value.sync="check1"></check-icon>
          <span class="shop-name">蓬莱阁艺术馆</span>
        </div>
        <cell>
          <template slot="icon">
            <check-icon :value.sync="check1"></check-icon>
            <div class="gar-photo">
              <img src="./ddpic.png" alt="">
            </div>
          </template>
          <template slot="after-title">
            <div class="gar-body">
              <div class="gar-header">
                <div class="gar-title">李几已书法作品蓬莱仙阁赋李 几已书法作品蓬莱...</div>
              </div>
              <div class="gar-foot">
                <div class="gar-price">￥<span>600.00</span></div>
                <inline-x-number :min="0" width="30px"></inline-x-number>
              </div>
            </div>
          </template>
        </cell>
      </div>
    </div>
    <div class="cart-tabbar">
      <label class="check-box">
        <check-icon :value.sync="check1"></check-icon><span>全选</span>
      </label>
      <div class="total-price" v-if="toggle">合计:<span>￥1500.00</span></div>
      <div class="button" v-if="toggle">去结算</div>
      <div class="button del-button" v-if="!toggle">删除</div>
    </div>

  </div>
</template>

<script>
import { ShopList, goodsBucketRecomm, goodsBucketSubmit } from "@/servers/api";
import { XHeader,Tabbar, TabbarItem ,Cell,XButton,InlineXNumber,CheckIcon} from 'vux'
export default {
  name: "",

  data() {
    return {
      toggle:true,
      titleContent: "购物车",
      showLeftBack: true,
      rText: "编辑",
      check1:true,
      check2:true
    };
  },

  components: {
    XHeader, XButton, Tabbar,TabbarItem ,Cell,InlineXNumber,CheckIcon
  },

  methods:{
    onEdit(){
      this.rText = "完成"
      this.toggle = !this.toggle
    },
    back(){
     this.$router.go(-1)
    },
    onOver(){
      this.rText = "编辑"
      this.toggle = !this.toggle
    },
    getDataList() {
      ShopList({page: 1})
        .then(res => {
          console.log(res);
          if (res.result === 1) {
            let obj = res.data.result;
            for (let i in obj) {
              for (let j in obj[i][0]) {
                this.dataList.push(obj[i][0][j]);
                this.numArr.push(parseInt(obj[i][0][j].total, 10));
                this.checkFlagArr.push(true);
              }
            }
          }
        })
        .catch(err => {
          console.log(err);
        })
    }

  },

  mounted(){
    this.$nextTick(()=>{

      console.log(1);
      this.getDataList()
    })
  },

  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 90 + "px" };
    }
  },
};
</script>
<style lang='css' scoped>
.normal-content{
  width: 100%;
  background: #F5F5F5;
  overflow: hidden;
  overflow-y: scroll;
  padding: 15px 0;
  box-sizing: border-box;
}
.cart-tabbar{
  background-color: #FFFFFF;
  position: absolute;
  padding: 10px 15px;
  left: 0;
  right: 0;
  bottom: 48px;
  overflow: hidden;
}
.cart-tabbar .button{
  width: 100px;
  height: 35px;
  line-height: 35px;
  background-color: #3976FF;
  border-radius: 35px;
  color: #FFFFFF;
  text-align: center;
  float: right;
}
.cart-tabbar .del-button{
  color: #3976FF;
  background-color: transparent;
  box-shadow: 0 0 0 1px #3976FF;
}
.cart-tabbar .check-box{
  float: left;
}
.check-box{
  padding: 5px 0;
  font-size: 16px;
}
.check-box /deep/ .weui-icon{
  margin-top: -3px;
}
.check-box /deep/ *{
  display: inline-block;
  vertical-align: middle;
}
.check-box /deep/ .vux-check-icon > .weui-icon-success:before,
.check-box /deep/ .vux-check-icon > .weui-icon-success-circle:before{
  color: #3976FF;
}
.cart-tabbar .total-price{
  float: left;
  line-height:35px;
  font-size: 14px;
  margin-left: 20px;
}
.cart-tabbar .total-price span{
  font-weight: bold;
  font-size: 16px;
}

.x-txt{
  color: #222;
  font-size: 16px;
}
.cart-panel{
  background:rgba(255,255,255,1);
  box-shadow:0px 10px 15px 0px rgba(0,101,255,0.05);
  border-radius:8px;
  overflow: hidden;
  margin-bottom: 15px;
  padding: 15px 0;
}
.cart-panel .weui-cell{
  padding:8px 15px;
}
.gar-photo{
  width: 90px;
  height: 90px;
  margin-right: 15px;
}
.gar-photo img{
  width: 90px;
  height: 90px;
  border-radius: 4px;
}
.gar-body{
  height: 90px;
  line-height: 1.4;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  flex-direction:column
}
.gar-foot{
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.cart-panel /deep/ .weui-cell__hd{
  position: relative;
  padding-left: 30px;
}
.cart-panel /deep/ .weui-cell__hd .vux-check-icon{
  position: absolute;
  left: -5px;
  top: 50%;
  margin-top: -11px;
}
.cart-panel /deep/ .vux-check-icon > .weui-icon-success:before,
.cart-panel /deep/ .vux-check-icon > .weui-icon-success-circle:before{
  color: #3976FF;
}
.cart-panel /deep/ .vux-number-selector{
  width: 25px;
  height: 25px;
  padding: 0;
  text-align: center;
  line-height: 25px;
  background-color: #EBEEF5;
  border-radius: 3px;
  margin: 0;
}
.cart-panel /deep/ .vux-number-selector svg {
    fill: #999;
}
.cart-panel /deep/ .vux-number-input{
  height: 25px;
  line-height: 25px;
  border: 0;
}
.cart-panel /deep/ .vux-inline-x-number{
  padding: 1px;
  border: 1px solid #EBEEF5;
  border-radius: 3px;
}
.weui-cell:before{
  display: none;
}
.cart-header{
  padding: 0 10px;
  margin-bottom: 10px;
}
.cart-header .shop-name{
  font-size: 16px;
  font-weight: bold;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  padding-right: 20px;
  background: url(./rt_arrow2.png) right center no-repeat;
  background-size: 12px 12px;
}
.gar-price{
  color: #FF3939;
  font-size: 12px;
}
.gar-price span{
  font-size: 15px;
  font-weight: bold;
}

</style>
