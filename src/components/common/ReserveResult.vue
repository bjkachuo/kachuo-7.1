<template>
  <div class="wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
      <div class="integral-cell">
        <div class="text">当前订单获得2点积分奖励~</div>
        <div class="text-more">积分详情</div>
      </div>
      <div class="inwrap">
        <div class="form-panel">
          <div class="result-box">
            <div class="txt-lg"><img src="../../assets/images/sucess.png" alt=""><span>预订成功</span></div>
            <div class="txt-sm">预计14：39前，短信告知您预订结果</div>
          </div>
        </div>
        <div class="form-panel">
          <div class="form-header">订单信息</div>
          <cell-form-preview :list="list"></cell-form-preview>
        </div>
        <div class="form-panel">
          <flexbox class="contact-flex">
            <flexbox-item><div class="flex-map">地图/导航</div></flexbox-item>
            <flexbox-item><div class="flex-tel">联系商家</div></flexbox-item>
          </flexbox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import {Cell,XButton,XInput,XTextarea,Flexbox, FlexboxItem,CellFormPreview} from 'vux'
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
          titleContent: "订单详情",
          showLeftBack: true,
          showRightMore: false
        },
        list: [{
          label: '订单编号：',
          value: '1211093871'
        }, {
          label: '下单时间：',
          value: '2019-08-11 20:16:51'
        }, {
          label: '下单手机：',
          value: '178 1611 5091'
        }]
      };
    },
    components: {
      Header,
      Cell,
      XInput,
      CellFormPreview,
      XButton,
      Flexbox, FlexboxItem
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
  }
  .form-panel{
    background:rgba(255,255,255,1);
    box-shadow:0px 5px 10px 0px rgba(0,101,255,0.06);
    border-radius:8px;
    margin-bottom: 10px;
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
  .form-panel /deep/ .weui-form-preview__label{
    color: #666666;
  }
  .form-panel /deep/ .weui-form-preview__value{
    color: #222;
  }
  .form-panel /deep/ .weui-form-preview__item{
    padding: 5px 0;
  }
  .result-box{
    padding: 15px;
    text-align: center;
  }
  .txt-lg{
    text-align: center;
  }
  .txt-lg *{
    display: inline-block;
    vertical-align: middle;
    margin: 0 6px;
  }
  .txt-lg img{
    width: 24px;
    height: 24px;
  }
  .txt-lg span{
    font-size: 24px;
  }
  .txt-sm{
    font-size: 14px;
    margin-top: 10px;
  }
  .contact-flex{
    text-align: center;
    padding: 15px 0;
  }
  .contact-flex .flex-tel,
  .contact-flex .flex-map{
    background-repeat: no-repeat;
    background-position: left center;
    background-size: 15px 15px;
    display: inline-block;
    line-height: 20px;
    padding-left: 20px;
  }
  .vux-flexbox-item{
    position: relative;
  }
  .vux-flexbox-item:first-child:after{
    width: 1px;
    height: 15px;
    background: #E5E5E5;
    content: ' ';
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -7px;
  }
  .flex-tel{
    background-image: url(../../assets/images/telicon@2x.png);
  }
  .flex-map{
    background-image: url(../../assets/images/dizhi.png);
  }
  .integral-cell{
    height: 30px;
    background-color: #FFF7EF;
  color: #FFA24C;
    padding: 0 30px;
  }
.integral-cell .text{
  float: left;
  line-height: 30px;
}
.integral-cell .text-more{
  float: right;
  line-height: 30px;
  padding-right: 10px;
  background: url(../../assets/images/rt_arrow.png) right center no-repeat;
  background-size: 7px 11px;
}
.inwrap{padding: 15px;}
</style>
