<template>
  <div class="scence-release-wrap">
    <div>
      <Header
        :titleContent="TitleObjData.titleContent"
        :showLeftBack="TitleObjData.showLeftBack"
        :showRightMore="TitleObjData.showRightMore"
      ></Header>


      <div style="position:absolute;right:45px;top:7px;z-index:999;" @click="search">
        <x-icon type="ios-search-strong" size="32"></x-icon>
      </div>
      <div class="help-wrap" style="position:absolute;right:15px;top:10px;z-index: 999;">
        <customerService></customerService>
      </div>
    </div>

    <div class="position-box" :style="contentNoHeaderHeight">

      <div style="width:92%;margin: 15px auto 10px; position: relative;">
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

      <div
        class="video-list-for"
        v-for="(item,index) in items"
        :key="index"
        @click="getDetailFn(item.id)"
      >
        <img v-lazy="item.show_img" :alt="item.title" srcset />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/ReleaseHeader";
import { VideoListIndex,AdvertiseLoop } from "@/servers/api";
import customerService from "@/components/common/customerService/customerService";
import "swiper/dist/css/swiper.css";
import { Swiper, SwiperItem, } from "vux";

export default {
  name: "",

  data() {
    return {
      TitleObjData: {
        titleContent: "品类视频",
        showLeftBack: true,
        showRightMore: false
      },
      items: []
    };
  },

  components: {
    Header,
    customerService,
    Swiper,
    SwiperItem
  },

  computed: {
    contentNoHeaderHeight: function() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  beforeMount() {},

  mounted() {
    this.getData();
  },

  methods: {
    search() {
      this.$router.push("/usersearch");
    },

    // 获取详情
    getDetailFn(id) {
      this.$router.push("/goodsVideoclassifydetails?id=" + id + "&type=1");
    },
    // 数据请求
    getData() {
      VideoListIndex({})
        .then(res => {
          if (res.result === 1) {
            this.items = res.data;
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
.scence-release-wrap {
  width: 100%;
  height: 100%;
  background: #fff;
}
.position-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  background: #f5f5f5;
  margin-top: 45px;
  padding: 0 15px;
  box-sizing: border-box;
}
.video-list-for {
  width: 100%;
  height: 120px;
  object-fit: contain;
  margin-top: 10px;
  background: #fff;
  border-radius: 5px;
  overflow: hidden;
}
</style>
