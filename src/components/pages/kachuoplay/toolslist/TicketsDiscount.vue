<template>
  <div class="tickets-discount-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="tickets-discount-list" :style="contentNoHeaderHeight">
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

      <!-- <TicketsDiscount></TicketsDiscount> -->
    </div>
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
          imgSrc: require("@/components/pages/kachuoplay/toolslist/piaoone.png")
        },
        {
          name: "纸质票",
          link: "/paperTicket",
          imgSrc: require("@/components/pages/kachuoplay/toolslist/piaotwo.png")
        },
        {
          name: "现场票",
          link: "/onsiteTickets",
          imgSrc: require("@/components/pages/kachuoplay/toolslist/piaothree.png")
        },
        {
          name: "免费票",
          link: "/freeTickets",
          imgSrc: require("@/components/pages/kachuoplay/toolslist/piaofour.png")
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
.tickets-discount-wrap {
  width: 100%;
}
.tickets-discount-list {
  width: 100%;
  height: auto;
  overflow-y: scroll;
  /* padding: 15px; */
  box-sizing: border-box;
  margin-top: 50px;
  background: #f9f9f9;
}
.ticketType-wrap {
  width: 92%;
  height: auto;
  margin: 0 auto;
  /* background: darkblue; */
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
}
</style>
<style lang="less" scoped>
/deep/ .vux-swiper {
  border-radius: 8px;
}
.custom {
  overflow: inherit;
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
.flex-demo {
  text-align: center;
  width: 97%;
  height: 79px;
  background-color: #ffffff;
  border-radius: 4px;
  background-clip: padding-box;
  margin: 5px auto;
}
/deep/ .custom .vux-indicator {
  right: 50%;
  margin-right: -32px;
  bottom: 0px;
}
</style>
