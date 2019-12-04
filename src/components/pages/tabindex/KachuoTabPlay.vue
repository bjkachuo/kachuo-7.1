<template>
  <div>
    <FaceToast></FaceToast>
    <div class="tab-item-paly-wrap">
<!--      <TabItemPlayHeader v-if="!$store.state.isApp"></TabItemPlayHeader>-->
      <TabItemPlayContent></TabItemPlayContent>
    </div>
  </div>
</template>

<script>
    import TabItemPlayHeader from "@/components/layout/TabItemPlayHeader";
    import TabItemPlayContent from "@/components/layout/TabItemPlayContent/TabItemPlayContent";
    import FaceToast from "@/components/layout/FaceToast";
    import {location} from "@/servers/LocationUtil";
    import {isNull} from "util";

    export default {
        name: "",
        props: [""],
        data() {
            return {};
        },
        components: {
            TabItemPlayHeader,
            TabItemPlayContent,
            FaceToast
        },

        mounted() {
            //安卓ios跳转选择景区
            dsBridge.register("userlocation", r => {
                this.$router.push("/userlocation");
                // alert("xuanze");
            });

            //安卓访问时不显示头部

        },

    };</script>
<style lang='css' scoped>
  .tab-item-paly-wrap {
    background: #f5f5f5;
  }
</style>
