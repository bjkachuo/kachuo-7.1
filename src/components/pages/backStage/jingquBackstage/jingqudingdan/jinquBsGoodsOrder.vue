<template>
  <div class="goodsOrder-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <tab
      :line-width="1"
      custom-bar-width="32px"
      default-color="#222222"
      active-color="#3976FF"
      bar-active-color="#3976FF"
    >
      <tab-item @click.native="cur=0" :class="{active:cur==0}" selected>待发货</tab-item>
      <tab-item @click.native="cur=1" :class="{active:cur==1}">已发货</tab-item>
      <tab-item @click.native="cur=2" :class="{active:cur==2}">退款中</tab-item>
      <tab-item @click.native="cur=3" :class="{active:cur==3}">已退款</tab-item>
      <tab-item @click.native="cur=4" :class="{active:cur==4}">已完成</tab-item>
    </tab>
    <div class="tab-content">
      <b v-show="cur==0">
        <flexbox orient="vertical">
          <flexbox-item>
            <div class="order-content" v-for="(item,index) in this.goodsListOne" :key="index">
              <div class="content-top" @click="goWaitDetail(item.id)">
                <div class="img-wrap">
                  <img :src="item.image" alt/>
                  <div class="num">
                    <p>共{{item.count}}件</p>
                  </div>
                </div>
                <div class="mid-text">
                  <div class="text-one">
                    <p class="name">收货人：{{item.nickname}}</p>
                    <p class="state">待发货</p>
                  </div>
                  <div class="text-two">
                    <p>支付时间:{{item.createtime | formateDate}}</p>
                  </div>
                  <div class="text-three">
                    <p>本单金额:￥{{item.price}}</p>
                  </div>
                </div>
              </div>
              <div class="content-bottom">
                <div class="bottom-two" @click="goSend(item.id)">
                  <p>发货</p>
                </div>
                <div class="bottom-one">
                  <!--                  <p>联系买家</p>-->
                  <p>
                    <a :href="'tel:' + item.mobile">联系用户</a>
                  </p>
                </div>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
        <!-- <div class="order-content">
          <div class="content-top">
            <div class="img-wrap">
              <img src alt />
            </div>
          </div>
          <div class="content-bottom"></div>
        </div>-->
      </b>
      <b v-show="cur==1">
        <flexbox orient="vertical">
          <flexbox-item>
            <div class="order-content" v-for="(item,index) in this.goodsListTwo" :key="index">
              <div class="content-top" @click="goAready(item.id)">
                <div class="img-wrap">
                  <img :src="item.image" alt/>
                  <div class="num">
                    <p>共{{item.count}}件</p>
                  </div>
                </div>
                <div class="mid-text">
                  <div class="text-one">
                    <p class="name">收货人：{{item.nickname}}</p>
                    <p class="state">已发货</p>
                  </div>
                  <div class="text-two">
                    <p>支付时间:{{item.createtime | formateDate}}</p>
                  </div>
                  <div class="text-three">
                    <p>本单金额:￥{{item.price}}</p>
                  </div>
                </div>
              </div>
              <div class="content-bottom">
                <div class="bottom-one" @click="goGoodsLog(item.id)">
                  <p>查看物流</p>
                </div>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </b>
      <b v-show="cur==2">
        <flexbox orient="vertical">
          <flexbox-item>
            <div class="order-content" v-for="(item,index) in goodsListThree" :key="index">
              <div class="content-top" @click="goReturn(item.id)">
                <div class="img-wrap">
                  <img :src="item.image" alt/>
                  <div class="num">
                    <p>共{{item.count}}件</p>
                  </div>
                </div>
                <div class="mid-text">
                  <div class="text-one">
                    <p class="name">收货人：{{item.nickname}}</p>
                    <p class="state">退款中</p>
                  </div>
                  <div class="text-two">
                    <p>支付时间:{{item.createtime}}</p>
                  </div>
                  <div class="text-three">
                    <p>本单金额:￥{{item.price}}</p>
                  </div>
                </div>
              </div>
              <div class="content-bottom">
                <div class="bottom-one" @click="onDel(item)">
                  <p>同意退款</p>
                </div>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </b>
      <b v-show="cur==3">
        <flexbox orient="vertical">
          <flexbox-item>
            <div class="order-content" v-for="(item,index) in goodsListThour" :key="index">
              <div class="content-top" @click="goReturned(item.id)">
                <div class="img-wrap">
                  <img :src="item.image" alt/>
                  <div class="num">
                    <p>共{{item.count}}件</p>
                  </div>
                </div>
                <div class="mid-text">
                  <div class="text-one">
                    <p class="name">收货人：{{item.nickname}}</p>
                    <p class="state">已退款</p>
                  </div>
                  <div class="text-two">
                    <p>支付时间:{{item.createtime}}</p>
                  </div>
                  <div class="text-three">
                    <p>本单金额:￥{{item.price}}</p>
                  </div>
                </div>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </b>
      <b v-show="cur==4">
        <flexbox orient="vertical">
          <flexbox-item>
            <div class="order-content" v-for="(item,index) in goodsListFive" :key="index">
              <div class="content-top" @click="goFinish(item.id)">
                <div class="img-wrap">
                  <img :src="item.image" alt/>
                  <div class="num">
                    <p>共{{item.count}}件</p>
                  </div>
                </div>
                <div class="mid-text">
                  <div class="text-one">
                    <p class="name">收货人：{{item.nickname}}</p>
                    <p class="state">已完成</p>
                  </div>
                  <div class="text-two">
                    <p>支付时间:{{item.createtime}}</p>
                  </div>
                  <div class="text-three">
                    <p>本单金额:￥{{item.price}}</p>
                  </div>
                </div>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </b>
    </div>
    <confirm
      class="confirm-dialog"
      v-model="isconfirm"
      title="确定同意退款？"
      theme="ios"
      @on-cancel="onCancel()"
      @on-confirm="onConfirm()"
    ></confirm>

  </div>
