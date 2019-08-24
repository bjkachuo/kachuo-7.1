<template>
  <div class="tab-item-mall-wrap">
    <TabItemIncomeHeader></TabItemIncomeHeader>
    <div class="offer" @click="goLink('/yaoyuechuangzuo')"></div>
    <ul class="tsb-list">
       <li v-for="item in cellListTools" :class="item.icon" @click="goLink(item.link )"></li>
    </ul>
    <div class="mg">
      <div class="content"><span>MG动画</span></div>
      <div class="btn-menu" @click="checkIn"></div>
    </div>
    <div class="settled-in">
      <div class="banyuan"></div>
      <ul>
        <li v-for="(item,index) in btnList" :class="{'active':index == btnIndex}" @click="btnIndex = index">{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import TabItemIncomeHeader from "@/components/layout/TabItemIncomeHeader";

import DividedArea from "@/components/common/DividedArea";

export default {
  name: "",

  data() {
    return {
      cellListTools: [
        {
          icon: "png1",
          link: "/videocreated?branch=9"
        },
        {
          icon: "png2",
          link: "/imageandtext?branch=10"
        },
        {
          icon: "png3",
          link: "/hundredshall?branch=8"
        }
      ],
      btnList:[
        {title:'名家入驻',link:'/checkIn/minjia'},
        {title:'景区入驻',link:''},
        {title:'商家入驻',link:''},
        {title:'墨客入驻',link:''},
        {title:'匠人入驻',link:''},
        {title:'拍客入驻',link:''},
      ],
      btnIndex:-1
    };
  },

  components: {
    TabItemIncomeHeader,
    DividedArea,
  },

  mounted() {
    this.getBannerImgFn("12");
  },

  methods: {
    goLink(linkStr){
      this.$router.push(linkStr)
    },
    checkIn(){
      if(this.btnIndex == -1) return
      this.$router.push(this.btnList[this.btnIndex].link)
    }
  },

};
</script>
<style lang='less' scoped>

.offer{
  width: 92%;
  margin: 15px auto 10px;
  padding-top: 31.8%;
  background-image: url("./banner.png");
  background-size: 100% 100%;
}
.tsb-list{
  display: flex;
  width: 92%;
  margin: 10px auto;
  .png1{
    background-image: url("1.png");
  }
  .png2{
    background-image: url("2.png");
  }
  .png3{
    background-image: url("3.png");
  }
  li{
    flex: 1;
    margin-right: 3%;
    background-size: 100% 100%;
    box-shadow:0px 5px 10px 0px rgba(0,101,255,0.06);
    padding-top: calc(33.333% - 2%);
  }
  li:last-of-type{
    margin-right: 0;
  }

}
.mg{
  background:linear-gradient(90deg,rgba(255,210,241,1) 0%,rgba(255,210,210,1) 100%);
  width: 92%;
  padding-bottom: 47.8%;
  margin: 10px auto;
  position: relative;
  border-radius: 8px;

  .content{
    position: absolute;
    top: 0;
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    top: 50%;
    margin-top: -16.5px;
    width: 100%;
    text-align: center;
    vertical-align:middle;
  }

  .btn-menu{
    bottom: -37.5px;
    left: 50%;
    margin-left: -27.5px;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    position: absolute;
    z-index: 11;
    background-image: url("./btn.png");
    background-size: 100% 100%;
  }
}
.tab-item-mall-wrap {
  background: #f5f5f5;
  padding-bottom: 10px;
}
.settled-in{
  width: 92%;
  margin: 10px auto 0;
  background-color: #fff;
  border-radius: 8px;
  padding: 40px 0 29px;
  overflow: hidden;
  position: relative;
  .banyuan{
    width: 68px;
    height: 34px;
    border-radius:  0 0 68px 68px;
    background-color: #f5f5f5;
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -34px;
  }
  li{
    background-color: #D9E0E7;
    width: 26%;
    line-height: 43px;
    text-align: center;
    margin: 0  0 10px 5.5%;
    border-radius: 8px;
    color: #99AEC4;
    float: left;
  }
  .active{
    background-color: #3976FF;
    color: #fff;
  }
}
</style>
