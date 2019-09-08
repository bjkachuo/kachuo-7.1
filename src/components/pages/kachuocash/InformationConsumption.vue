<template>
  <div class="scence-consum-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="scence-consum-content" :style="scenceConsumHeight">
      <!-- <TabItemMallAdvertise></TabItemMallAdvertise>
      <DividedArea></DividedArea>-->
      <div style="width:92%;margin: 15px auto 30px;">
        <swiper auto height="100px" class="custom">
          <swiper-item class="black">
            <img src="./xinxixiaofeitwo.jpg" alt />
          </swiper-item>
          <swiper-item class="black">
            <img src="./xinxixiaofeitwo.jpg" alt />
          </swiper-item>
          <swiper-item class="black">
            <img src="./xinxixiaofeitwo.jpg" alt />
          </swiper-item>
        </swiper>
      </div>

      <Divider :content="title"></Divider>
      <main class="position-box">
        <vue-better-scroll
          class="wrapper"
          ref="scroll"
          :scrollbar="scrollbarObj"
          :pullDownRefresh="pullDownRefreshObj"
          :pullUpLoad="pullUpLoadObj"
          :startY="parseInt(startY)"
          @pullingDown="onPullingDown"
          @pullingUp="onPullingUp"
        >
          <VideoListWrap :videoDataList="items"></VideoListWrap>
        </vue-better-scroll>
      </main>
    </div>
  </div>
</template>

<script>
let totalCount = 0;
import Header from "@/components/common/Header";
import TabItemMallAdvertise from "@/components/layout/TabItemMallAdvertise";
import DividedArea from "@/components/common/DividedArea";
import Divider from "@/components/common/Divider";
import Scroll from "@/components/common/Scroller";
import VideoListWrap from "@/components/common/VideoListWrap";
import { InformationConsum } from "@/servers/api";
import { Swiper, SwiperItem } from "vux";

export default {
  name: "",
  props: [""],
  data() {
    return {
      title: "信息消费",
      TitleObjData: {
        titleContent: "信息消费",
        showLeftBack: true,
        showRightMore: false
      },
      page: 1,
      scrollbarObj: {
        fade: true
      },
      pullDownRefreshObj: {
        threshold: 50,
        stop: 40
      },
      pullUpLoadObj: {
        threshold: 0,
        txt: {
          more: "加载更多",
          noMore: "没有更多数据了"
        }
      },
      startY: 0,
      scrollToX: 0,
      scrollToY: 0,
      scrollToTime: 700,
      items: []
    };
  },

  components: {
    Header,
    TabItemMallAdvertise,
    DividedArea,
    Divider,
    Scroll,
    VideoListWrap,
    Swiper,
    SwiperItem
  },

  computed: {
    scenceConsumHeight() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {
    this.getBannerImgFn("11");
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
        InformationConsum({
          page: this.page
        })
          .then(res => {
            console.log(res);
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
  beforeDestroy() {},

  watch: {}
};
</script>
<style lang='css' scoped>
.scence-consum-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
h2 {
  background: linear-gradient(
    90deg,
    rgba(57, 118, 255, 1) 0%,
    rgba(57, 62, 255, 1) 100%
  );
  width: 100%;
  height: 100%;
}
.scence-consum-content {
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 50px;
}
.scence-release-content {
  width: 100%;
  margin-top: 310px;
}
.position-box {
  position: absolute;
  top: 310px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
<style lang="less" scoped>
/deep/ .vux-swiper {
  border-radius: 8px;
}
.custom {
  overflow: inherit;
  border-radius: 8px;
  /deep/ .vux-indicator {
    right: 50%;
    margin-right: -32px;
    bottom: -27px;
  }
  /deep/ .vux-icon-dot {
    width: 15px !important;
    height: 3px !important;
  }
}
</style>
