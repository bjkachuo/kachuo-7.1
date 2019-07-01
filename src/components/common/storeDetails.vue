<template>
  <div class="store-details-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="store-details-content">
        1
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
export default {
  data() {
    return {
      TitleObjData: {
        titleContent: "商家详情",
        showLeftBack: true,
        showRightMore: false
      },
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true
        },
        autoplay: {
          disableOnInteraction: false //触碰后继续轮播
        },
        speed: 600,
        loop: true, //循环模式
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        centeredSlides: true //元素居中
      }
    };
  },
  components: {
    Header
  },
  created() {},
  methods: {}
};
</script>
<style lang='css' scoped>
.store-details-warp {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.store-details-content {
  width: 375px;
  height: 100%;
  background: darkgreen;
  margin-top: 46px;
}
</style>
