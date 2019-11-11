<template>
  <div class="scence-release-wrap">
<!--    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>-->
    <div class="banner">
      <swiper auto height="234px" v-model="swiperIndex" class="custom">
        <swiper-item class="black"><img src="../../../../../assets/images/蓬莱阁.jpg" alt=""></swiper-item>
        <swiper-item class="black"><img src="../../../../../assets/images/蓬莱阁.jpg" alt=""></swiper-item>
        <swiper-item class="black"><img src="../../../../../assets/images/蓬莱阁.jpg" alt=""></swiper-item>
      </swiper>
      <div class="swiper-index">{{swiperIndex + 1}}/3</div>
      <div class="back" @click="goBack">
        <x-icon type="ios-arrow-left" size="28"></x-icon>
      </div>
    </div>
    <div class="detile">
      <h2 class="title">{{name}} <div class="leave">{{leave}}</div></h2>
      <div style="border-bottom: 1px solid #ddd">
        <div class="synopsis">
          <div style="color:#222;display: inline-block;width: calc(100% - 4em);overflow: hidden; white-space: nowrap; text-overflow: ellipsis;line-height: 30px">1231231231231123123123123112312312312311231231231231</div>
          <div style="display: inline-block;width: 4em;float: right;text-align: right" @click="goPage('/scencerelease/dynamic/ScenicContent?index=0')">简介<x-icon type="ios-arrow-right" size="20"></x-icon></div>
        </div>
        <div class="synopsis">
          <div style="color:#222;display: inline-block;width: calc(100% - 5em);overflow: hidden; white-space: nowrap; text-overflow: ellipsis;line-height: 30px">1231231231231123123123123112312312312311231231231231</div>
          <div style="display: inline-block;width: 5em;float: right;text-align: right" @click="goPage('/scencerelease/dynamic/ScenicContent?index=1')">服务项<x-icon type="ios-arrow-right" size="20"></x-icon></div>
        </div>
      </div>
      <div class="tel-box">
        <span>服务电话：</span>
        <span>(0535)5666900</span>
        <div class="shu">
          <i></i>
        </div>
      </div>
    </div>
    <div class="dynamic" @click="goPage('/scencerelease/dynamic')">
      <h2>景区动态</h2>
      <div style="display: inline-block;width: 4em;float: right;text-align: right;font-size: 16px;">资讯<x-icon type="ios-arrow-right" size="20"></x-icon></div>
    </div>
    <div class="guide" @click="goPage('/scencerelease/guideList')">
      <span>“资质齐全，价格公开透明”</span>
      <div>
        <i class="guide-icon"></i>
        <span>预约导游</span>
      </div>
    </div>
    <div class="guide">
      <span>景区卫生间、救助站、周边交通</span>
      <div>
        <i class="map-icon"></i>
        <span>地图导航</span>
      </div>
    </div>
    <div class="guide" @click="goPage('/scencerelease/dynamic/ScenicContent?index=2')">
      <span>安全提示</span>
      <div style="display: inline-block;width: 4em;float: right;text-align: right;font-size: 16px;"><x-icon type="ios-arrow-right" size="20" style="position: relative;top: 5px;"></x-icon></div>
    </div>
  </div>
</template>

<script>
let totalCount = 0;
import { Swiper,SwiperItem } from 'vux'
// import Header from "@/components/common/Header";
import ScenceRelease from "@/components/layout/ScenceRelease";
import { ScenceReleaseList } from "@/servers/api";

