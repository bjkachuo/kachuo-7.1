<template>
  <div class="back-lease-sale-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="back-lease-sale-content-wrap" :style="scrollContentHeight">
      <TabItemMallAdvertise></TabItemMallAdvertise>
      <DividedArea></DividedArea>
      <div style="width:92%;margin: 15px auto 30px;">
        <swiper auto height="100px" class="custom">
          <swiper-item class="black">
            <h2 class="title fadeInUp animated"></h2>
          </swiper-item>
          <swiper-item class="black">
            <h2 class="title fadeInUp animated"></h2>
          </swiper-item>
          <swiper-item class="black">
            <h2 class="title fadeInUp animated"></h2>
          </swiper-item>
        </swiper>
      </div>
      <Divider :content="TitleObjData.titleContent"></Divider>
      <div class="scroll-wrap-con" :style="scrollWrapHeight">
        <GoodsListWrapBack v-if="this.TitleObjData.titleContent === '艺品回购'"></GoodsListWrapBack>
        <GoodsListWrapLease v-if="this.TitleObjData.titleContent === '艺品租赁'"></GoodsListWrapLease>
        <GoodsListWrapSent v-if="this.TitleObjData.titleContent === '艺品寄卖'"></GoodsListWrapSent>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import TabItemMallAdvertise from "@/components/layout/TabItemMallAdvertise";
import GoodsListWrapBack from "@/components/layout/GoodsListWrapBack";
import GoodsListWrapLease from "@/components/layout/GoodsListWrapLease";
import GoodsListWrapSent from "@/components/layout/GoodsListWrapSent";
import DividedArea from "@/components/common/DividedArea";
import Divider from "@/components/common/Divider";
import { Swiper, SwiperItem } from "vux";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },

  components: {
    Header,
    TabItemMallAdvertise,
    DividedArea,
    GoodsListWrapBack,
    GoodsListWrapLease,
    GoodsListWrapSent,
    Divider,
    Swiper,
    SwiperItem
  },

  computed: {
    scrollContentHeight() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    },
    scrollWrapHeight() {
      return { height: document.documentElement.clientHeight - 200 + "px" };
    }
  },

  beforeMount() {},

  mounted() {
    this.setTitle();
  },

  methods: {
    setTitle() {
      let title = this.$route.query.title;
      this.TitleObjData.titleContent = title;
      if (title === "艺品回购") {
        this.getBannerImgFn("8");
      } else if (title === "艺品租赁") {
        this.getBannerImgFn("9");
      } else {
        this.getBannerImgFn("10");
      }
    }
  },

  watch: {
    $route(to, from) {
      this.setTitle();
    }
  }
};
</script>
<style lang='css' scoped>
.back-lease-sale-content-wrap {
  width: 100%;
  margin-top: 45px;
}
.scence-release-content {
  margin-top: 300px;
}
</style>
<style lang="less" scoped>
.custom {
  overflow: inherit;
  h2{
    background:linear-gradient(90deg,rgba(57,118,255,1) 0%,rgba(57,62,255,1) 100%);
    width: 100%;
    height: 100%;
  }
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
