<template>
  <div class="tickets-discount-wrap" style="overflow: hidden scroll;">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="line-one">
      <img src="./piaobig.png" alt @click="olBuy" class="big-img" />
      <div class="piao-wrap">
        <div class="piao-head">
          <div class="piao-head-left">
            <p>智能验票</p>
          </div>
          <div class="piao-head-right">
            <div style="width:15px;height:15px;float:left;margin-top: 18px;">
              <img src="./wenhaohh.png" alt />
            </div>
            <p>验票说明</p>
          </div>
        </div>
        <div
          class="piao-one"
          v-for="(item,index) in dataList"
          :key="index"
          @click="getItem(item.link)"
        >
          <div class="p-left">
            <img :src="item.imgSrc" alt />
          </div>
          <div class="p-right">
            <div class="txt-one">
              <p>{{item.name}}</p>
            </div>
            <div class="txt-two">
              <p>{{item.text}}</p>
            </div>
          </div>
        </div>
        <divider>认证服务由北京卡戳数字科技有限公司提供技术支持</divider>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import TicketsDiscount from "@/components/layout/TicketsDiscount";
import ScrollContainer from "@/components/common/ScrollContainer";
import { Swiper, SwiperItem, Flexbox, FlexboxItem, Divider } from "vux";
import { getUserInfo } from "@/servers/api.js";

export default {
  name: "",
  props: [""],
  data() {
    return {
      //全局用户信息
      // userInfo: null,
      TitleObjData: {
        titleContent: "门票认证",
        showLeftBack: true,
        showRightMore: false
      },
      dataList: [
        {
          name: "电子票",
          link: "/electronicsTicket",
          imgSrc: require("@/components/pages/kachuoplay/toolslist/piaoone.png"),
          text: "其它平台或渠道购票用户验票入口"
        },
        {
          name: "纸质票",
          link: "/paperTicket",
          imgSrc: require("@/components/pages/kachuoplay/toolslist/piaotwo.png"),
          text: "持有纸质门票用户验票入口"
        },
        {
          name: "免费票",
          link: "/freeTickets",
          imgSrc: require("@/components/pages/kachuoplay/toolslist/piaofour.png"),
          text: "达到国家免票标准的用户游园入口"
        }
      ]
    };
  },
  components: {
    Header,
    TicketsDiscount,
    ScrollContainer,
    Swiper,
    SwiperItem,
    Flexbox,
    FlexboxItem,
    Divider
  },

  computed: {
    contentNoHeaderHeight: function() {
      return { height: document.documentElement.clientHeight - 50 + "px" };
    }
  },

  mounted() {
    //获取全局用户信息
    getUserInfo({}).then(res => {
      this.$store.commit("setUserLoginInfo", res.data);
      this.GLOBAL.setSession("userLoginInfo", res.data);
      console.log(res);
    });
  },

  methods: {
    //跳转各种类型票
    getItem(link) {
      // if (JSON.parse(sessionStorage.getItem("userLoginInfo")).is_face == 0) {
      //   this.$router.push("/facecheck");
      // } else {
        this.$router.push(link);
      // }
    },
    //跳转在线购票
    olBuy() {
      this.$router.push("/onlineTicketing");
    },
  },

};
</script>
<style lang='css' scoped>
.line-one {
  width: 100%;
  height: 145px;
  border-radius: 16px 16px 0 0;
  margin: 61px auto 0;
  box-shadow: 0px -5px 15px 0px rgba(57, 118, 255, 0.32);
  position: relative;
}
.big-img {
  background: none;
}
.piao-wrap {
  width: 100%;
  height: 468px;
  position: absolute;
  top: 120px;
  border-radius: 30px 30px 0 0;
}
.piao-head {
  width: 100%;
  height: 60px;
  background: #ffffff;
  border-radius: 20px 20px 0 0;
  border-bottom: 1px solid #ebf1ff;
  margin-bottom: 21px;
}
.piao-head .piao-head-left {
  float: left;
  height: 100%;
  margin-left: 5%;
}
.piao-head .piao-head-left p {
  line-height: 60px;
  font-size: 18px;
  color: #222222;
  font-weight: 800;
}
.piao-head .piao-head-right {
  float: right;
  height: 100%;
  margin-right: 5%;
  width: 76px;
  display: none;
}
.piao-head-right p {
  color: #999999;
  font-size: 14px;
  float: right;
  line-height: 60px;
}
.piao-one {
  width: 92%;
  height: 90px;
  margin: 0 auto 15px;
  border-radius: 8px;
  background: #ebf1ff;
}
.p-left {
  width: 75px;
  height: 90px;
  float: left;
}
.p-left img {
  width: 100%;
  border-radius: 12px;
}
.p-right {
  width: 70%;
  height: 90px;
  float: right;
}
.txt-one {
  height: 28px;
  margin: 18px 0 5px 0;
}
.txt-one p {
  font-size: 18px;
  color: #222222;
  font-weight: bold;
}
.txt-two {
  height: 20px;
}
.txt-two p {
  font-size: 12px;
  color: #666666;
}
</style>
<style lang="less" scoped>
.vux-divider {
  display: table;
  white-space: nowrap;
  height: auto;
  overflow: hidden;
  line-height: 1;
  text-align: center;
  padding: 10px 0;
  color: #666;
  position: absolute;
  bottom: 0px;
  font-size: 8px;
}
</style>
