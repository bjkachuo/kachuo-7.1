<template>
  <div class="scence-release-wrap">
<!--    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>-->
    <div class="banner">
      <swiper auto height="234px" v-model="swiperIndex" class="custom">
        <swiper-item class="black"><h2 class="title fadeInUp animated">它无孔不入</h2></swiper-item>
        <swiper-item class="black"><h2 class="title fadeInUp animated">你无处可藏</h2></swiper-item>
        <swiper-item class="black"><h2 class="title fadeInUp animated">不是它可恶</h2></swiper-item>
      </swiper>
      <div class="swiper-index">{{swiperIndex + 1}}/3</div>
      <div class="back">
        <x-icon type="ios-arrow-left" size="28"></x-icon>
      </div>
    </div>
    <div class="detile">
      <h2 class="title">{{name}} <div class="leave">{{leave}}</div></h2>

    </div>
<!--    <main class="position-box" :style="contentNoHeaderHeight">-->
<!--      <vue-better-scroll-->
<!--        class="wrapper"-->
<!--        ref="scroll"-->
<!--        :scrollbar="scrollbarObj"-->
<!--        :pullDownRefresh="pullDownRefreshObj"-->
<!--        :pullUpLoad="pullUpLoadObj"-->
<!--        :startY="parseInt(startY)"-->
<!--        @pullingDown="onPullingDown"-->
<!--        @pullingUp="onPullingUp"-->
<!--      >-->
<!--        <ScenceRelease :dataList="items"></ScenceRelease>-->
<!--      </vue-better-scroll>-->
<!--    </main>-->
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

  beforeMount() {},

  mounted() {
    this.onPullingDown();
  },

  methods: {
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
    }
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
