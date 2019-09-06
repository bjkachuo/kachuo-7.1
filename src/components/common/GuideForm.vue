<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
      <div class="form-main">
        <x-input title="姓名：" placeholder=""></x-input>
        <x-input title="联系电话：" placeholder=""></x-input>
        <x-textarea name="description" placeholder="请输入留言..."></x-textarea>
        <cell title="选择人数" :value=numvalue is-link></cell>
        <cell title="选择时长" :value=tvalue is-link></cell>
      </div>
    </div>
    <div class="btm-bar">
      <div class="btm-price">合计: <span class="price">￥<i>200.</i>00</span></div>
      <x-button>立即预约</x-button>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import {Cell,XButton,XInput,XTextarea} from 'vux'
  export default {
    props: [""],
    methods: {
      url(link) {
        this.$router.push(link);
      },
    },
    data() {
      return {
        TitleObjData: {
          titleContent: "预约导游",
          showLeftBack: true,
          showRightMore: false
        },
        numvalue:'',
        tvalue:'',
      };
    },
    components: {
      Header,
      Cell,
      XInput,
      XButton,
      XTextarea
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
    padding: 15px;
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
  }
  .form-main .weui-cell{
    padding: 15px;
    background-color: #FFFFFF;
    box-shadow:0px 10px 20px 0px rgba(0,101,255,0.06);
    border-radius:8px;
    overflow: hidden;
    margin-bottom: 10px;
  }
  .form-main .weui-cell:before{
    display: none;
  }
  .form-main /deep/ .weui-label{
    font-size: 16px;
  }
  .form-main /deep/ .vux-label{
    font-size: 16px;
  }
  .form-main /deep/ .weui-textarea{font-size: 16px;}
  .btm-bar{
    position: fixed;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #FFFFFF;
    height: 55px;
  }
  .btm-bar .weui-btn_default,
  .btm-bar .weui-btn_default:active{
    background-color: #3987FF;
    height: 55px;
    width: 120px;
    color: #FFFFFF;
    border: 0;
    border-radius: 0;
    margin: 0;
  }
  .btm-price{
    padding: 0 15px;
    font-size: 16px;
  }
  .btm-price .price{
    color: #FF3939;
  }
  .btm-price .price i{
    font-style: normal;
    font-size: 20px;
  }
</style>
