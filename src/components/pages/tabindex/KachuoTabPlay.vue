<template>
  <div>
    <FaceToast></FaceToast>
    <div class="tab-item-paly-wrap">
      <TabItemPlayHeader v-if="!isApp"></TabItemPlayHeader>
      <TabItemPlayContent></TabItemPlayContent>
    </div>
  </div>
</template>

<script>
    import TabItemPlayHeader from "@/components/layout/TabItemPlayHeader";
    import TabItemPlayContent from "@/components/layout/TabItemPlayContent/TabItemPlayContent";
    import FaceToast from "@/components/layout/FaceToast";
    import {location} from "@/servers/LocationUtil";

    export default {
        name: "",
        props: [""],
        data() {
            return {
                //安卓判断是否显示头部
                isApp: false
            };
        },

        components: {
            TabItemPlayHeader,
            TabItemPlayContent,
            FaceToast
        },

        computed: {},

        beforeMount() {
        },

        mounted() {
            //安卓访问时不显示头部
            bridge.register("yyTab", r => {
                this.isApp = true;
            });

          bridge.register("getUserInfo", r => {
            alert(r)
            localStorage.setItem("token",r)
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
    };
</script>
<style lang='css' scoped>
  .tab-item-paly-wrap {
    background: #f5f5f5;
  }
</style>
