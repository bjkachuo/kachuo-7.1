<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="refund" :style="scenceConsumHeight">

    </div>
  </div>

</template>

<script>
  import Header from "@/components/common/Header";
    export default {
        name: "refund",

        data(){
          return{
            TitleObjData: {
              titleContent: "申请退款",
              showLeftBack: true,
              showRightMore: false
            }
          }
        },

        components:{ Header },

        methods:{

        },

      computed: {
        scenceConsumHeight() {
          return { height: document.documentElement.clientHeight - 45 + "px" };
        }
      },
    }
</script>

<style scoped lang="less">
  .wrap{
    background-color: #F5F5F5;
    .refund{

    }
  }

</style>
