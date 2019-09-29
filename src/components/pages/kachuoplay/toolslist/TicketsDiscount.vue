<template>
  <div class="tickets-discount-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="line-one">
      <img src="./piaobig.png" alt />
      <div class="piao-wrap">
        <div class="piao-head">
          <div class="piao-head-left">
            <p>智能验票</p>
          </div>
          <div class="piao-head-right">
            <div style="width:15px;height:15px;float:left;margin-top: 21px;">
              <img src="./wenhaohh.png" alt />
            </div>
            <p>验票说明</p>
          </div>
        </div>
        <div class="piao-one" v-for="(item,index) in dataList" :key="index" @click="getItem(item.link)"> 
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
      </div>
    </div>
    <!-- <div class="tickets-discount-list" :style="contentNoHeaderHeight">
      <div style="width:92%;margin: 10px auto 10px;">
        <swiper auto height="100px" class="custom">
          <swiper-item class="black">
            <img src="./menren.jpeg" alt />
          </swiper-item>
          <swiper-item class="black">
            <img src="./renzhengone.jpg" alt />
          </swiper-item>
          <swiper-item class="black">
            <img src="./renzhengtwo.jpg" alt />
          </swiper-item>
        </swiper>
      </div>
      <div class="ticketType-wrap">
        <flexbox :gutter="0" wrap="wrap">
          <flexbox-item
            :span="1/2"
            v-for="(item,index) in dataList"
            :key="index"
            @click.native="getItem(item.link)"
          >
            <div class="flex-demo">
              <div class="t-left">
                <p>{{item.name}}</p>
              </div>
              <div class="t-right">
                <img :src="item.imgSrc" alt />
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
    </div>-->
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import TicketsDiscount from "@/components/layout/TicketsDiscount";
import ScrollContainer from "@/components/common/ScrollContainer";
import { Swiper, SwiperItem, Flexbox, FlexboxItem } from "vux";

export default {
  name: "",
  props: [""],
  data() {
    return {
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
        // {
        //   name: "现场票",
        //   link: "/onsiteTickets",
        //   imgSrc: require("@/components/pages/kachuoplay/toolslist/piaothree.png")
        // },
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
    FlexboxItem
  },

  computed: {
    contentNoHeaderHeight: function() {
      return { height: document.documentElement.clientHeight - 50 + "px" };
    }
  },

  beforeMount() {},

  mounted() {},

  methods: {
    //跳转各种类型票
    getItem(link) {
      console.log(111111);
      this.$router.push(link);
    }
  },

  watch: {}
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
/* .tickets-discount-wrap {
  width: 100%;
}
.tickets-discount-list {
  width: 100%;
  height: auto;
  overflow-y: scroll;
  box-sizing: border-box;
  margin-top: 50px;
  background: #f9f9f9;
}
.ticketType-wrap {
  width: 92%;
  height: auto;
  margin: 0 auto;
}
.t-left {
  height: 100%;
  width: 42%;
  float: left;
  margin-left: 3%;
}
.t-left p {
  font-size: 18px;
  color: rgba(34, 34, 34, 1);
  font-weight: 800;
  line-height: 79px;
}
.t-right {
  width: 67px;
  height: 54px;
  float: right;
  margin-top: 12px;
  margin-right: 6%;
}
.t-right img {
  width: 100%;
  background: none;
} */
</style>
<style lang="less" scoped>
// /deep/ .vux-swiper {
//   border-radius: 8px;
// }
// .custom {
//   overflow: inherit;
//   /deep/ .vux-indicator {
//     right: 50%;
//     margin-right: -32px;
//     bottom: -27px;
//   }
//   /deep/ .vux-icon-dot {
//     width: 15px !important;
//     height: 3px !important;
//   }
// }
// .flex-demo {
//   text-align: center;
//   width: 97%;
//   height: 79px;
//   background-color: #ffffff;
//   border-radius: 4px;
//   background-clip: padding-box;
//   margin: 5px auto;
// }
// /deep/ .custom .vux-indicator {
//   right: 50%;
//   margin-right: -32px;
//   bottom: 0px;
// }
</style>
