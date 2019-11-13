<template>
  <div class="tab-item-mall-wrap">
    <div v-if="mask" class="mask2" @click="maskClick" :class="detileClass"></div>
    <TabItemIncomeHeader></TabItemIncomeHeader>
    <div class="offer" @click="goLink('/yaoyuechuangzuo')"></div>
    <ul class="tsb-list">
       <li v-for="item in cellListTools" :class="item.icon" @click="goLink(item.link )"></li>
    </ul>
    <div class="mg">
      <div class="content" @click="mask = true" style="overflow: hidden;"><img :src="btnIndex != -1 ? btnList[btnIndex].src : btnList[0].src" alt="" ></div>
      <div class="btn-menu" @click="checkIn"></div>
    </div>
    <div class="settled-in">
      <div class="banyuan"></div>
      <ul>
        <li v-for="(item,index) in btnList" :class="{'active':index == btnIndex}" @click="btnIndex = index">{{item.title}}</li>
      </ul>
    </div>
    <div class="mask" v-if="alertFlag" >
      <div class="alert-box">
        <div class="top-bg">卡戳APP入驻服务协议</div>
        <div class="alert-content">
          <div class="title">
            <p>在您成为卡戳APP入驻用户之前，您需要通 过阅读卡戳APP入驻服务协议并点击同意的 形式在线签署以下协议，请您务必仔细阅读 并点击同意的形式在线签署以下协议，请您务必仔细阅读并理解协议中的条款内容后再点击同意。</p>
          </div>
        </div>
        <div class="xieyi" @click="xieyi">《卡戳APP入驻服务协议》</div>
        <div class="agree" @click="agree">同意并继续</div>
        <div class="veto" @click="alertFlag = false">我再想想</div>
      </div>
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
          link: "/imageandtext?branch=10"
        },
        {
          icon: "png2",
          link: "/videocreated?branch=9"
        },
        {
          icon: "png3",
          link: "/hundredshall?branch=8"
        }
      ],
      mask:false,
      detileClass:'名家入驻',
      btnList:[
        {title:'名家入驻',link:'/checkIn/minjia',src:require('@/components/pages/tabindex/KachuoTabIncome/mingjia.jpg')},
        {title:'景区入驻',link:'/checkIn/jingqu',src:require('@/components/pages/tabindex/KachuoTabIncome/jingqu.jpg')},
        {title:'商家入驻',link:'/checkIn/shangjia',src:require('@/components/pages/tabindex/KachuoTabIncome/shangjia.jpg')},
        {title:'墨客入驻',link:'/checkIn/moke?type=moke',src:require('@/components/pages/tabindex/KachuoTabIncome/moke.jpg')},
        {title:'匠人入驻',link:'/checkIn/moke?type=jiangren',src:require('@/components/pages/tabindex/KachuoTabIncome/jiangren.jpg')},
        {title:'拍客入驻',link:'/checkIn/moke?type=paike',src:require('@/components/pages/tabindex/KachuoTabIncome/paike.jpg')},
      ],
      btnIndex:0,
      alertFlag : false
    };
  },

  components: {
    TabItemIncomeHeader,
    DividedArea,
  },

  mounted() {
    this.getBannerImgFn("12");
  },

  watch:{
    btnIndex(to){
      console.log(to);
      this.detileClass = this.btnList[to].title
    }
  },

  methods: {
    goLink(linkStr){
      this.$router.push(linkStr)
    },
    checkIn(){
      if(this.btnIndex == -1) return
      this.alertFlag = true
    },
    agree(){
      this.alertFlag = false
      this.shiMing()
    },
    maskClick(){
      this.mask = false
      this.shiMing()
    },
    shiMing(){
      if(JSON.parse(sessionStorage.userLoginInfo).sm_createtime != '0'){
        this.$router.push(this.btnList[this.btnIndex].link)
      }else{
        this.$vux.toast.show({
          type: "text",
          text: '请先实名认证',
          position: "middle",
          time: 1000
        });
        this.$router.push("/Ucenter/Certification");
      }
    },


    xieyi(){
      this.$router.push('/checkIn/agreement')
    }
  },

};
</script>
<style lang='less' scoped>
  .名家入驻{
    background-image: url("./mingjia/名家.jpg");
  }
  .景区入驻{
    background-image: url("./jingqu/景区.jpg");
  }
  .商家入驻{
    background-image: url("./shangjia/商家.jpg");
  }
  .墨客入驻{
    background-image: url("./moke/墨客.jpg");
  }
  .匠人入驻{
    background-image: url("./moke/匠人.jpg");
  }
  .拍客入驻{
    background-image: url("./moke/拍客.jpg");
  }
  .mask2{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-size: 100% 100%;
    z-index: 99999;
  }
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
  width: 92%;
  margin: 10px auto;
  position: relative;
  border-radius: 8px;
  background-image: url("mingjia.jpg");
  background-size: 100% 100%;
  .content{

    border-radius: 8px;
    width: 100%;
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
  .mask{
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    .alert-box{
      width: 92%;
      margin: 30% auto 0;
      border-radius: 16px;
      background-color: #fff;
      overflow: hidden;
      .top-bg{
        line-height: 95px;
        background-size: 100% 100%;
        background-image: url("./bluebg.png");
        text-align: center;
        font-size: 20px;
        color: #fff;
      }
      .alert-content{
        .title{
          padding: 20px 20px 0 20px;
          p{
            border-bottom:1px solid #ddd;
            padding-bottom: 20px;
          }
        }
      }
      .xieyi{
        line-height: 43px;
        font-size: 14px;
        color: #3976FF;
        width: 92%;
        margin-left: 4%;
      }
      .agree{
        line-height: 50px;
        color: #fff;
        background:linear-gradient(90deg,rgba(57,118,255,1) 0%,rgba(57,150,255,1) 100%);
        width: 92%;
        margin: 15px auto 0;
        border-radius: 25px;
        text-align: center;
        font-size: 16px;
      }
      .veto{
        color: #3976FF;
        line-height: 50px;
        text-align: center;
        font-size: 16px;
      }
    }
  }
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