export default {
  name: "",
  props: [""],
  data() {
    return {
      swiperIndex:0,
      name:'蓬莱阁',
      leave:'5A',
      page: 0,
      list: [],
      refreshText: "下拉刷新",
      noDataText: "没有更多数据",
      TitleObjData: {
        titleContent: "景区发布",
        showLeftBack: true,
        showRightMore: false
      },
      scrollbarObj: {
        fade: true
      },
      pullDownRefreshObj: {
        threshold: 70,
        stop: 40
      },
      pullUpLoadObj: {
        threshold: 0,
        txt: {
          more: "加载更多",
          noMore: "没有更多数据了"
        }
      },
      startY: '0',
      scrollToX: 0,
      scrollToY: 0,
      scrollToTime: 700,
      items: [],
      page: 1
    };
  },

  components: {
    // Header,
    Swiper,
    SwiperItem,
    ScenceRelease
  },

  computed: {
    contentNoHeaderHeight: function() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },


  mounted() {
    this.onPullingDown();
  },

  methods: {
    goPage(src){
      this.$router.push(src)
    },
    goBack(){
      this.$router.go(-1)
    },

    // 滚动到页面顶部
    scrollTo() {
      this.$refs.scroll.scrollTo(
        this.scrollToX,
        this.scrollToY,
        this.scrollToTime
      );
    },
    // 模拟数据请求
    getData() {
      return new Promise(resolve => {
        let arr = [];
        ScenceReleaseList({
          page: this.page
        })
          .then(res => {
            if (res.result === 1) {
              totalCount = res.data.totalofnum;
              setTimeout(() => {
                if (res.data.dynamic.length) {
                  arr = res.data.dynamic;
                  resolve(res.data.dynamic);
                } else {
                  this.$refs.scroll.forceUpdate(false);
                }
              }, 1000);
            }
          })
          .catch(err => {
            console.log(err);
          });
      });
    },
    onPullingDown() {
      totalCount = 0;
      this.page = 1;
      this.getData().then(res => {
        this.items = res;
        this.$refs.scroll.forceUpdate(true);
      });
    },
    onPullingUp() {
      this.page += 1;
      this.getData().then(res => {
        this.items = this.items.concat(res);
        if (this.items.length < totalCount) {
          this.$refs.scroll.forceUpdate(true);
        } else {
          this.$refs.scroll.forceUpdate(false);
        }
      });
    }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
.banner{
  position: relative;
  .custom{
    /deep/.vux-indicator{
      display: none;
    }
    .black{
      background-color: red;
    }
  }
  .back{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    position: absolute;
    background-color: rgba(0,0,0,.5);
    left: 15px;
    top: 31px;
    /deep/.vux-x-icon-ios-arrow-left {
      fill: #fff;
      margin-left: 2px;
      margin-top: 2px;
    }
  }
  .swiper-index{
    display: inline-block;
    height:22px;
    background:rgba(0,0,0,.5);
    border-radius:11px;
    line-height: 22px;
    padding: 0 16px;
    color: #fff;
    position: absolute;
    right: 15px;
    bottom: 15px;
  }
}

.detile{
  margin-top: 5px ;
  padding: 0 15px;
  .title{
    font-size: 24px;
    color: #222222;
    .leave{
      font-size: 12px;
      line-height: 19px;
      text-align: center;
      display: inline-block;
      width:30px;
      height:19px;
      background:linear-gradient(90deg,rgba(255,202,0,1) 0%,rgba(244,224,43,1) 100%);
      border-radius:9.5px 9.5px 9.5px 4px;
      position: relative;
      top: -4px;
    }
  }
  .synopsis{
    font-size: 16px;
    color: rgba(153,153,153,1);
  }
  /deep/.vux-x-icon-ios-arrow-right{
    position: relative;
    top: 5px;
    fill: rgba(153,153,153,1);
  }
  .tel-box{
    font-size: 16px;
    line-height: 51px;
    color:rgba(102,102,102,1);
    .shu{
      height: 20px;
      display: inline-block;
      float: right;
      width: 72px;
      margin: 15px auto;
      border-left: 2px solid rgba(229,229,229,1);
      i{
        display: block;
        width: 12px;
        height: 12px;
        background-size:100% 100%;
        margin: 4px auto;
        background-image: url("./tel-icon.png");
      }
    }
  }
}
.dynamic,.map{
  height: 55px;
  line-height: 55px;
  background-color: #FFECD8;
  padding: 0 15px;
  color: #E4A983;
  border-radius:0px 0px 8px 8px;
  h2{
    color: #E4A983;
    font-size: 16px;
    font-weight: bold;
    float: left;
    line-height: 55px;
  }
  /deep/.vux-x-icon-ios-arrow-right{
    position: relative;
    top: 5px;
    fill: #E4A983;
  }
}
.guide{
  line-height: 55px;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 8px;
  box-shadow:0px 5px 10px 0px rgba(0,101,255,0.06);
  font-size: 16px;
  padding: 0 15px;
  div{
    float: right;
    line-height: 55px;
    font-weight:500;
    color: #3976FF;
  }
  i{
     display: inline-block;
     width: 15px;
     height: 15px;
     background-size: 100% 100%;
     position: relative;
     top: 2px;
  }
  .guide-icon{
    background-image: url("guide.png");
  }
  .map-icon{
    width: 12px;
    background-image: url("position.png");
  }
}
.scence-release-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f9f9f9;
}
.scence-release-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
  margin-top: 45px;
  padding-bottom: 10px;
}
.position-box {
  position: absolute;
  top: 55px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
