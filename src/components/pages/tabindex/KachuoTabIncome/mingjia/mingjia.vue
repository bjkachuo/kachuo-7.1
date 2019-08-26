<template>
  <Header style="margin-bottom: 46px" :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>

</template>

<script>
  import Header from "@/components/common/Header";
    export default {
        name: "mingjia",

        components:{ Header },

        data(){
          return{
            TitleObjData: {
              titleContent: "名家入驻",
              showLeftBack: true,
              showRightMore: false
            },
          }
        }
    }
</script>

<style scoped>

</style>
