<template>
  <div class="tab-item-paly-content">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.2/css/swiper.css"
    />
    <div class="line-one">
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="1/3">
          <div class="flex-demo flex-one" @click="Ticket">门票认证</div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo flex-two" @click="Navigation">智慧导航</div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo flex-three" @click="service">游园服务</div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo flex-four" @click="Remember">记住的</div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo flex-five" @click="Understand">了解的</div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo flex-six" @click="TakeAway">带走的</div>
        </flexbox-item>
      </flexbox>

      <!-- <div class="line-one-a">
        <div class="navs">门票认证</div>
        <div class="navs">智慧导航</div>
        <div class="navs">游园服务</div>
      </div>-->
      <!-- <div class="line-one-content"></div> -->
      <!-- <flexbox>
        <flexbox-item v-for="(item,index) in dataList" :key="index">
          <div class="flex-demo" @click="getItem(item.link)">
            <div class="img-wrap">
              <img :src="item.imgSrc" alt />
            </div>
            <p>{{item.name}}</p>
          </div>
        </flexbox-item>
      </flexbox>-->
      <!-- <div class="line-one-box">
      </div>-->
    </div>
    <!-- <div class="line-two"> -->
    <!-- <flexbox :gutter="15">
        <flexbox-item v-for="(item,index) in dataListTwo" :key="index">
          <div class="flex-demo-two" @click="getItem(item.link)">
            <div class="flex-demo-two-content-wrap">
              <div class="flex-demo-two-content-left">
                <p>{{item.name}}</p>
                <span>{{item.text}}</span>
              </div>
              <div class="flex-demo-two-content-right">
                <img :src="item.imgSrc" alt />
              </div>
            </div>
    </div>-->
    <!-- </flexbox-item> -->
    <!-- <flexbox-item>
          <div class="flex-demo-two">2</div>
    </flexbox-item>-->
    <!-- </flexbox> -->
    <!-- </div> -->
    <div class="Selected">
      <p>精选推荐</p>
    </div>
    <div class="line-three">
      <div class="recommend" v-for="(item,index) in recommend" :key="index">
        <div class="inLeft">
          <img :src="item.video_image" alt />
          <p>{{item.typename}}</p>
        </div>
        <div class="inMid">
          <p>{{item.name}}</p>
          <i>人均18元</i>
          <span>
            <div class="house">
              <img src="../../assets/images/fangzi.png" alt />
            </div>
            <div class="characteristic">特色：地方菜、面馆</div>
          </span>
        </div>
        <div class="inRight" @click="details(item.id,item.type)">
          <p>进店</p>
        </div>
      </div>

      <!-- <div class="tab-wrap">
        <tab>
          <tab-item
            v-for="(item,index) in tiltleList"
            :key="index"
            :selected="index===0"
            @on-item-click="onItemClick(index)"
            line-width="4"
          >{{item}}</tab-item>
        </tab>
      </div>-->
      <!-- <div class="store-wrap"></div> -->
    </div>
    <!-- <FunctionAreas class="tab-item-play-content-tools-wrap"></FunctionAreas> -->
    <!-- <div class="tab-item-play-content-tip-wrap">
      <AdvertiseSwiper style="padding-left:15px"></AdvertiseSwiper>
    </div>-->
    <!-- <div class="tab-item-play-content-scence">
      <div class="tab-item-play-content-tools">
        <span class="tab-item-play-content-tools-line"></span>
        <span class="tab-item-play-content-title">景区服务</span>
      </div>

      <Cell class="tab-item-play-content-cell" :cellList="cellListScence"></Cell>
    </div>-->
    <!-- <div class="tab-item-play-content-scence tab-item-play-content-scence-wrap">
      <div class="tab-item-play-content-tools">
        <span class="tab-item-play-content-tools-line"></span>
        <span class="tab-item-play-content-title">周边服务</span>
      </div>
    <div>
      <Cell
        class="tab-item-play-content-cell tab-item-play-content-cell-spec"
        :cellList="cellListAround">
      </Cell>
    </div>
    </div>-->
  </div>
