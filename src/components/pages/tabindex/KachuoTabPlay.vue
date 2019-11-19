<template>
  <div>
    <FaceToast></FaceToast>
    <div class="tab-item-paly-wrap">
      <TabItemPlayHeader v-if="!$store.state.isApp"></TabItemPlayHeader>
      <TabItemPlayContent></TabItemPlayContent>
    </div>
  </div>
</template>

<script>
import TabItemPlayHeader from "@/components/layout/TabItemPlayHeader";
import TabItemPlayContent from "@/components/layout/TabItemPlayContent/TabItemPlayContent";
import FaceToast from "@/components/layout/FaceToast";
import { location } from "@/servers/LocationUtil";
import { isNull } from "util";
export default {
  name: "",
  props: [""],
  data() {
    return {
    };
  },
  components: {
    TabItemPlayHeader,
    TabItemPlayContent,
    FaceToast
  },
  computed: {},
  beforeMount() {},
  created() {
    // var str = dsBridge.call("testSyn", "testSyn");
    // function callSyn() {
    //   alert(dsBridge.call("testSyn", "testSyn"));
    // }
    // function callAsyn() {
    //   dsBridge.call("testAsyn", "testAsyn", function(v) {
    //     alert(v);
    //   });
    // }
  },
  mounted() {
    // var dsBridge=require("dsbridge");
    // var str = dsBridge.call("testSyn", "testSyn");
    // alert(dsBridge.call("getUserInfo","我要用户数据"));
    dsBridge.call("getUserInfo", "web");
    // dsBridge.register("addValue", function(r) {
    //   console.log("安卓传来的r", r);
    // });
    dsBridge.registerAsyn("loginInfo", function(arg1, responseCallback) {
      localStorage.setItem("token", JSON.parse(arg1).accessToken);
      responseCallback("登录信息成功");
    });
    //安卓访问时不显示头部
    bridge.register("yyTab", r => {
      this.$store.state.isApp = true;
    });
    bridge.register("getUserInfo", r => {
      alert(r);
      localStorage.setItem("token", r);
    });
    // this.getBannerImgFn("2");
    // this.getLocation(); // 调用获取地理位置
  },
  methods: {
    /**获取地图定位*/
    // getLocation() {
    //   let _that = this;
    //   let geolocation = location.initMap("map-container"); //定位
    //   AMap.event.addListener(geolocation, "complete", result => {
    //     _that.lat = result.position.lat;
    //     _that.lng = result.position.lng;
    //     _that.province = result.addressComponent.province;
    //     _that.city = result.addressComponent.city;
    //     _that.district = result.addressComponent.district;
    //   });
    //   console.log(geolocation,_that)
    // }
  },
  watch: {}
};</script>
<style lang='css' scoped>
  .tab-item-paly-wrap {
    background: #f5f5f5;
  }
</style>
