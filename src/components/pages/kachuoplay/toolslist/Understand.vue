<template>
  <div class="scence-release-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <main class="position-box" :style="contentNoHeaderHeight">
      <vue-better-scroll
        class="wrapper"
        ref="scroll"
        :scrollbar="scrollbarObj"
        :pullDownRefresh="pullDownRefreshObj"
        :pullUpLoad="pullUpLoadObj"
        :startY="parseInt(startY,10)"
        @pullingDown="onPullingDown"
        @pullingUp="onPullingUp"
      >
        <div style="width:92%;margin: 0px auto 0px;padding:10px 0;">
          <swiper auto height="110px" class="custom">
            <swiper-item class="black">
              <img src="./13-min.png" alt />
            </swiper-item>
            <swiper-item class="black">
              <img src="./14-min.png" alt />
            </swiper-item>
            <swiper-item class="black">
              <img src="./11-min.png" alt />
            </swiper-item>
          </swiper>
        </div>

        <VideoList :dataList="items"></VideoList>
      </vue-better-scroll>
    </main>
  </div>
</template>

<script>
let totalCount = 0;
import Header from "@/components/common/ReleaseHeader";
import VideoList from "@/components/layout/VideoList";
import Scroll from "@/components/common/Scroller";
import DividedArea from "@/components/common/DividedArea";
import { ScenceRememberAndLearn } from "@/servers/api";
import { Swiper, SwiperItem } from "vux";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "了解的",
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
      startY: "0",
      scrollToX: 0,
      scrollToY: 0,
      scrollToTime: 700,
      items: [],
      page: 1
    };
  },

  components: {
    Header,
    VideoList,
    Scroll,
    DividedArea,
    Swiper,
    SwiperItem
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
        ScenceRememberAndLearn({
          type: this.$route.query.branch,
          page: this.page,
          scenicid: sessionStorage.getItem("currentScenic")
        })
          .then(res => {
            if (res.result === 1) {
              totalCount = res.data.totalofnum;
              setTimeout(() => {
                if (res.data.comment.length) {
                  arr = res.data.comment;
                  resolve(res.data.comment);
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
<style lang='css' scoped>
.scence-release-wrap {
  width: 100%;
  height: 100%;
  background: #f9f9f9;
}
.scence-release-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 45px;
}
.position-box {
  position: absolute;
  top: 45px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
<style lang="less" scoped>
.custom {
  overflow: inherit;
  // border-radius: 8px;
  /deep/ .vux-indicator {
    right: 50%;
    margin-right: -32px;
    bottom: -27px;
  }
  /deep/ .vux-icon-dot {
    width: 15px !important;
    height: 3px !important;
  }
  /deep/ .vux-tab-ink-bar {
    display: none;
  }
  /deep/ .vux-tab {
    background: transparent;
    .vux-tab-item {
      background: transparent;
    }
  }
}
/deep/ .custom .vux-indicator {
  right: 50%;
  margin-right: -32px;
  bottom: 0px;
}
/deep/ .vux-swiper {
  border-radius: 8px;
}
</style>