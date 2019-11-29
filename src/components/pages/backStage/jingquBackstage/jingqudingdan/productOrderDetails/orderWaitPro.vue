<template>
  <div class="od-wrap">
    <customerService style="float: right;margin: -30px;" ref="header"></customerService>
    <div class="head">
      <div class="h-left" @click="goback">
        <x-icon type="ios-arrow-left" size="30" class="back"></x-icon>
      </div>
      <div class="h-mid">
        <p>订单详情</p>
      </div>
    </div>
    <div class="line-one">
      <div class="status">
        <p>待发货</p>
      </div>
      <div class="form-wrap">
        <div class="f-one">
          <x-input title="联系人:" disabled v-model="person" class="top"></x-input>
          <x-input title="手机号:" disabled v-model="phone" mask="999 9999 9999"></x-input>
          <x-input title="留言：" disabled v-model="message" class="bottom"></x-input>
        </div>
        <div class="f-one">
          <div class="proInformation">
            <div class="tit-wrap">
              <p>商品信息</p>
            </div>
            <div style="width:92%;margin:0 auto 15px;height:1px;background:#E5E5E5;"></div>
            <div class="pro-infor" v-for="(item,index) in List.goodsMsg" :key="index">
              <div class="img-wrap">
                <img :src="item.thumb" alt/>
              </div>
              <div class="pro-mid">
                <div>
                  <p>{{item.title}}</p>
                </div>
                <div style="margin-top:25px;">
                  <p>￥{{item.price}}</p>
                </div>
              </div>
              <div class="pro-right">
                <p>x{{item.total}}</p>
              </div>
            </div>
<!--            <div class="pro-infor">-->
<!--              <div class="img-wrap">-->
<!--                <img src alt/>-->
<!--              </div>-->
<!--              <div class="pro-mid">-->
<!--                <div>-->
<!--                  <p>李几已书法作品蓬莱仙阁赋李 几已书法作品蓬莱</p>-->
<!--                </div>-->
<!--                <div style="margin-top:25px;">-->
<!--                  <p>￥600</p>-->
<!--                </div>-->
<!--              </div>-->
<!--              <div class="pro-right" style="margin-top:38px;">-->
<!--                <p>x1</p>-->
<!--              </div>-->
<!--            </div>-->
            <cell title="订单金额" class="mid">
              <div>
                <span>¥{{this.price}}</span>
              </div>
            </cell>
            <cell title="实付金额" class="mid">
              <div>
                <span>¥{{this.realPrice}}</span>
              </div>
            </cell>
          </div>
        </div>
        <!-- <div class="f-one">
          <cell title="本单金额:" class="mid">
            <div>
              <span>¥{{this.price}}</span>
            </div>
          </cell>
        </div> -->
        <div class="f-one">
          <x-input title="订单编号:" disabled v-model="orderNum" class="top"></x-input>
          <x-input title="支付时间:" disabled v-model="payTime"></x-input>
          <!-- <x-input title="取消时间:" disabled v-model="cancelTime" class="bottom"></x-input> -->
        </div>
        <div class="scever">
          <p>
            如需取消订单或申请退款请点此联系
            <span @click="goser">人工客服</span>
          </p>
        </div>
      </div>
    </div>

    <!-- <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>-->
  </div>
</template>

<script>
    import {Cell, XInput} from "vux";
    import customerService from "@/components/common/customerService/customerService";

    export default {
        props: {},
        data() {
            return {
                //联系人
                person: "无",
                //电话
                phone: "无",
                //留言
                message: "无",
                //预约时长
                time: "无",
                //预约人数
                personNum: "无",
                //订单价格
                price: "无",
                //实付价格
                realPrice: "无",
                //订单编号
                orderNum: "无",
                //支付时间
                payTime: "无",
                //取消时间
                cancelTime: "无",
                //详情列表
                List: []
            };
        },
        computed: {},
        created() {
        },
        mounted() {
            console.log('路由传递的id:', this.$route.query.id);
            //获取订单详情
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.orderMsg&orderid=" + this.$route.query.id).then(({data}) => {
                this.List = data.data;
                console.log("获取订单详情:",this.List)
                //联系人
                this.person = this.List.address.realname;
                //手机号
                this.phone = this.List.address.mobile;
                //留言
                this.message = this.List.remark;
                //订单金额
                this.price = this.List.price;
                //实付金额
                this.realPrice = this.List.real_price;
                //订单号
                this.orderNum = this.List.ordersn;
                //支付时间
                this.payTime = this.List.createtime;

            })
        },
        watch: {},
        methods: {
            goback() {
                this.$router.go(-1);
            },
            //人工客服
            goser() {
                this.$refs.header.iframeShow = true;
            }
        },
        components: {
            Cell,
            XInput,
            customerService
        }
    };
</script>

<style scoped lang="css">
  .od-wrap {
    height: 100%;
    width: 100%;
    background: #f5f5f5;
    overflow: hidden scroll;
  }

  .head {
    width: 100%;
    height: 46px;
    /* background: chocolate; */
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(122, 191, 238, 0);
  }

  .back {
    fill: #fefefe;
  }

  .h-left {
    float: left;
    margin: 7px 0px 0 2%;
  }

  .h-mid {
    float: left;
    margin: 10px 0 0 33%;
  }

  .h-mid p {
    font-size: 18px;
    color: #fefefe;
  }

  .line-one {
    width: 100%;
    height: 216px;
    background: linear-gradient(
      90deg,
      rgba(56, 149, 255, 1) 0%,
      rgba(57, 118, 255, 1) 100%
    );
  }

  .status {
    padding-top: 66px;
    margin-left: 5%;
    margin-bottom: 30px;
  }

  .status p {
    font-size: 30px;
    color: #ffffff;
  }

  .form-wrap {
    /* height: 500px; */
    width: 92%;
    margin: 0 auto;
    /* background: blueviolet; */
  }

  .f-one {
    width: 100%;
    /* height: 165px; */
    min-height: 45px;
    margin-bottom: 10px;
    overflow: hidden;
  }

  .weui-cell {
    background: #fff;
  }

  .top {
    border-radius: 8px 8px 0 0;
  }

  .mid {
    border-radius: 8px;
  }

  .bottom {
    border-radius: 0 0 8px 8px;
  }

  .scever p {
    font-size: 12px;
    color: #999999;
    text-align: center;
    margin-top: 30px;
  }

  .scever span {
    color: #3976ff;
    text-decoration: underline;
  }

  .proInformation {
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
  }

  .tit-wrap {
    margin: 15px 0 14.5px 4.64%;
  }

  .pro-infor {
    width: 92%;
    height: 90px;
    margin-bottom: 25px;
    display: flex;
    justify-content: space-around;
  }

  .img-wrap {
    width: 90px;
    height: 90px;
  }

  .img-wrap img {
    width: 100%;
  }

  .pro-mid {
    width: 185.5px;
    height: 90px;
  }
</style>
