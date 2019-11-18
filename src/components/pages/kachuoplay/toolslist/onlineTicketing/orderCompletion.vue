<template>
  <div class="ol-wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore" style="top:-43px"></Header>
    <div class="card1">
      <div class="head">
          <div class="title">XXX景区门票</div>
          <div class="link">购票须知></div>
      </div>
      <div class="piao-contnet">
        <div class="title">游玩日期</div>
        <scroller lock-y :scrollbar-x=false>
          <div class="box1" :style="conHeight">
            <div class="box1-item" v-for="(i,l) in list" @click="selected = i;index = l" :class="{'select':index == l}"><div>{{i.Date}}</div><div>¥{{i.SalePrice}}</div></div>
          </div>
        </scroller>
      </div>
    </div>
    <div class="form">
      <div class="head">游客信息</div>
      <x-input title="姓名" placeholder="需要和证件上的名字统一" v-model="ruleName"></x-input>
      <x-input title="身份证号" placeholder="输入身份证号码" v-model="ruleCode"></x-input>
    </div>

    <div class="confirm-order-btn-wrap" v-if="selected.SalePrice">
      <p class="confirm-order-desc">应付：¥{{selected.SalePrice}}</p>
      <p class="confirm-order-btn" @click="confirmOrder">立即下单</p>
    </div>
  </div>

</template>

<script>
  import Header from "@/components/common/Header";
  import { Scroller,XInput } from 'vux'
  import {buyTicket,getTicketDetail,guidePay} from '@/servers/api'
    export default {
        name: "orderCompletion",

        components:{ Header ,Scroller,XInput },

        data(){
          return{
            TitleObjData: {
              titleContent: "订单填写",
              showLeftBack: true,
              showRightMore: false
            },
            index:-1,
            ruleName:'',
            ruleCode:'',
            list:[],
            selected:{}
          }
        },
        computed: {
          conHeight() {
            return { width: 30*this.list.length+'%' };
          }
        },

        methods:{
          confirmOrder(){
            buyTicket({ticket:this.$route.query.id,idCard:this.ruleCode,date:this.selected.Date,type:1}).then(res=>{
              console.log(res);
              let WXparams = {
                partnerid: res.data.pay.partnerid, // merchant id
                prepayid: res.data.pay.prepayid, // prepay id
                noncestr: res.data.pay.noncestr, // nonce
                timestamp: res.data.pay.timestamp.toString(), // timestamp
                sign: res.data.pay.paySign, // signed string
                package: res.data.pay.package // signed string
              };
              alert(JSON.stringify(WXparams))
              dsBridge.call("WXpay", JSON.stringify(WXparams));


              bridge.register("payStatus", r => {
                if(r){
                  this.$vux.toast.show({
                    text: '支付成功',
                    type: 'success',
                    time: 2000
                  })
                }else{
                  this.$vux.toast.show({
                    text: '支付失败,请重试!',
                    type: 'warn',
                    time: 2000
                  })
                }
              });

              // guidePay({
              //   type:1,
              //   order_sn: res.data.order_sn
              // })
                // .then(res => {
                //   console.log(res);
                //   if (res.result === 1) {
                //       this.WeixinPay(res.data.url);
                //   }
                // })
                // .catch(err => {
                //   console.log(err);
                // });
            })
          },
          WeixinPay(res) {

          },
        },

        mounted() {
          getTicketDetail({ticket:this.$route.query.id}).then(res=>{
            this.list = res.data
          })
        }
    }
</script>

<style scoped lang="less">
  .ol-wrap {
    background: rgba(229,229,229,1);
  }
  .card1{
    margin: 56px 15px 0;
    background-color: #fff;
    border-radius: 5px;
    .head{
      padding: 16px;
      border-bottom: 1px solid #ddd;
      .title{

      }
      .link{

      }
    }
    .piao-contnet{
      padding: 16px;
      .box1 {
        height: 50px;
        position: relative;
        display: flex;
      }
      .box1-item {
        flex: 1;
        border:1px solid #123123;
        border-radius: 3px;
        margin-left: 10px;
        text-align: center;
        height: 50px;
      }
      .select{
        border: 1px solid red;
      }
      .disabled{
        border: 1px solid #ccc;
      }
      .box1-item:first-child {
        margin-left: 0;
      }
    }
  }
  .form{
    background-color: #fff;
    border-radius: 5px;
    margin: 10px 15px 0;
    .head{
      padding: 0 16px;
      border-bottom: 1px solid #ddd;
      line-height: 55px;
    }
    /deep/.weui-cell{
      padding: 15px;
    }
  }
  .confirm-order-btn-wrap {
    width: 100%;
    height: 50px;
    border-top: 1px solid #eee;
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    bottom: 0;
    left: 0;
    .confirm-order-desc {
      flex: 2;
      padding-left: 15px;
      box-sizing: border-box;
      font-weight: bold;
      font-size: 17px;
    }
    .confirm-order-btn {
      flex: 1;
      height: 50px;
      background: #3976ff;
      line-height: 50px;
      text-align: center;
      color: #fff;
    }
  }
</style>
