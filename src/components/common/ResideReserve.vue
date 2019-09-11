<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
      <div class="form-panel">
        <div class="form-body">
          <div class="grid-header">
            <div class="grid-title">自主大床房</div>
            <div class="grid-more">房型详情</div>
          </div>
          <div class="grid-days">入住(8月20日)/离店(8月20日) 共1晚</div>
          <div class="grid-attr">不含早  大床  有窗</div>
          <div class="grid-footer">该订单支付成功后不可取消或者变更</div>
        </div>
      </div>
      <div class="form-panel">
        <div class="form-cells">
          <div class="form-header">入住信息</div>
          <x-input title="房间数" readonly v-model="roomValue" placeholder="">
            <template slot="right">
              <div class="less-more">仅剩3间了</div>
            </template>
          </x-input>
          <x-input title="入住人" placeholder="填写真实入住人姓名"></x-input>
          <x-input title="手机号" placeholder="用于接收预订信息"></x-input>
        </div>
      </div>
      <div class="form-panel">
        <checklist label-position="left" :options="checklist" ></checklist>
      </div>
      <div class="form-panel">
        <cell is-link title="发票信息" :value=fapvalue @click="onClick"></cell>
      </div>
    </div>
    <div class="btm-bar">
      <div class="btm-price">实付<span class="price">￥<i>112.5</i></span></div>
      <x-button link="/ReserveResult">立即支付</x-button>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import {Cell,XButton,XInput,XTextarea,Checklist} from 'vux'
  export default {
    props: [""],
    methods: {
      url(link) {
        this.$router.push(link);
      },
      onClick(){
        console.log()
      }
    },
    mounted(){
      console.log(this.$route)
    },
    data() {
      return {
        roomValue:"1间房",
        fapvalue:'不需要发票',
        checklist: [ '可用100积分抵用100元'],
        TitleObjData: {
          titleContent: "7天连锁酒店(滨海路店)",
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
      XTextarea,Checklist
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
  .form-panel{
    background:rgba(255,255,255,1);
    box-shadow:0px 5px 10px 0px rgba(0,101,255,0.06);
    border-radius:8px;
    margin-bottom: 15px;
    overflow: hidden;
  }
  .form-body{
    padding: 15px;
  }
  .form-header{
    padding:15px;
    font-weight: bold;
    line-height: 1;
    font-size: 16px;
  }
  .grid-footer{
    font-size: 12px;
    color: #999;
  }
  .grid-days{
    margin-bottom: 5px;
  }
  .weui-cell:before{
    right: 15px;
  }
  .form-panel /deep/ .weui-cell{
    padding: 15px;
    font-size: 16px;
  }
  .form-panel /deep/ .weui-cells_checkbox:before{
    display: none;
  }
  .form-panel /deep/ .weui-cells_checkbox:after{
    display: none;
  }
  .grid-header{
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
    margin-bottom: 5px;
  }
  .grid-title{
    font-size: 18px;
    font-weight: bold;
  }
  .grid-more{
    position: relative;
    padding-right: 10px;
    font-size: 16px;
    line-height: 1;
  }
  .grid-more:after{
    content: " ";
    display: inline-block;
    height: 8px;
    width: 8px;
    border-width: 1px 1px 0 0;
    border-color: #222;
    border-style: solid;
    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -4px;
  }
  .less-more{
    position: relative;
    padding-right: 20px;
    font-size: 14px;
    line-height: 1;
    color: #3976FF;
  }
  .less-more:after{
    content: " ";
    display: inline-block;
    height: 8px;
    width: 8px;
    border-width: 1px 1px 0 0;
    border-color: #222;
    border-style: solid;
    -webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
    position: relative;
    top: -2px;
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -4px;
  }
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
    font-weight: bold;
  }
  .btm-price .price i{
    font-style: normal;
    font-size: 20px;
  }
  .form-panel /deep/ .weui-cells_checkbox .weui-check:checked + .vux-checklist-icon-checked:before{
    color: #3987FF;
  }
</style>
