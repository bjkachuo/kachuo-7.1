<template>
  <div class="tab-item-mall-wrap">
    <TabItemCashHeader></TabItemCashHeader>
    <!--    <TabItemMallAdvertise></TabItemMallAdvertise>-->
    <div style="width:92%;margin: 15px auto 30px;">
      <swiper auto height="100px" class="custom">
        <swiper-item class="black">
          <img src="./banner.png" alt />
        </swiper-item>
        <swiper-item class="black">
          <img src="./banner.png" alt />
        </swiper-item>
        <swiper-item class="black">
          <img src="./banner.png" alt />
        </swiper-item>
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
    <GoodsList :goodList="goodsListData"></GoodsList>

    <!--    <CellDivider :cellList="cellListTools" class="tab-item-mall-tools-wrap"></CellDivider>-->
  </div>
</template>

<script>
import TabItemCashHeader from "@/components/layout/TabItemCashHeader";
import DividedArea from "@/components/common/DividedArea";
import CellDivider from "@/components/common/CellDivider";
import GoodsList from "@/components/layout/GoodsList/GoodsList";
import { goodsBucketRecomm } from "@/servers/api";

import { Swiper, SwiperItem } from "vux";
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
      ],
      goodsListData: []
    };
  },

  components: {
    TabItemCashHeader,

    DividedArea,
    CellDivider,
    Swiper,
    SwiperItem,
    GoodsList
  },

  computed: {},

  beforeMount() {},

  mounted() {
    this.getBannerImgFn("7");
    this.getGoodsComm();
  },

  methods: {
    previewMethod() {},
    addImageMethod() {},
    removeImageMethod() {},
    goodsTypeGo(link) {
      this.$router.push(link);
    },
    // 商品推荐
    getGoodsComm() {
      goodsBucketRecomm({
        type: 2
      })
        .then(res => {
          if (res.result === 1) {
            this.goodsListData = res.data.result;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    goodsTypeGo(link) {
      this.$router.push(link);
      // console.log(link);
    }
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
.guess-you {
  width: 100px;
  margin: 20px auto 0;
  .guess-you-bgc {
    display: inline-block;
    width: 17px;
    height: 20px;
    background-image: url("./guess-you.png");
    background-size: 100% 100%;
    position: relative;
    top: 9px;
  }
}
.custom {
  // overflow: inherit;
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

.goods-type {
  width: 92%;
  margin: 0 auto;
  border-radius: 8px;
  background-color: #fff;
  height: 90px;
  display: flex;
  li {
    flex: 1;
    .goods-type-icon {
      width: 26px;
      height: 26px;
      margin: 21px auto 8px;
    }
    .huigou {
      background-image: url("./huigou.png");
      background-size: 100% 100%;
    }
    .zulin {
      background-image: url("./zulin.png");
      background-size: 100% 100%;
    }
    .jimai {
      background-image: url("./jimai.png");
      background-size: 100% 100%;
    }
    .xinxi {
      background-image: url("./xinxi.png");
      background-size: 100% 100%;
    }
  }
}
</style>
