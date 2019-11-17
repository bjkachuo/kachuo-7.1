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
            // this.getBannerImgFn("2");
            // this.getLocation(); // 调用获取地理位置
        },

        methods: {

        },

        watch: {}
    };
</script>
<style lang='css' scoped>
  .tab-item-paly-wrap {
    background: #f5f5f5;
  }
</style>