</template>

<script>
import FunctionAreas from "@/components/layout/FunctionAreas";
import AdvertiseSwiper from "@/components/layout/AdvertiseSwiper";
import Cell from "@/components/common/CellNoBorder";
import SwiperAdvEat from "@/components/common/SwiperAdvEat";
import { Flexbox, FlexboxItem, Tab, TabItem, Scroller } from "vux";

export default {
  name: "",
  props: [""],
  data() {
    return {
      //推荐商家列表：
      recommend: [],

      // cellListScence: [
      //   {
      //     title: "吃吧",
      //     icon: "iconfont iconchiba",
      //     link: "/scenicService?type=1"
      //   },
      //   {
      //     title: "喝吧",
      //     icon: "iconfont iconheba",
      //     link: "/scenicService?type=2"
      //   },
      //   {
      //     title: "玩吧",
      //     icon: "iconfont iconwanba",
      //     link: "/scenicService?type=3"
      //   }
      // ],
      // cellListAround: [
      //   {
      //     title: "美食",
      //     icon: "iconfont iconmeishi",
      //     link: "/suerroundBusiness?type=4"
      //   },
      //   {
      //     title: "休闲",
      //     icon: "iconfont iconxiuxian",
      //     link: "/suerroundBusiness?type=5"
      //   },
      //   {
      //     title: "酒店",
      //     icon: "iconfont iconjiudian",
      //     link: "/suerroundBusiness?type=6"
      //   },
      //   {
      //     title: "娱乐",
      //     icon: "iconfont iconyule",
      //     link: "/suerroundBusiness?type=7"
      //   }
      // ],
      dataList: [
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "门票认证",
          link: "/ticketsdiscount",
          // class: "iconfont iconmenpiao btn1",
          imgSrc: require("@/assets/images/券@2x.png")
        },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "智慧导航",
          link: "/intelligentnavigation",
          // class: "iconfont iconzhihuidaohang btn2",
          imgSrc: require("@/assets/images/坐标@2x.png")
        },
        // {
        //   imgUrl:
        //     "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
        //   name: "景区发布",
        //   link: "/scencerelease",
        //   // class: "iconfont iconjingqufabu"
        //   imgSrc: require("@/assets/images/景区发布-圆角1.png")
        // },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "游园服务",
          // link: "/scenceservice?type=1",
          link: "/scenicService",
          // class: "iconfont iconjingqufuwu"
          imgSrc: require("@/assets/images/吃喝玩乐@2x.png")
        },
        // {
        //   imgUrl:
        //     "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
        //   name: "记住的",
        //   link: "/remember?type=5&branch=1",
        //   // class: "iconfont iconjizhude"
        //   imgSrc: require("@/assets/images/记住的-圆角1.png")
        // },
        // {
        //   imgUrl:
        //     "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
        //   name: "了解的",
        //   link: "/understand?type=7&branch=2",
        //   imgSrc: require("@/assets/images/了解的-圆角1.png")
        //   // class: "iconfont iconliaojiede"
        // },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "带走的",
          link: "/takeaway?carousel=2",
          // class: "iconfont icondaizoude"
          imgSrc: require("@/assets/images/带走的@2x.png")
        }
        // {
        //   imgUrl:
        //     "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
        //   name: "周边服务",
        //   link: "/servicesurround?type=4",
        //   // class: "iconfont iconzhoubianfuwu"
        //   imgSrc: require("@/assets/images/周边服务--圆角1.png")
        // }
      ],
      dataListTwo: [
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "记住的",
          link: "/remember?type=5&branch=1",
          // class: "iconfont iconjizhude"
          imgSrc: require("@/assets/images/知识1@2x.png"),
          text: "景区一字文化"
        },
        {
          imgUrl:
            "http://f.hiphotos.baidu.com/image/pic/item/359b033b5bb5c9eab0b192c9db39b6003af3b35e.jpg",
          name: "了解的",
          link: "/understand?type=7&branch=2",
          imgSrc: require("@/assets/images/攻略@2x.png"),
          text: "景区符号文化"
          // class: "iconfont iconliaojiede"
        }
      ]
      // tiltleList: ["吃吧", "喝吧", "玩吧", "住吧", "游吧"]
    };
  },

  components: {
    FunctionAreas,
    AdvertiseSwiper,
    Cell,
    SwiperAdvEat,
    Flexbox,
    FlexboxItem,
    Tab,
    TabItem,
    Scroller
  },

  computed: {},

  beforeMount() {},

  mounted() {
    //获取推荐商家：
    this.$http
      .post(
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.index.scenic_service"
        // "http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.index.scenic_service_list&"
      )
      .then(({ data }) => {
        this.recommend = data.data.recommend_business;
        console.log(this.recommend);
        console.log(data);
      });
  },
  methods: {
    //跳转门票认证
    Ticket() {
      this.$router.push("/ticketsdiscount");
    },
    //跳转智慧导航
    Navigation() {
      this.$router.push("/intelligentnavigation");
    },
    //跳转游园服务
    service() {
      this.$router.push("/scenicService");
    },
    //跳转记住的

    Remember() {
      this.$router.push("/remember?type=5&branch=1");
    },
    //跳转了解的
    Understand() {
      this.$router.push("/understand?type=7&branch=2");
    },
    //跳转带走的
    TakeAway() {
      this.$router.push("/takeaway?carousel=2");
    },

    //跳转详情页
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
        alert("跳转玩");
      } else if (type == 4) {
        this.$router.push({
          path: "/hotelDetails",
          query: {
            idNum: id,
            typeNum: type
          }
        });
        // alert("跳转住");
      } else if (type == 5) {
        alert("跳转游");
      }
    },
    getItem(link) {
      this.$router.push(link);
    },
    onItemClick(index) {
      console.log(index);
    }
  },

  watch: {}
};
</script>
<style lang="css" scoped>
.tab-item-paly-content {
  margin-top: 5px;
}
.line-one {
  width: 92%;
  height: 142px;
  background: #ffffff;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 20px;
}
.line-one-a {
  width: 100%;
  height: 70px;
  margin-bottom: 1px;
  background: red;
}
.navs {
}
.line-two {
  width: 92%;
  height: 69px;
  /* background: gold; */
  margin: 0 auto;
  border-radius: 8px;
}
.Selected {
  width: 100%;
}
.Selected p {
  text-align: center;
  color: #222222ff;
  font-size: 14px;
  font-weight: 800;
}
.line-three {
  width: 99%;
  /* height: 208px; */
  margin: 0 auto;
  border-radius: 5px;
  /* background: darkgreen; */
  overflow: hidden;
  margin-left: 4px;
  margin-top: 11px;
  /* margin-bottom: 35px; */
}
.recommend {
  width: 92%;
  height: 100px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.08);
  border-radius: 8px;
  /* margin-bottom: 10px; */
  overflow: hidden;
  margin: 0 auto 10px;
}
.inLeft {
  width: 23.19%;
  height: 50px;
  margin: 15px 3.19% 0 4.35%;
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
  text-align: center;
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
}
.inRight {
  width: 18%;
  height: 30;
  margin-top: 35px;
  height: 30px;
  float: left;
  background: #6396ffff;
  border-radius: 4px;
}
.inRight p {
  color: #ffffffff;
  font-size: 12px;
  text-align: center;
  font-family: PingFangSC-Medium;
  font-weight: 400;
  line-height: 30px;
}
</style>

