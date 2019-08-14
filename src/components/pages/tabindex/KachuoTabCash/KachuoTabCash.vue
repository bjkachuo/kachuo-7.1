<template>
  <div class="tab-item-mall-wrap">
    <TabItemCashHeader></TabItemCashHeader>
<!--    <TabItemMallAdvertise></TabItemMallAdvertise>-->
    <div style="width:92%;margin: 15px auto 30px;" >
      <swiper auto height="100px" class="custom">
        <swiper-item class="black"><h2 class="title fadeInUp animated">它无孔不入</h2></swiper-item>
        <swiper-item class="black"><h2 class="title fadeInUp animated">你无处可藏</h2></swiper-item>
        <swiper-item class="black"><h2 class="title fadeInUp animated">不是它可恶</h2></swiper-item>
      </swiper>
    </div>

    <ul class="goods-type">
      <li v-for="item in cellListTools">
        <div class="goods-type-icon" :class="item.icon" @click="goodsTypeGo(item.link)"></div>
        <div style="text-align: center">{{item.title}}</div>
      </li>
    </ul>

    <div class="guess-you">
      <div class="guess-you-bgc"></div>
      <span>猜你喜欢</span>
    </div>
<!--    <CellDivider :cellList="cellListTools" class="tab-item-mall-tools-wrap"></CellDivider>-->

  </div>
</template>

<script>

import TabItemCashHeader from "@/components/layout/TabItemCashHeader";
import TabItemMallAdvertise from "@/components/layout/TabItemMallAdvertise";
import DividedArea from "@/components/common/DividedArea";
import CellDivider from "@/components/common/CellDivider";
import {Swiper,SwiperItem} from 'vux'
export default {
  name: "",
  props: [""],
  data() {
    return {
      cellListTools: [
        {
          title: "艺品回购",
          icon: "huigou",
          link: "/backleasesale?title=艺品回购&carousel=8"
        },
        {
          title: "艺品租赁",
          icon: "zulin",
          link: "/backleasesale?title=艺品租赁&carousel=9"
        },
        {
          title: "艺品寄卖",
          icon: "jimai",
          link: "/backleasesale?title=艺品寄卖&carousel=10"
        },
        {
          title: "信息消费",
          icon: "xinxi",
          link: "/informationconsum?carousel=11"
        }
      ]
    };
  },

  components: {
    TabItemCashHeader,
    TabItemMallAdvertise,
    DividedArea,
    CellDivider,
    Swiper,SwiperItem
  },

  computed: {},

  beforeMount() {},

  mounted() {
    this.getBannerImgFn("7");
  },

  methods: {
    previewMethod() {},
    addImageMethod() {},
    removeImageMethod() {}
  },

  watch: {}
};
</script>
<style lang='less' scoped>
.tab-item-mall-wrap {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.guess-you{
  width: 100px;
  margin: 20px auto 0;
  .guess-you-bgc{
    display: inline-block;
    width: 17px;
    height: 20px;
    background-image: url("./guess-you.png");
    background-size: 100% 100%;
  }
}
.custom  {
  overflow: inherit;

  /deep/ .vux-indicator{
    right: 50%;
    margin-right: -32px;
    bottom: -27px;
  }
  /deep/ .vux-icon-dot{
    width: 15px!important;
    height: 3px!important;
  }
}

.goods-type{
  width: 92%;
  margin: 0 auto;
  border-radius: 8px;
  background-color: #fff;
  height: 90px;
  display: flex;
  li{
    flex: 1;
    .goods-type-icon{
      width: 26px;
      height: 26px;
      margin: 21px auto 8px;
    }
    .huigou{
      background-image: url("./huigou.png");
      background-size: 100% 100%;
      width: 29px;
    }
    .zulin{
      background-image: url("./zulin.png");
      background-size: 100% 100%;
    }
    .jimai{
      background-image: url("./jimai.png");
      background-size: 100% 100%;
    }
    .xinxi{
      background-image: url("./xinxi.png");
      background-size: 100% 100%;
    }
  }
}
</style>
