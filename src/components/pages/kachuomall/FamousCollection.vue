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
            <img src="./ming1.jpg" alt />
          </swiper-item>
          <swiper-item class="black">
            <img src="./ming2.jpg" alt />
          </swiper-item>
          <swiper-item class="black">
            <img src="./ming3.jpg" alt />
          </swiper-item>
        </swiper>
      </div>

      <!-- <TabItemMallAdvertise></TabItemMallAdvertise>
      <DividedArea></DividedArea>-->
      <FlexWrap :dataListCon="dataList" ref="dataList"></FlexWrap>
      <DividedArea></DividedArea>
      <Divider :content="title"></Divider>
      <GoodsList :goodList="goodsDataList"></GoodsList>
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
import { goodsBucketRecomm, FamousListData } from "@/servers/api";
import { Swiper, SwiperItem } from "vux";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "发布详情",
        showLeftBack: true,
        showRightMore: false
      },
      title: "精选好物",
      page: 0,
      list: [],
      refreshText: "下拉刷新",
      noDataText: "没有更多数据",
      dataList: [],
      goodsDataList: []
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
    this.setTitle();
    this.getFamousList();
    this.getGoodsComm();
    this.getBannerImgFn("6");
  },

  methods: {
    // 获取名家列表
    getFamousList() {
      FamousListData({})
        .then(res => {
          if (res.result === 1) {
            for (let i = 0; i < res.data.length; i++) {
              this.dataList.push({
                icon: res.data[i].list_img,
                name: res.data[i].list_name,
                link:
                  "/scenceconsumdetails?title=" +
                  res.data[i].list_name +
                  "&id=" +
                  res.data[i].type_id +
                  "&type=2&flag=2&carousel=" +
                  res.data[i].carousel_type
              });
            }
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    // 商品推荐
    getGoodsComm() {
      goodsBucketRecomm({
        type: 4
      })
        .then(res => {
          if (res.result === 1) {
            this.goodsDataList = res.data.result;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    setTitle() {
      this.TitleObjData.titleContent = this.$route.query.title;
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
  overflow: hidden;
  overflow-y: scroll;
  margin-top: 50px;
}
.scence-release-content {
  width: 100%;
  margin-top: 470px;
  background: #fff;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}
.vux-flexbox {
  overflow: scroll;
  overflow: scroll;
  height: 156px;
  flex-wrap: wrap;
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
