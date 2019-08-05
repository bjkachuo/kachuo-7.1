<template>
  <div class="photo-album-wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="photo-album-content" :style="conHei">
      <div class="card">
        <div class="form">
          <!--            <group title style="margin-top:10px">-->

          <!--            </group>-->
          <x-button :gradients="['#21AEFF', '#217AFF']">提交</x-button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import { XInput, Group, XButton, Cell ,XTextarea} from "vux";
  export default {
    name: "culturalCreativity",

    data(){
      return{
        TitleObjData: {
          titleContent: "艺术创作",
          showLeftBack: true,
          showRightMore: false
        },
        labelStyle:''
      }
    },

    components:{Header,XInput, Group, XButton, Cell, XTextarea},

    computed: {
      conHei() {
        return { height: document.documentElement.clientHeight - 45 + "px" };
      }
    },

    methods:{

    },

    mounted() {
      setTimeout(()=>{
        document.getElementsByClassName('weui-label')[3].style.width = '5em'
      },500)
    }
  }
</script>

<style scoped lang='less'>
  .photo-album-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .photo-album-content {
    width: 100%;
    background: rgb(238,238,238);
    margin-top: 45px;
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
  }
  .card{
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow:0px 10px 20px 0px rgba(0, 0, 0, 0.04);
    width: 92%;
    margin: 4% auto 0;
    height: 93%;
    .form{
      width: 86%;
      margin: 0 auto;
      padding-top: 5.36%;
      .weui-cell{
        border: 1px solid rgb(229,229,229);
        border-radius: 8px;
        margin-bottom: 11px;
      }
      .weui-btn{
        border-radius: 22px;
        margin-top: 29px;
        box-shadow:0px 5px 10px 0px rgba(33,122,255,0.5);
      }
    }
  }
</style>
