<template>
  <div class="confirm-order-wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="confirm-order-content" :style="scenceGiftsContent">
      <div class="address-wrap" @click="selAddress">
        <div class="address-mid">
          <p>
            <span>{{addressDetails.realname}}</span>
            <span>{{addressDetails.tel}}</span>
          </p>
          <p>{{addressDetails.province}},{{addressDetails.city}},{{addressDetails.area}}</p>
          <p>{{addressDetails.address}}</p>
        </div>
        <div class="address-right">
          <span class="iconfont iconyoujiantou"></span>
        </div>
        <div class="border"></div>
      </div>


      <div class="cart-panel" v-for="(item,index) in this.ListOne" :key="index">
        <div class="cart-header">

          <span class="shop-name">{{ item.shop_name }}</span>
        </div>
        <cell v-for="good in item.goods_list">
          <template slot="icon">

            <div class="gar-photo">
              <img :src="good.thumb" alt />
            </div>
          </template>
          <template slot="after-title">
            <div class="gar-body">
              <div class="gar-header">
                <div class="gar-title">{{good.title}}</div>
              </div>
              <div class="gar-foot">
                <div class="gar-price">￥<span>{{good.marketprice}}</span></div>
                <div>x{{good.total}}</div>
              </div>
            </div>
          </template>
        </cell>
      </div>
      <div class="cell">
        <cell title="运费" :value="dispatchprice" @click.native="onClick"></cell>
        <checklist label-position="left" :options="commonList" v-model="integral" @on-change="change"></checklist>
      </div>

    </div>
    <div class="confirm-order-btn-wrap">
      <p class="confirm-order-desc">应付：¥{{totalPrice}}</p>
      <p class="confirm-order-btn" @click="confirmOrder">立即下单</p>
    </div>
  </div>
</template>

