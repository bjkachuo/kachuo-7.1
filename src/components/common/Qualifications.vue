<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
      <div class="qual-panel">
        <div class="qual-header">商家从业资质</div>
        <div class="qual-body">
           <div class="qual-photo">
             <img src="../../assets/images/zizhi.jpg" alt="">
           </div>
           <div class="qual-photo">
             <img src="../../assets/images/zizhi.jpg" alt="">
           </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import {Cell} from 'vux'
  export default {
    props: [""],
    methods: {
    },
    data() {
      return {
        TitleObjData: {
          titleContent: "营业资质",
          showLeftBack: true,
          showRightMore: false
        },
        data1:"4",
        toggle:false,
      };
    },
    components: {
      Header,
      Cell,
    },
    computed: {
      conHei() {
        return {
          height: document.documentElement.clientHeight - 45 + "px"
        };
      }
    },
  };
</script>
<style lang='css' scoped>
  .normal-content {
    width: 100%;
    background: #F5F5F5;
    margin-top: 45px;
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
    padding: 15px;
  }
  .qual-panel{
    background:rgba(255,255,255,1);
    box-shadow:0px 10px 20px 0px rgba(0,101,255,0.08);
    border-radius:8px;
    overflow: hidden;
    padding: 15px;
  }
  .qual-header{
    font-size: 16px;
    margin-bottom: 15px;
  }
  .qual-photo{
    margin-bottom: 15px;
  }
  .qual-photo img{
    border-radius: 4px;
    box-shadow: 0 0 1px 1px #d2cdcd;
  }
  .qual-photo:last-child{
    margin-bottom: 0;
  }
</style>
