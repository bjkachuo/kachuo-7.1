<template>
  <div class="wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="normal-content" :style="conHei">
      <div class="inner-wrap">
        <div class="guide-grid">
          <img :src="this.DList.tour_path" alt />
          <div class="btn-click" @click="zanChange">
            <!-- <span :class="zan?'icon-thumb-two':'icon-thumb'" @click="zan=!zan;"></span> -->
            <span  v-if="zanNum ==0" class="icon-thumb"></span>
            <span  v-if="zanNum ==1" class="icon-thumb-two"></span>
            <!-- <span :class="icon-thumb" @click="zan=!zan" v-if="this.state=='1'"></span> -->
            <span>{{this.DList.zan}}</span>
            <!-- <span>{{this.zanNum}}</span> -->
          </div>
        </div>
        <div class="bs-panel">
          <div class="bs-panel-body">
            <div class="guid-header">
              <div class="g-name">{{this.DList.name}}</div>
              <div class="g-raty">{{this.DList.score}}分 {{this.DList.commtotal}}人评价</div>
            </div>
            <div class="bs-raty">
              <!-- <rater v-model="data1" active-color="red" :margin="0" disabled></rater> -->
              <rater  v-model="this.starNum" star='<i class="star"></i>' active-color="red" :margin="0" disabled></rater>             
            </div>
            <div class="bs-style">
              <span>计费方式：每小时{{this.DList.price}}元，{{this.DList.lowest_time}}小时起订</span>
            </div>
          </div>
        </div>
        <div class="bs-panel">
          <div class="bs-panel-tit">导游介绍</div>
          <div class="bs-panel-body">
            <div class="j-content" v-if="!toggle">{{this.DList.introduce}}</div>
            <div class="j-content" v-if="toggle">{{this.DList.introduce}}</div>
          </div>
          <div class="bs-footer">
            <div class="btn-toggle" @click="ckToggle">
              <span v-if="!toggle">展开</span>
              <span v-if="toggle">收起</span>
            </div>
          </div>
        </div>
      </div>
      <div class="message-panel">
        <div class="mess-header">
          <div class="mess-title">评论({{this.DList.commtotal}}条)</div>
        </div>
        <div class="mess-body">
          <div class="mess-group" v-for="(item,index) in DList.comm" :key="index">
            <cell @cell-label-color :title="item.nickname" :inline-desc="item.created_at">
              <img slot="icon" class="mess-avatar"  :src="item.avatar"/>
              <div slot="default" style="touch-action:default;">
                <div @click="commentZan(item,index)">
                  <div class="cared-number" v-if="item.is_zan == 0">{{item.zancount}}</div>
                  <div class="cared-number-two" v-if="item.is_zan ==1">{{item.zancount}}</div>
                </div>
              </div>
            </cell>
            <cell :value="item.content" value-align="left"></cell>
          </div>
        </div>
      </div>
      <div class="btn-space">
        <x-button class="btn-default" :link="{path:'/GuideForm',query:{id:this.DList.id,price:this.DList.price}}">
          <i class="icon-time"></i>
          <span>预约导游</span>
        </x-button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Cell, XButton, Rater } from "vux";
import { Group } from "vux";
// import { GuideList } from "@/servers/api.js";

export default {
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "导游详情",
        showLeftBack: true,
        showRightMore: false
      },
      //导游点赞
      zanNum:"",
      //导游评论点赞
      zanCommNum:"",
      data1: "4",
      toggle: false,
      //星星分
      starNum: "3",
      //导游详情
      DList: []
      // idnum:this.$route.query.idNum
    };
  },

  methods: {
    //导游点赞
    zanChange() {
    this.$http
          .post(
            "https://core.kachuo.com/app/ewei_shopv2_app.php?i=8&c=site&a=entry&m=ewei_shopv2&do=mobile&r=tourguide.index.like&id=" +
             this.$route.query.idNum+"&status=" + (this.zanNum == 0 ? '1':'0')
          )
         .then(({ data }) => {
            console.log(data);
        if(this.zanNum==0){
            this.zanNum=1;
            this.DList.zan ++
            console.log(this.zanNum,"点赞")
				}else if(this.zanNum==1){
            this.zanNum=0;
            this.DList.zan --
            console.log(this.zanNum,"取消赞")
        }   
        });    
    },
    //评论点赞
    commentZan(item,index){
      this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.index.businessLike&type="+14+"&id="+
      item.id+"&status=" +(item.is_zan == 0 ? '1':'0')
      )
      .then(({data})=>{
        console.log(data)
        item.is_zan = item.is_zan == 1 ? 0 : 1 
        item.zancount = item.is_zan == 1 ? item.zancount - 0 + 1 : --item.zancount

      })
      console.log(item,index)
    },
    url(link) {
      this.$router.push(link);
    },
    ckToggle() {
      this.toggle = !this.toggle;
    }
  },
  mounted() {
    console.log(this.$route.query);
    //获取导游列表
    this.$http
      .post(
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=8&c=site&a=entry&m=ewei_shopv2&do=mobile&r=tourguide.index.detail&id=" +
          this.$route.query.idNum
      )
      .then(({ data }) => {
        console.log(data);
        this.DList = data.data;
        console.log(this.DList);
        this.starNum = parseInt(data.data.score)
        console.log(this.starNum);
        this.zanNum = data.data.is_zan;
        //this.zanCommNum = data.data.comm[index].is_zan
        console.log(this.DList.comm)
      });
  },
  components: {
    Header,
    Cell,
    Group,
    XButton,
    Rater
  },
  computed: {
    conHei() {
      return {
        height: document.documentElement.clientHeight - 45 + "px"
      };
    }
  }
};
</script>
<style lang='css' scoped>
.normal-content {
  width: 100%;
  background: #f5f5f5;
  margin-top: 45px;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}
