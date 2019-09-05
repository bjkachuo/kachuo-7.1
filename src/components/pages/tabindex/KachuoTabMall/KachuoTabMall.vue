<template>
  <div class="tab-item-mall-wrap">
    <TabItemMallHeader></TabItemMallHeader>

    <div style="background: #fff;">
      <div style="width: 76%;margin: 0 auto;">
        <tab :scroll-threshold="5" class="custom">
          <tab-item v-for="(item,index) in CommodityCategory" :key="index" :selected="index===1">{{item.name}}</tab-item>
        </tab>
      </div>
    </div>
    <div style="width:92%;margin: 15px auto 30px;">
      <swiper auto height="100px" class="custom">
        <swiper-item class="black"><img src="./banner.png" alt=""></swiper-item>
        <swiper-item class="black"><img src="./banner.png" alt=""></swiper-item>
        <swiper-item class="black"><img src="./banner.png" alt=""></swiper-item>
      </swiper>
    </div>
    <ul class="goods-type">
      <li v-for="item in cellListTools">
        <div class="goods-type-icon" :class="item.icon" @click="goodsTypeGo(item.link)"></div>
        <div style="text-align: center">{{item.title}}</div>
      </li>
    </ul>
    <!--    <CellDivider :cellList="cellListTools" class="tab-item-mall-tools-wrap"></CellDivider>-->
    <DividedArea></DividedArea>
    <!--    <Divider :content="dividerContent"></Divider>-->
    <GoodsList :goodList="goodsListData"></GoodsList>
    <!--    <span class="btn-wrap" @click="classification">-->
    <!--      <p class="btn">分类</p>-->
    <!-- <x-icon type="ios-arrow-down" size="30"></x-icon> -->
    <!--    </span>-->
  </div>
</template>

<script>
import TabItemMallHeader from "@/components/layout/TabItemMallHeader";

import { Scroller, Swiper, SwiperItem, Tab, TabItem } from "vux";
import DividedArea from "@/components/common/DividedArea";
import CellDivider from "@/components/common/CellDivider";
// import Divider from "@/components/common/Divider";
import GoodsList from "@/components/layout/GoodsList/GoodsList";
import { goodsBucketRecomm } from "@/servers/api";

export default {
  name: "",
  props: [""],
  data() {
    return {
      //商品类别
      CommodityCategory: [
        {
          name: "书法"
        },
        {
          name: "绘画"
        },
        {
          name: "陶瓷"
        },
        {
          name: "雕刻"
        },
        {
          name: "陶器"
        },
        {
          name: "刺绣"
        },
        {
          name: "非遗"
        }
      ],
      cellListTools: [
        {
          title: "品类视频",
          icon: "shipin",
          link: "/goodsVideoclassify?title=品类视频"
        },
        {
          title: "游园消费",
          icon: "youyuan",
          link: "/scenceconsum?title=景区消费&carousel=4"
        },
        {
          title: "景区好礼",
          icon: "haoli",
          link: "/scencegifts?title=景区好礼&carousel=5"
        },
        {
          title: "名家妙藏",
          icon: "miaocang",
          link: "/famouscollection?title=名家妙藏&carousel=6"
        }
      ],
      dividerContent: "猜你喜欢",
      goodsListData: []
    };
  },

  components: {
    TabItemMallHeader,
    // TabItemMallAdvertise,
    DividedArea,
    CellDivider,
    Tab,
    TabItem,
    // Divider,
    GoodsList,
    Scroller,
    Swiper,
    SwiperItem
  },

  computed: {},

  beforeMount() {},

  mounted() {
    this.getGoodsComm();
  },

  methods: {
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
    // classification(){
    //   this.$router.push("/goodsSlassification")
    // }
  },

  watch: {}
};
</script>
<style lang='less' scoped>
.box1 {
  width: 1000px;
}
.box1-item {
  margin: 0 20px;
  line-height: 44px;
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
      width: 27px;
      height: 27px;
      margin: 21px auto 8px;
      background-size: 100% 100%;
    }
    .shipin {
      background-image: url("./shipin.png");
    }
    .youyuan {
      background-image: url("./youyuan.png");
    }
    .haoli {
      background-image: url("./haoli.png");
    }
    .miaocang {
      background-image: url("./miaocang.png");
    }
  }
}
.tab-item-mall-wrap {
  padding-bottom: 30px;
  box-sizing: border-box;
  position: relative;
  background: rgba(245, 245, 245, 1);
}
.btn-wrap {
  position: absolute;
  top: 0px;
  left: 10px;
  width: 14%;
  height: 45px;
}
.btn {
  line-height: 45px;
  text-align: center;
  font-size: 16px;
  width: 66%;
  float: left;
}
.vux-x-icon {
  float: left;
  width: 34%;
  margin-top: 8px;
}
</style>

