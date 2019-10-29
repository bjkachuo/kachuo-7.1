<template>
  <div class="scence-gifts-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="scence-gifts-content" :style="scenceGiftsContent">
      <div style="width:92%;margin: 15px auto 10px;">
        <swiper auto height="100px" class="custom">
          <swiper-item class="black">
            <img src="./youxiaoone.jpg" alt />
          </swiper-item>
          <swiper-item class="black">
            <img src="./youxiaotwo.jpg" alt />
          </swiper-item>
          <swiper-item class="black">
            <img src="./youxiaothree.jpg" alt />
          </swiper-item>
        </swiper>
      </div>

      <!-- <TabItemMallAdvertise></TabItemMallAdvertise>
      <DividedArea></DividedArea>-->
      <FlexWrap :dataListCon="dataList" ref="dataList"></FlexWrap>
      <DividedArea></DividedArea>
      <div v-for="(item,index) in goodsListData" :key="index">
        <Divider :content="item.name"></Divider>
        <GoodsList :goodList="item.goods"></GoodsList>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import TabItemMallAdvertise from "@/components/layout/TabItemMallAdvertise";
import DividedArea from "@/components/common/DividedArea";
import FlexWrap from "@/components/layout/FlexWrap";
import Divider from "@/components/common/Divider";
import Scroll from "@/components/common/Scroller";
import GoodsList from "@/components/layout/GoodsList/GoodsList";
import { ShopGoodsListPush, ScenceGoodsClass } from "@/servers/api";
import { Swiper, SwiperItem } from "vux";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "游园消费",
        showLeftBack: true,
        showRightMore: false
      },
      title: "精选好物",
      dataList: [
        {
          name: "景区有礼",
          link:
            "/scenceconsumdetails?title=景区有礼&id=38&type=1&flag=3&carousel=14",
          class: "iconfont iconjingquhaoli1"
        },
        {
          name: "节日佳品",
          link:
            "/scenceconsumdetails?title=节日佳品&id=40&type=1&flag=3&carousel=15",
          class: "iconfont iconjierijiapin"
        },
        {
          name: "地方好物",
          link:
            "/scenceconsumdetails?title=地方好物&id=64&type=1&flag=3&carousel=16",
          class: "iconfont icondifanghaowu"
        },
        {
          name: "欣怡开市",
          link:
            "/scenceconsumdetails?title=欣怡开市&id=85&type=1&flag=3&carousel=17",
          class: "iconfont iconxinyikaishi"
        }
      ],
      goodsListData: []
    };
  },

  components: {
    Header,
    TabItemMallAdvertise,
    DividedArea,
    FlexWrap,
    Divider,
    Scroll,
    GoodsList,
    Swiper,
    SwiperItem
  },

  computed: {
    scenceGiftsContent() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {
    // this.setTitle();
    this.getClassList();
    this.getData();
    this.getBannerImgFn("4");
  },

  methods: {
    // setTitle() {
    //   this.TitleObjData.titleContent = this.$route.query.title;
    // },
    // 获取分类列表
    getClassList() {
      ScenceGoodsClass({})
        .then(res => {
          // console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 初始化数据
    getData() {
      ShopGoodsListPush({
        type: 1
      })
        .then(res => {
          if (res.result === 1) {
            this.goodsListData = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.scence-gifts-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.scence-gifts-content {
  width: 100%;
  height: 100%;
  margin-top: 50px;
  overflow: hidden;
  overflow-y: scroll;
}
.scence-release-content {
  width: 100%;
  margin-top: 390px;
  background: #fff;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}
</style>
<style lang="less" scoped>
/deep/ .vux-swiper {
  border-radius: 8px;
}

.custom {
  // border-radius: 8px;
  overflow: inherit;
  h2 {
    background: linear-gradient(
      90deg,
      rgba(57, 118, 255, 1) 0%,
      rgba(57, 62, 255, 1) 100%
    );
    width: 100%;
    height: 100%;
  }
  /deep/ .vux-indicator {
    right: 50%;
    margin-right: -32px;
    bottom: 0px;
  }
  /deep/ .vux-icon-dot {
    width: 15px !important;
    height: 3px !important;
  }

}
</style>