.wrap /deep/ .vux-header {
  box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.04);
}
.message-panel {
  overflow: hidden;
}
.message-panel .mess-group {
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.04);
  border-radius: 8px;
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 10px;
}
.message-panel .weui-cell:before {
  display: none;
}
.mess-avatar {
  width: 35px;
  height: 35px;
  border-radius: 35px;
  margin-right: 10px;
}
.mess-header {
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
  padding: 0 15px;
  margin-bottom: 10px;
}
.mess-title {
  color: #222222;
  font-weight: bold;
  font-size: 16px;
}
.mess-write {
  width: 90px;
  height: 30px;
  line-height: 30px;
  border: 1px solid #3976ff;
  color: #3976ff;
  border-radius: 30px;
  text-align: center;
}
.weui-cells.vux-no-group-title[*] {
  margin-top: 0;
}
.weui-cell {
  padding: 5px 0;
}
.mess-group {
  position: relative;
  padding: 15px 0;
}
.mess-group /deep/ .vux-label {
  font-size: 16px;
  color: #333333;
}
.mess-group /deep/ .vux-label-desc {
  font-size: 12px;
  color: #999;
}
.cared-number {
  font-size: 16px;
  line-height: 1;
  color: #222222;
  padding-left: 20px;
  background: url(../../assets/images/addzan.png) left center no-repeat;
  background-size: contain;
}
.cared-number-two {
  font-size: 16px;
  line-height: 1;
  color: #222222;
  padding-left: 20px;
  background: url(../../assets/images/cancelzan.png) left center no-repeat;
  background-size: contain;
}
.btn-space {
  padding: 15px;
}
.btn-default {
  height: 50px;
  color: #ffffff;
  background: rgba(57, 118, 255, 1);
  border-radius: 8px;
}
.btn-default * {
  display: inline-block;
  vertical-align: middle;
  margin: 0 3px;
}
.btn-default .icon-time {
  width: 20px;
  height: 20px;
  background-repeat: no-repeat;
  background-image: url(../../assets/images/time.png);
  background-size: contain;
}
.inner-wrap {
  padding: 15px;
}
.bs-panel /deep/ .star {
  display: inline-block;
  width: 16px;
  height: 16px;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(../../assets/images/star_off.png);
  background-size: contain;
}
.bs-panel /deep/ .is-active .star {
  background-image: url(../../assets/images/star_on.png);
}
.bs-panel {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.06);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
  padding: 15px;
}
.guide-grid {
  position: relative;
  box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.06);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
}
.guide-grid .btn-click {
  width: 75px;
  height: 30px;
  line-height: 28px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.06);
  border-radius: 30px;
  position: absolute;
  right: 15px;
  bottom: 15px;
  z-index: 11;
  text-align: center;
}
.btn-click * {
  display: inline-block;
  vertical-align: middle;
  margin: 0 2px;
}
.icon-thumb {
  width: 16px;
  height: 16px;
  background: url(../../assets/images/addzan.png) center no-repeat;
  background-size: contain;
}
.icon-thumb-two {
  width: 16px;
  height: 16px;
  background: url(../../assets/images/cancelzan.png) center no-repeat;
  background-size: contain;
}

.bs-style span {
  display: inline-block;
  padding: 0 10px;
  border-radius: 25px;
  height: 25px;
  line-height: 25px;
  background-color: #f5f5f5;
  color: #222222;
}
.bs-panel-tit {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}
.guid-header {
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
.g-raty {
  color: #999999;
  font-size: 14px;
}
.g-name {
  font-weight: bold;
  font-size: 20px;
}
.bs-raty {
  margin-bottom: 5px;
}
.bs-footer {
  text-align: right;
  margin-top: 10px;
}
.btn-toggle {
  font-size: 16px;
  font-weight: bold;
}
</style>
