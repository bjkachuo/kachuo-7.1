<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
      <div class="form-panel">
        <div class="form-cells">
          <div class="form-header">蓬莱欧乐堡梦幻世界白天票</div>
          <div class="select-body">
            <div class="select-txt">使用日期</div>
            <div class="select-cell">
              <ul class="select-days">
                <li v-for="(item, index) in items" :key="index" :class="{active:current==index}">
                  <div class="day-item" @click="addClass(index)">
                    <div class="day">{{ item.day }}</div>
                    <div class="price">￥{{ item.price }}</div>
                  </div>
                </li>
                <li>
                  <div class="day-item">
                    <div class="item-more">更多日期</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="form-panel">
        <div class="form-cells">
          <div class="form-header">基本信息</div>
          <x-input title="门票数" readonly v-model="roomValue" placeholder="">
            <template slot="right">
              <div class="less-more"></div>
            </template>
          </x-input>
          <x-input title="联系人" placeholder="请输入证件上的姓名"></x-input>
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
      <div class="btm-price">实付<span class="price">￥<i>112</i></span></div>
      <x-button link="/ReserveResult">提交订单</x-button>
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
      },
      addClass (index) {
        this.current = index
      }
    },
    data() {
      return {
        current: 0,
        items: [
          { price: '88', day: '今天08-11' },
          { price: '89', day: '明天08-12' },
          { price: '90', day: '周六08-13' }
        ],
        roomValue:"1张",
        fapvalue:'不需要发票',
        checklist: [ '可用100积分抵用100元'],
        TitleObjData: {
          titleContent: "提交订单",
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
  .select-body{
    position: relative;
    padding: 15px;
  }
  .select-body:before{
    content: " ";
    position: absolute;
    left: 15px;
    top: 0;
    right: 15px;
    height: 1px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    color: rgba(0, 0, 0, 0.1);
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    z-index: 2;
  }
  .select-txt{
    font-size: 16px;
    color: #666666;
    margin-bottom: 10px;
  }
  .select-days{
    overflow: hidden;
    margin: 0 -5px;
  }
  .select-days li{
    padding: 0 5px;
    float: left;
    width: 25%;
  }
  .select-days .day-item{
    border:1px solid rgba(225,234,255,1);
    text-align: center;
    line-height: 1.2;
    border-radius: 4px;
    padding: 7px 0;
    height: 50px;
  }
  .day-item .day{
    font-size: 12px;
    margin-bottom: 3px;
  }
  .day-item .price{
    font-size: 14px;
    color: #FF3939;
    font-weight: bold;
  }
  .active .day-item{
    background-color: #3976FF;
  }
  .active .day-item *{
    color: #FFFFFF;
  }
  .item-more{
    display: inline-block;
    position: relative;
     color: #3987FF;
     font-size: 12px;
     padding-right: 10px;
     margin: 10px 0;
  }
  .item-more:after{
    content: " ";
    display: inline-block;
    height: 8px;
    width: 8px;
    border-width: 1px 1px 0 0;
    border-color: #3987FF;
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
