<template>
  <div class="scence-service-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="scence-service-content">
      <div class="content-one">
        <div class="swp-wrap">
          <swiper :list="baseList" height="110px" loop auto dots-position="center"></swiper>
        </div>
        <div class="Selected-warp">
          <flexbox>
            <flexbox-item v-for="(item,index) in dataListOne" :key="index">
              <div class="flex-demo" @click="getItem(item.link)">
                <div class="img-wrap">
                  <img :src="item.imgSrc" alt />
                </div>
                <p>{{item.name}}</p>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
      <div style="width:92%;margin: 15px auto 10px;">
        <swiper auto height="70px" class="custom">
          <swiper-item class="black">
            <img src="../../assets/images/8-min.png" alt />
          </swiper-item>
          <swiper-item class="black">
            <img src="../../assets/images/5-min.png" alt />
          </swiper-item>
          <swiper-item class="black">
            <img src="../../assets/images/4-min.png" alt />
          </swiper-item>
        </swiper>
      </div>
      <div class="content-two">
        <div class="nearby">
          <p>附近商家</p>
        </div>
        <div class="store-list-warp">
          <div
            class="recommend"
            v-for="(item,index) in recommend"
            :key="index"
            @click="details(item.id,item.type)"
          >
            <div class="inLeft">
              <img :src="item.video_image" alt />
              <p>{{item.typename}}</p>
            </div>
            <div class="inMid">
              <p>{{item.name}}</p>
              <i style="color:red;">人均{{item.price}}元</i>
              <span>
                <div class="house">
                  <img src="../../assets/images/fangzi.png" alt />
                </div>
                <div class="characteristic">特色:{{item.product}}</div>
              </span>
            </div>
            <div class="inRight">
              <p>{{item.distance}}km</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/common/Header";
// import { swiper, swiperSlide } from "vue-awesome-swiper";
import { GroupTitle, XButton, Cell, Swiper, SwiperItem } from "vux";

