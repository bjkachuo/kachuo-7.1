<template>
  <div class="ol-wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore" style="top:-43px"></Header>
    <div class="card1"></div>
  </div>

</template>

<script>
  import Header from "@/components/common/Header";
    export default {
        name: "orderCompletion",

        components:{ Header },

        data(){
          return{
            TitleObjData: {
              titleContent: "订单填写",
              showLeftBack: true,
              showRightMore: false
            },
          }
        }
    }
</script>

<style scoped lang="less">
  .ol-wrap {
    background: rgba(229,229,229,1);
  }
  .card1{
    margin: 56px 15px 0;
    padding: 16px;
    background-color: #fff;
  }
</style>