</template>

<script>
    import Header from "@/components/common/Header";
    import {Tab, TabItem, Flexbox, FlexboxItem,Confirm} from "vux";
    import {timeTodate} from "@/assets/js/tools";

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "商品订单",
                    showLeftBack: true,
                    showRightMore: false
                },
                isconfirm: false,
                cur: 0,//默认选中第一个tab
                //待发货订单列表
                goodsListOne: [],
                //已发货订单列表
                goodsListTwo: [],
                //商品退款中列表
                goodsListThree:[],
                //商品已退款列表
                goodsListThour:[],
                //商品已完成列表
                goodsListFive:[]
            };

        },
        computed: {},
        created() {
        },
        mounted() {
            //商品待发货列表
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.orderList&status=" + 1).then(({data}) => {
                this.goodsListOne = data.data;
                console.log("goodsListOne待发货订单列表:", this.goodsListOne);
            });
            //商品已发货列表
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.orderList&status=" + 2).then(({data}) => {
                this.goodsListTwo = data.data;
                console.log("goodsListTwo已发货订单列表:", this.goodsListTwo);
            });
            //商品退款中列表
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.orderList&status=" + 4).then(({data}) => {
                this.goodsListThree = data.data;
                console.log("goodsListThree退款中订单列表:", this.goodsListThree);
            });
            //商品已退款列表
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.orderList&status=" + 5).then(({data}) => {
                this.goodsListThour = data.data;
                console.log("goodsListThour已退款订单列表:", this.goodsListThour);
            });
          //商品已完成列表
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.orderList&status=" + 3).then(({data}) => {
                this.goodsListFive = data.data;
                console.log("goodsListFive已完成订单列表:", this.goodsListFive);
            });

        },
        filters: {
            formateDate(val) {
                return timeTodate(val);
            }

        },
        methods: {
            //删除弹窗，方法
            onDel(item) {
                this.isconfirm = !this.isconfirm;
                console.log('点击同意退款时打印:',item)
            },
            //点击取消事件
            onCancel() {
                console.log("我点了取消");
            },
            //点击确认事件
            onConfirm() {
                console.log("我点了确认");
            },
            //跳转待发货订单详情页面
            goWaitDetail(id) {
                this.$router.push("/orderWaitPro?id=" + id);
                console.log("去待发货");
            },
            //跳转已发货详情页面
            goAready(id) {
                this.$router.push("/orderAlreadyPro?id="+id);
                console.log("去已发货");
            },
            //跳转退款中详情页面
            goReturn(id) {
                this.$router.push("/orderReturnPro?id="+id);
                console.log("去退款中");
            },
            //跳转已退款详情页面
            goReturned(id) {
                this.$router.push("/orderReturnedPro?id="+id);
                console.log("去已退款");
            },
            //跳转已完成详情页面
            goFinish(id) {
                this.$router.push("/orderFinishPro?id="+id);
                console.log("去已完成");
            },
            //跳转发货页面
            goSend(id) {
                this.$router.push("/jinquBsSendGoods?id=" + id)
            },
            //跳转查看物流页面
            goGoodsLog(id) {
                this.$router.push("/jinquBsGoodsLogistics?id="+id)
            },
            //刷新列表方法
            Refresh(){
                //刷新商品待发货列表
                this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.orderList&status=" + 1).then(({data}) => {
                    this.goodsListOne = data.data;
                    console.log("我刷新了待发货订单列表:", this.goodsListOne);
                });
                //刷新商品已发货列表
                this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.orderList&status=" + 2).then(({data}) => {
                    this.goodsListTwo = data.data;
                    console.log("我刷新了已发货订单列表:", this.goodsListTwo);
                });

            }
        },
        components: {
            Header,
            Tab,
            TabItem,
            Flexbox,
            FlexboxItem,
            Confirm
        },
        watch: {
            '$route': function (to) {
                if (sessionStorage.goback == "yes") {
                    sessionStorage.goback = ''
                    this.Refresh();
                }
            }

        }

    };
