<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <p class="content" :style="scenceConsumHeight" v-html="content">

    </p>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
    export default {
        name: "OrdersSubstance",

        components:{ Header },

        data(){
          return{
            TitleObjData: {
              titleContent: "购票须知",
              showLeftBack: true,
              showRightMore: false
            },
            content:sessionStorage.OrdersSubstance,
          }
        },

      computed: {
        scenceConsumHeight() {
          return { height: document.documentElement.clientHeight - 45 + "px" };
        }
      },
    }
</script>

<style scoped lang="less">
.content{
  margin: 46px 15px 0;
  text-indent: 2em;
}
</style>