<style lang='less' scoped>
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/center.less";
.flex-demo {
  // text-align: center;
  color: rgba(255, 255, 255, 1);
  text-shadow: 0px 8px 8px rgba(0, 0, 0, 0.24); // background-color: #20b907;
  background-clip: padding-box;
  width: 98%;
  height: 70px;
  margin: 1px;
  // margin-top: 23%;
  background: cadetblue;
  font-size: 16px;
  line-height: 2;
  text-indent: 8px;
}
.flex-one {
  background: linear-gradient(
    90deg,
    rgba(255, 82, 101, 1) 0%,
    rgba(255, 113, 99, 1) 100%
  );
}
.flex-two {
  background: linear-gradient(
    90deg,
    rgba(253, 111, 99, 1) 0%,
    rgba(255, 113, 99, 1) 100%
  );
}
.flex-three {
  background: linear-gradient(
    90deg,
    rgba(252, 128, 99, 1) 100%,
    rgba(252, 112, 99, 1) 0%
  );
}
.flex-four {
  background: linear-gradient(
    90deg,
    rgba(98, 144, 255, 1) 0%,
    rgba(48, 168, 255, 1) 100%
  );
}
.flex-five {
  background: linear-gradient(
    90deg,
    rgba(48, 168, 255, 1) 0%,
    rgba(48, 168, 255, 1) 100%
  );
}
.flex-six {
  background: linear-gradient(
    90deg,
    rgba(48, 194, 255, 1) 100%,
    rgba(48, 168, 255, 1) 0%
  );
}
.flex-demo .img-wrap {
  width: 28px;
  height: 28px;
  margin-left: 13px;
  margin-bottom: 9px;
}
.flex-demo .img-wrap img {
  background: none;
  width: 100%;
}
.flex-demo p {
  font-size: 12px;
}
.flex-demo-two {
  background-color: #ffffff;
  border-radius: 8px;
  background-clip: padding-box;
  height: 69px;
  overflow: hidden;
}
.flex-demo-two-content-wrap {
  width: 134px;
  height: 40px;
  // background: darkcyan;
  margin: 0 auto;
  margin-top: 14px;
}
.flex-demo-two-content-left {
  width: 80px;
  height: 39px;
  // background: violet;
  float: left;
}
.flex-demo-two-content-left p {
  font-size: 16px;
  color: #222222;
  line-height: 20px;
}
.flex-demo-two-content-left span {
  font-size: 12px;
  color: #999999;
  line-height: 3px;
}
.flex-demo-two-content-right {
  width: 44px;
  height: 39px;
  // background: chartreuse;
  float: right;
}
.flex-demo-two-content-right img {
  width: 100%;
  background: none;
}
.tab-wrap {
  height: 30px;
}
/deep/ .vux-tab-wrap {
  margin-top: 20px;
}
/deep/ .vux-tab-container {
  height: 30px;
}
/deep/ .scrollable {
  height: 30px;
}
/deep/ .vux-tab .vux-tab-item.vux-tab-selected {
  height: 30px;
  line-height: 30px;
}
/deep/ .scrollable .vux-tab-item {
  height: 30px;
  line-height: 30px;
}
.store-wrap {
  height: 122px;
  background: darkcyan;
  margin-top: 15px;
}
.tab-item-play-content-tools {
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0 12px;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 1px solid #f5f5f5;
}
.tab-item-play-content-tools-line {
  width: 2px;
  height: 16px;
  /* background: #000; */
  display: inline-block;
  /* margin-right: 10px; */
}
.tab-item-play-content-title {
  font-weight: bold;
}
.tab-item-paly-content /deep/ .weui-cells {
  margin-top: 0;
}
.tab-item-play-content-tip-wrap {
  width: 100%;
  height: 50px;
  background: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: -10px;
}
.tab-item-play-content-tools-wrap {
  width: 100%;
  height: 180px;
  background: #fff;
  position: relative;
  top: -10px;
  border-radius: 10px 10px 0 0;
}
.tab-item-play-content-scence {
  width: 100%;
  height: 200px;
}
.tab-item-play-content-scence-wrap {
  width: 100%;
  min-height: 210px;
  height: auto;
  padding: 0 0 20px 0;
  box-sizing: border-box;
}
.tab-item-play-content-cell-spec span {
  width: 24px;
  height: 24px;
  display: inline-block;
  font-size: 20px;
}
.tab-item-play-content-scence-line {
  width: 100%;
  height: 10px;
  background: #f5f5f5;
  margin-top: -10px;
}
.swiperadv {
  width: 100%;
  height: 40px;
  background: darkgreen;
  overflow: hidden;
  line-height: 40px;
}
</style>