</script>

<style scoped lang="css">
  .goodsOrder-wrap {
    height: 100%;
    width: 100%;
    background: #f5f5f5;
    overflow: hidden;
  }

  .tab-content {
    width: 100%;
    height: 85%;
    overflow: hidden scroll;
  }

  .tab-content b {
    font-weight: normal;
    display: block;
    width: 100%;
  }

  .order-content {
    width: 100%;
    min-height: 120px;
    background: #ffffff;
    margin-bottom: 10px;
    border-radius: 8px;
  }

  .content-top {
    height: 105px;
    width: 100%;
    margin-bottom: 18px;
  }

  .content-bottom {
    height: 55px;
    width: 100%;
  }

  .img-wrap {
    height: 90px;
    width: 90px;
    border-radius: 8px;
    float: left;
    margin-top: 12px;
    position: relative;
    margin-left: 4%;
  }

  .img-wrap img {
    width: 100%;
  }

  .num {
    width: 90px;
    height: 30px;
    background: #000000;
    position: absolute;
    left: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }

  .num p {
    text-align: center;
    line-height: 30px;
    font-size: 16px;
    color: #ffffff;
  }

  .mid-text {
    width: 66%;
    height: 90px;
    float: right;
    margin-top: 12px;
  }

  .text-one {
    height: 28px;
  }

  .name {
    float: left;
    font-size: 16px;
    font-weight: bold;
    color: #222222;
    font-family: PingFangSC-Bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 76%;
  }

  .state {
    font-size: 14px;
    color: #85a9ff;
    float: right;
    font-family: PingFangSC-Regular;
    margin-right: 4%;
  }

  .text-two {
    margin-top: 3px;
    height: 18px;
  }

  .text-two p {
    font-size: 12px;
    color: #999999;
  }

  .text-three {
    height: 22px;
    margin-top: 22px;
  }

  .text-three p {
    font-size: 14px;
    color: #666666;
  }

  .bottom-one {
    float: right;
    border-radius: 18px;
    width: 100px;
    height: 35px;
    border: 1px solid #3976ff;
    background: #ffffff;
    margin: 2px 2% 0 0;
  }

  .bottom-one p {
    font-size: 14px;
    color: #3976ff;
    line-height: 35px;
    text-align: center;
  }

  .bottom-one a {
    text-decoration: none;
    font-size: 14px;
    color: #3976ff;
    line-height: 35px;
    text-align: center;
  }

  .bottom-two {
    float: right;
    border-radius: 18px;
    width: 100px;
    height: 35px;
    background: #3976ff;
    margin: 2px 4% 0 4%;
  }

  .bottom-two p {
    font-size: 14px;
    color: #ffffff;
    line-height: 35px;
    text-align: center;
  }
  /* confirm弹窗样式 */
  .confirm-dialog /deep/ .weui-skin_android .weui-dialog__ft {
    text-align: center;
    padding: 0 15px 15px 15px;
  }

  .confirm-dialog /deep/ .weui-dialog__btn {
    width: 110px;
    height: 35px;
    line-height: 35px;
    border: 1px solid #3976ff;
    border-radius: #3976ff;
    text-align: center;
    color: #3976ff;
    font-size: 15px;
    border-radius: 35px;
    margin: 0 5px;
  }

  .confirm-dialog /deep/ .weui-dialog__btn:active {
    background-color: transparent;
  }

  .confirm-dialog /deep/ .weui-dialog__btn_primary,
  .confirm-dialog /deep/ .weui-dialog__btn_primary:active {
    background-color: #3976ff;
    color: #ffffff;
  }

  .confirm-dialog /deep/ .weui-skin_android .weui-dialog__title {
    font-size: 18px;
  }

  .confirm-dialog /deep/ .weui-dialog__hd {
    text-align: center;
    padding: 30px 15px;
  }

  .confirm-dialog /deep/ .weui-skin_android .weui-dialog__bd {
    padding: 5px 15px 0 15px;
    min-height: 10px;
  }

</style>
<style lang="less" scoped>
  /deep/ .vux-tab-wrap {
    margin-bottom: 10px;
  }

  /deep/ .vux-tab .vux-tab-item {
    font-size: 16px;
    font-weight: bold;
  }

  /deep/ .scrollable .vux-tab-item {
    flex: 0 0 20%;
  }
</style>