<script>
  import { XSwitch,CheckIcon,Cell,Checklist } from "vux";
  import Header from "@/components/common/Header";
  import { getAddressDefault, getUserInfo,createOrder } from "@/servers/api";
  export default {

    data() {
      return {
        integral:[],
        ListOne:[],
        TitleObjData: {
          titleContent: "确认订单",
          showLeftBack: true,
          showRightMore: false
        },
        addressDetails: {},
        dispatchprice:0,//运费
        totalPrice:0,//应付
        money:0,//总价
        imgUrl: "",
        orderList:[],
      };
    },

    components: {
      Header,
      XSwitch,
      CheckIcon,
      Cell,
      Checklist
    },

    computed: {
      scenceGiftsContent() {
        return { height: document.documentElement.clientHeight - 45 + "px" };
      },
      userInfo() {
        return this.$store.state.userLoginInfo;
      },
      commonList(){
        return ['可用'+this.userInfo.credit1.toFixed(2)+'积分抵扣'+this.userInfo.credit1.toFixed(2)+'元']
      }
    },

    mounted() {

      this.getAddressDefaultFn();
      /*遍历购物车中选中的商品*/
      let data = JSON.parse(sessionStorage.goodsOlder)
      let arr = []
      let dispatchprice = 0 //运费
      let totalPrice = 0
      data.forEach(item=>{
        if(item.checked == true){
          arr.push(item)

          item.goods_list.forEach(good=>{
            dispatchprice += Number(good.dispatchprice)*good.total
            totalPrice += Number(good.marketprice)*good.total
            this.orderList.push({[good.id] : good.total})
          })

        }else{
          let goodsArr = []
          item.goods_list.forEach(good=>{
            if(good.checked){
              goodsArr.push(good)
              dispatchprice += Number(good.dispatchprice)*good.total
              totalPrice += Number(good.marketprice)*good.total
              this.orderList.push({[good.id] : good.total})
            }
          })
          goodsArr.length ? arr.push({shop_name:item.shop_name,goods_list:goodsArr}) : null
        }
      })
      this.ListOne = arr
      this.totalPrice = dispatchprice + totalPrice
      this.money = dispatchprice + totalPrice
      this.dispatchprice = dispatchprice

      /*遍历购物车中选中的商品*/
      getUserInfo({}).then(res => {
        this.$store.commit("setUserLoginInfo", res.data);
        this.GLOBAL.setSession("userLoginInfo", res.data);
      });

    },

    methods: {
      // 下单
      confirmOrder() {
        if (this.addressDetails.id) {
          createOrder({ addressid:this.addressDetails.id,shop_ids:this.orderList,use_integral: this.integral.length ? 1 : 0}).then(res=>{
            if(res.data.skip_pay == 1){ //积分足够支付直接订单完成跳转到待发货

            }
          })
        } else {
          this.$vux.confirm.show({
            title: "提示",
            content: "请先添加收货地址",
            showCancelButton: false,
            onConfirm: () => {
              this.selAddress();
            }
          });
        }
      },

      change(){

          if(this.integral.length){//选中
            this.totalPrice = this.userInfo.credit1 > this.totalPrice ? 0 : this.totalPrice - this.userInfo.credit1.toFixed(2)
          }else{
            this.totalPrice = this.money
          }
      },
      selAddress() {
        this.$router.push("/address?type=goods");
      },

      // 获取默认收货地址
      getAddressDefaultFn() {
        getAddressDefault({})
          .then(res => {
            if (res.result === 1) {
              this.addressDetails = res.data[0];
            } else {
              this.$vux.confirm.show({
                title: "提示",
                content: "请先添加收货地址",
                showCancelButton: false,
                onConfirm: () => {
                  this.selAddress();
                }
              });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },

    watch: {
      "$store.state.address": function() {
        this.getAddressDefaultFn();
      },
      '$route':function (to) {
        if(sessionStorage.addressDetails){
          this.addressDetails = JSON.parse(sessionStorage.addressDetails)
          sessionStorage.addressDetails = ''
        }
      }
    }
  };
</script>
<style lang='less' scoped>
  .confirm-order-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #f9f9f9;
    .confirm-order-content {
      width: 100%;
      overflow-y: scroll;
      margin-top: 50px;
      padding-bottom: 60px;
      .address-wrap {
        position: relative;
        border-radius: 8px;
        box-shadow:0px 5px 10px 0px rgba(0,101,255,0.08);
        min-height: 50px;
        margin: 5px 15px 0;
        background: #fff;
        height: auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        box-sizing: border-box;
        overflow: hidden;
        .border{
          position: absolute;
          bottom: 0;
          width: 100%;
          left: -15px;
          background-image: url("./border.png");
          height: 3px;
          margin: 0 15px;
          background-size: 50% 50%;
          background-repeat: repeat;
        }
      }

    }

    .cart-panel {
      background: rgba(255, 255, 255, 1);
      box-shadow: 0px 10px 15px 0px rgba(0, 101, 255, 0.05);
      border-radius: 8px;
      overflow: hidden;
      margin: 10px 15px;
      padding: 15px 0;
      /deep/.weui-cell {
        padding: 8px 15px;
      }
      .cart-tabbar {
        background-color: #ffffff;
        position: absolute;
        padding: 10px 15px;
        left: 0;
        right: 0;
        bottom: 48px;
        overflow: hidden;
      }
      .cart-tabbar .button {
        width: 100px;
        height: 35px;
        line-height: 35px;
        background-color: #3976ff;
        border-radius: 35px;
        color: #ffffff;
        text-align: center;
        float: right;
      }
      .cart-tabbar .del-button {
        color: #3976ff;
        background-color: transparent;
        box-shadow: 0 0 0 1px #3976ff;
      }
      .cart-tabbar .check-box {
        float: left;
      }
      .cart-header {
        padding: 0 10px;
        margin-bottom: 10px;
        .shop-name {
          font-size: 16px;
          font-weight: bold;
          position: relative;
          display: inline-block;
          vertical-align: middle;
          padding-right: 20px;
          background: url(./rt_arrow2.png) right center no-repeat;
          background-size: 12px 12px;
        }
      }
      .gar-photo {
        width: 90px;
        height: 90px;
        margin-right: 15px;
        img {
          width: 90px;
          height: 90px;
          border-radius: 4px;
        }
      }
      .gar-body {
        height: 90px;
        line-height: 1.4;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
        flex-direction: column;
      }
      .gar-foot {
        position: relative;
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
      }

    }

  }


  .cell{
    margin: 0 15px;
    /deep/ .weui-cell {
      margin: 10px 0 ;
      padding: 16px 15px;
      background-color: #fff;
      border-radius: 8px;
      box-shadow:0px 5px 10px 0px rgba(0,101,255,0.08);
    }
    /deep/.weui-check_label{
      margin: 0 ;
    }
    /deep/.weui-cells_checkbox .weui-cell__hd{
      padding-right: 0;
    }
  }

  .address-mid {
    flex: 8;
  }
  .address-right {
    flex: 1;
    text-align: right;
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
  }
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
</style>