import {
  Scroller,
  PopupRadio,
  PopupPicker,
  Rater,
  Flexbox,
  FlexboxItem
} from "vux";
// import "element-ui/lib/theme-chalk/index.css";
export default {
  name: "",
  props: [""],
  data() {
    return {
      //推荐商家列表：
      recommend: [],
      baseList: [
        {
          url: "javascript:",
          img: require("../../assets/images/yyone.jpg")
        },
        {
          url: "javascript:",
          img: require("../../assets/images/yytwo.jpg")
        },
        {
          url: "javascript:",
          img: require("../../assets/images/yythree.jpg")
        }
      ],

      dataListOne: [
        {
          name: "吃吧",
          link: "/businessList?type=1&name=吃吧",
          imgSrc: require("@/assets/images/chi.png")
        },
        {
          name: "喝吧",
          link: "/businessList?type=2&&name=喝吧",
          imgSrc: require("@/assets/images/he.png")
        },
        {
          name: "玩吧",
          link: "/businessList?type=3&&name=玩吧",
          imgSrc: require("@/assets/images/wan.png")
        },
        {
          name: "住吧",
          link: "/businessList?type=4&name=住吧",
          imgSrc: require("@/assets/images/zhu.png")
        },
        {
          name: "游吧",
          link: "/TourList",
          imgSrc: require("@/assets/images/you.png")
        }
      ],

      //商家type
      typeNum: "",
      //选择分类绑定
      option2: "",
      //排序绑定
      option3: "",
      //选择类别列表
      checkList: [],
      //排序列表
      sortList: [],
      //轮播图
      advSwiper: [],
      //推荐商家列表：
      recommend: [],
      //正儿八经商家列表:
      BusinessList: [],
      //商家打分数据：1~5
      value: 5,
      TitleObjData: {
        titleContent: "游园服务",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },
  components: {
    Header,
    Scroller,
    PopupRadio,
    PopupPicker,
    Rater,
    Flexbox,
    FlexboxItem,
    Swiper,
    GroupTitle,
    SwiperItem,
    XButton,
    Cell,
    Swiper,
    SwiperItem
  },

  computed: {},

  beforeMount() {},

  mounted() {
    //商家type值
    this.typeNum = this.$route.query.type;
    //获取推荐商家：
    this.$http
      .post(
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.index.scenic_service"
      )
      .then(({ data }) => {
        console.log(data);
        this.recommend = data.data.recommend_business;
        console.log(this.recommend);
      });
  },

  methods: {
    details(id, type) {
      if (type == 1 || type == 2) {
        this.$router.push({
          path: "/eatDrinkDetails",
          query: {
            idNum: id,
            typeNum: type
          }
        });
      } else if (type == 3) {
        this.$router.push({
          path: "/PlayDetails",
          query: {
            idNum: id,
            typeNum: type
          }
        });

        // alert("跳转玩");
      } else if (type == 4) {
        this.$router.push({
          path: "/ResideDetails",
          query: {
            idNum: id,
            typeNum: type
          }
        });
        // alert("跳转住");
      } else if (type == 5) {
        this.$router.push({
          path: "/TourList",
          query: {
            idNum: id,
            typeNum: type
          }
        });

        // alert("跳转游");
      }
    },

    //跳转列表页
    getItem(link) {
      this.$router.push(link);
    },
    // //传递id给详情页
    // details(id) {
    //   this.$router.push({
    //     path: "/ServiceDetails",
    //     query: {
    //       idNum: id
    //     }
    //   });
    // },
    //点击获取不同id切换类别
    change() {
      console.log(this.option2);
      this.$http
        .post(
          "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.index.scenic_service_list&type=" +
            this.option2
        )
        .then(({ data }) => {
          this.BusinessList = data.data.list;
          // console.log(this.BusinessList);
        });
    },
    sort() {
      // console.log(this.option3);
      // console.log(11111111)
      this.$http
        .post(
          "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.index.scenic_service_list&&type=" +
            this.option2 +
            "&" +
            "type_score=" +
            this.option3
        )
        .then(({ data }) => {
          console.log(data);
          this.BusinessList = data.data.list;
          console.log(this.BusinessList);
        });
    }
  },

  watch: {}
};
</script>
<style lang="css" scoped>
img {
  width: 100%;
  height: 100%;
}
.scence-service-wrap {
  /* width: 100%; */
  height: 100%;
  overflow: hidden;
}
.scence-service-content {
  /* width: 375px; */
  height: 94%;
  margin-top: 46px;
  border-top: 1px solid #eeeeee;
  background: #f5f5f5;
  overflow: auto;
}
.scence-service-content .content-one {
  /* width: 375px; */
  height: 210px;
  margin: 0px auto 20px;
}
.scence-service-content .swp-wrap {
  /* width: 375px; */
  width: 92%;
  height: 110px;
  margin: 15px auto 28px;
  border-radius: 8px;
}
.scence-service-content .swp-wrap img {
  width: 100%;
  height: 110px;
  margin: 0 auto;
  /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  border-radius: 8px;
  /* margin-left: 15px; */
}
/* .swiper-slide {
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
} */
.scence-service-content .content-one .Selected-warp {
  /* width: 375px; */
  height: 79px;
  width: 92%;
  margin: 0 auto;
  /* margin-top: 28px; */
}
.scence-service-content .content-one .Selected-warp .Selected-title {
  height: 30px;
  font-size: 18px;
  font-weight: 500;
  text-indent: 16px;
  color: #333333;
  line-height: 50px;
}
.scence-service-content .content-one .Selected-warp .Selected-business-list {
  height: 115px;
  width: 1500px;
  margin-top: 18px;
}
.scence-service-content
  .content-one
  .Selected-warp
  .Selected-business-list
  .business {
  height: 115px;
  width: 135px;
  margin: 2px 5px 0;
  float: left;
  display: inline-block;
}
.Selected-business-list:first-child {
  margin-left: 14px;
}
.scence-service-content
  .content-one
  .Selected-warp
  .Selected-business-list
  .business
  img {
  width: 135px;
  height: 90px;
  border-radius: 8px;
}
.scence-service-content
  .content-one
  .Selected-warp
  .Selected-business-list
  .business
  .price {
  width: 135px;
  height: 18px;
  background: rgba(000, 000, 000, 0.5);
  color: #ffffff;
  text-indent: 11px;
  position: absolute;
  top: 74px;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  font-size: 11px;
}
.scence-service-content
  .content-one
  .Selected-warp
  .Selected-business-list
  .business
  .name {
  width: 66px;
  height: 13px;
  font-size: 14px;
  color: #333333;
  margin-top: 10px;
  line-height: 13px;
}
.scence-service-content .content-two {
  /* width: 375px; */
  height: 84%;
  /* margin-top: 10px; */
  background: #f5f5f5;
}
.nearby {
  width: 92%;
  height: 55px;
  margin: 0 auto 5px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.08);
}
.nearby p {
  display: block;
  color: #222222ff;
  font-size: 16px;
  font-weight: 800;
  float: left;
  line-height: 55px;
  margin-left: 4.35%;
}
.nearby span {
  display: block;
  color: #222222ff;
  font-size: 14px;
  font-weight: 400;
  float: right;
  line-height: 55px;
  margin-right: 4.35%;
}
.recommend {
  width: 100%;
  height: 100px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.08);
  border-radius: 8px;
  margin-bottom: 10px;
  overflow: hidden;
}
.inLeft {
  width: 23.19%;
  height: 50px;
  margin: 22px 3.19% 0 4.35%;
  float: left;
  border-radius: 4px;
  position: relative;
}
.inLeft img {
  width: 100%;
  background: none;
  border-radius: 4px;
}
.inLeft p {
  width: 38px;
  height: 20px;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(51, 51, 51, 1) 100%
  );
  border-radius: 4px 0px 16px 0px;
  color: rgba(255, 255, 255, 1);
  font-size: 12px;
  font-family: PingFangSC-Medium;
  line-height: 20px;
  text-align: center;
  position: absolute;
  top: -7%;
  left: -4%;
}
.inMid {
  width: 41.58%;
  height: 66px;
  float: left;
  margin-top: 14px;
  margin-right: 7.25%;
}
.inMid p {
  font-size: 14px;
  color: #222222ff;
  font-weight: bold;
  font-family: PingFangSC-Heavy;
  /* margin-bottom: 4px; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.inMid i {
  font-style: normal;
  font-size: 12px;
  color: #222222ff;
  font-weight: normal;
  font-family: PingFangSC-Medium;
}
.inMid span {
  width: 100%;
  height: 25px;
  display: block;
  /* width: 140px; */
  /* height: 25px; */
  /* background: rgba(245, 245, 245, 1); */
  font-size: 12px;
  color: #666666ff;
  font-weight: normal;
  font-family: PingFangSC-Medium;
  /* text-align: center; */
  /* line-height: 25px; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* border-radius: 8px; */
}
.inMid span .house {
  width: 13px;
  height: 12px;
  float: left;
}
.inMid span .house img {
  background: none;
  width: 100%;
}
.inMid span .characteristic {
  float: left;
  line-height: 22px;
  text-indent: 4%;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
}
.inRight {
  width: 15.945%;
  height: 22px;
  margin-top: 15px;
  float: left;
  background: #f5f5f5ff;
  border-radius: 4px;
}
.inRight p {
  color: #222222ff;
  font-size: 12px;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-weight: 400;
  line-height: 22px;
}

