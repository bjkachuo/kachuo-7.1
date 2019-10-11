<template>
  <div class="tab-item-mall-wrap">
    <TabItemMallHeader></TabItemMallHeader>

    <div style="background: #fff;position:relative;position: fixed;top: 45px;z-index: 99999;">
      <div style="width: 76%;margin: 0 0 0 4%;">
        <tab :scroll-threshold="5" class="custom" custom-bar-width="50%" >
          <tab-item
            v-for="(item,index) in CommodityCategory"
            :key="index"
            :selected="index===1"
          >{{item.name}}</tab-item>
        </tab>
      </div>
      <div class="classification" @click="classification">
        <p>分类</p>
      </div>
    </div>
    <div style="width:92%;margin: 15px auto 10px;">
      <swiper auto height="110px" class="custom">
        <swiper-item class="black">
          <img src="./mallone.png" alt />
        </swiper-item>
        <swiper-item class="black">
          <img src="./malltwo.jpg" alt />
        </swiper-item>
        <swiper-item class="black">
          <img src="./mallthree.jpg" alt />
        </swiper-item>
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
    <div style="width:92%;margin: 0px auto 10px;">
      <swiper auto height="70px" class="custom">
        <swiper-item class="black">
          <img src="./7-min.png" alt />
        </swiper-item>
        <swiper-item class="black">
          <img src="./3-min.png" alt />
        </swiper-item>
        <swiper-item class="black">
          <img src="./7-min.png" alt />
        </swiper-item>
      </swiper>
    </div>

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
          name: "紫砂"
        },
        {
          name: "雕刻"
        },
        {
          name: "瓷器"
        },
        {
          name: "其他"
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
    //跳转分类页面
    classification() {
      this.$router.push("/goodsSlassification");
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
      // alert(link)
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
.classification {
  position: absolute;
  right: 3%;
  top: 9px;
  font-size: 16px;
  font-weight: 800;
}
.box1 {
  width: 1000px;
}
.box1-item {
  margin: 0 20px;
  line-height: 44px;
}
/deep/ .vux-swiper {
  border-radius: 8px;
}

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
/deep/ .custom .vux-indicator {
  right: 50%;
  margin-right: -32px;
  bottom: 0px;
}
</style>