.scence-service-content .content-two .content-two-head {
  /* width: 375px; */
  height: 45px;
  background: #ffffff;
  border-bottom: 1px solid #e5e5e5;
}
/*选择分类区*/
.head-left {
  height: 45px;
  /* width: 100px; */
  float: left;
}
.vux-cell-placeholder {
  font-size: 30px;
  color: #222222;
}
.head-right {
  height: 45px;
  width: 74px;
  /* margin-right: px; */
  float: right;
}

.head-right .el-dropdown-link {
  color: #666666;
}
/*下拉菜单左边*/
.el-dropdown {
  margin-top: 12px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #222222;
  font-size: 14px;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
.scence-service-content .content-two .store-list-warp {
  /* width: 375px; */
  /* height: 290px; */
  background: #ffffff;
  overflow-y: scroll;
  width: 92%;
  margin: 0 auto;
}
.scence-service-content .content-two .store-list-warp .store {
  width: 120%;
  height: 145px;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
}
.scence-service-content .content-two .store-list-warp .store .store-img-warp {
  width: 105px;
  height: 105px;
  margin: 20px 21px 20px 15px;
  float: left;
}
.scence-service-content .content-two .store-list-warp .store .store-msg-warp {
  width: 234px;
  height: 105px;
  float: left;
  margin-top: 19px;
}
.scence-service-content
  .content-two
  .store-list-warp
  .store
  .store-msg-warp
  .store-title {
  height: 19px;
  margin-bottom: 15px;
  overflow: hidden;
}
.scence-service-content
  .content-two
  .store-list-warp
  .store
  .store-msg-warp
  .store-title
  h3 {
  font-size: 20px;
  font-weight: 600;
  line-height: 19px;
}
.scence-service-content
  .content-two
  .store-list-warp
  .store
  .store-msg-warp
  .star-price-warp {
  height: 14px;
  width: 180px;
  margin-bottom: 6px;
}
.scence-service-content
  .content-two
  .store-list-warp
  .store
  .store-msg-warp
  .star-price-warp
  .star {
  width: 75px;
  float: left;
}
.scence-service-content
  .content-two
  .store-list-warp
  .store
  .store-msg-warp
  .star-price-warp
  .store-price {
  width: 80px;
  float: left;
  margin-left: 8px;
}
.scence-service-content
  .content-two
  .store-list-warp
  .store
  .store-msg-warp
  .star-price-warp
  .store-price
  p {
  font-size: 14px;
  line-height: 16px;
  font-weight: Regular;
}
.scence-service-content
  .content-two
  .store-list-warp
  .store
  .store-msg-warp
  .store-time {
  width: 234px;
  /* height: 28px; */
  border-bottom: 1px dotted #e5e5e5;
  margin-bottom: 6px;
}
.scence-service-content
  .content-two
  .store-list-warp
  .store
  .store-msg-warp
  .store-time
  span {
  font-size: 12px;
  color: #999999;
}
.scence-service-content
  .content-two
  .store-list-warp
  .store
  .store-msg-warp
  .tip
  span {
  font-size: 12px;
  color: #999999;
  line-height: 12px;
}
/* .swiper-slide {
  padding-left: 0px;
  padding-right: 0px;
} */
.swiper-main {
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.1);
}
.swiper-main img {
  width: 100%;
  height: 110px;
  border-radius: 8px;
}
/* .swiper-main /deep/ .vux-slider > .vux-indicator > a > .vux-icon-dot,
.swiper-main /deep/ .vux-slider .vux-indicator-right > a > .vux-icon-dot {
  width: 15px;
  height: 3px;
  background: rgba(34, 34, 34, 1);
  opacity: 0.2;
  border-radius: 3px;
}
.swiper-main /deep/ .vux-slider > .vux-indicator > a > .vux-icon-dot.active,
.swiper-main
  /deep/
  .vux-slider
  .vux-indicator-right
  > a
  > .vux-icon-dot.active {
  opacity: 1;
} */
.swiper-main /deep/ .vux-slider > .vux-indicator,
.swiper-main /deep/ .vux-slider .vux-indicator-right {
  bottom: 5px;
}
</style>
<style lang="less" scoped>
/deep/ .vux-slider > .vux-indicator > a > .vux-icon-dot,
.swiper-main /deep/ .vux-slider .vux-indicator-right > a > .vux-icon-dot {
  width: 15px;
  height: 3px;
  background: rgba(34, 34, 34, 1);
  opacity: 0.2;
  border-radius: 3px;
}
/deep/ .vux-slider > .vux-indicator > a > .vux-icon-dot.active,
.swiper-main
  /deep/
  .vux-slider
  .vux-indicator-right
  > a
  > .vux-icon-dot.active {
  opacity: 1;
}
/deep/ .vux-slider > .vux-indicator > a > .vux-icon-dot,
.vux-slider .vux-indicator-right > a > .vux-icon-dot {
  width: 12px;
  height: 3px;
}
/deep/ .vux-slider {
  border-radius: 8px;
}
/deep/ .vux-slider > .vux-indicator > a > .vux-icon-dot.active,
.vux-slider .vux-indicator-right > a > .vux-icon-dot.active {
  background-color: #fff;
}

.weui-cell {
  .weui-cell__ft {
    color: #666666;
  }
}
.store-list-warp {
  .vux-rater {
    display: block;
    line-height: 1;
  }
}
.flex-demo {
  text-align: center;
  color: #222222;
  background-clip: padding-box;
  width: 51px;
  height: 72px;
  margin: 0 auto;
}
.flex-demo .img-wrap {
  width: 51px;
  height: 51px;
  margin-left: 13px;
  margin-bottom: 9px;
  background: #ffffff;
  border-radius: 16px;
  margin: 0 auto;
}
.flex-demo .img-wrap img {
  background: none;
  width: 31px;
  height: 31px;
  margin: 8px auto 0;
}
.flex-demo p {
  font-family: PingFangSC-Medium;
  font-size: 14px;
  color: #222222ff;
  line-height: 2;
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
/deep/ .custom .vux-indicator {
  right: 50%;
  margin-right: -32px;
  bottom: 0px;
}
/deep/ .vux-swiper {
  border-radius: 8px;
}
</style>
