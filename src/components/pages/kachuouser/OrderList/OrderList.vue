<template>
  <div class="order-list-wrap">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore" :hideApp="1"></Header>
    <tab active-color="#222" :line-width="2" default-color="#999" bar-active-color="#3976FF" v-model="index" custom-bar-width="30px" :scroll-threshold="5">
      <tab-item class="vux-center" v-for="(item, index) in tabList" :key="index" @on-item-click="getItem(index);" :class="{active:index == iscur}">
        <div class="tab-item-text">{{item}}</div>
      </tab-item>
    </tab>
    <div class="tab-panel" v-if="this.index == 0">
      <div class="tab-card" v-for="(item,index) in this.bigList" :key="index">
        <cell>
          <template slot="after-title">
            <div class="shop-title">
              {{item.goods[0].suoshujingqu}}
              <x-icon type="ios-arrow-right" size="12"></x-icon>
            </div>
          </template>
          <template slot="default">
            <div class="div-status" v-if="item.status == 0">待付款</div>
            <div class="div-status" v-if="item.status == 1">待发货</div>
            <div class="div-status" v-if="item.status == 2">待收货</div>
            <div class="div-status" v-if="item.status == 3">已完成</div>
          </template>
        </cell>
        <cell>
          <template slot="icon">
            <div class="order-photo">
              <img :src="item.goods[0].shangpinxinxi.thumb" alt />
            </div>
          </template>
          <template slot="after-title">
            <div class="order-title">{{item.goods[0].shangpinxinxi.title}}</div>
          </template>
          <template slot="default">
            <div class="order-price">
              ￥
              <i>{{item.goodsprice}}</i>
            </div>
            <div class="order-number">×1</div>
          </template>
        </cell>
        <cell>
          <template slot="after-title">
            <div class="card-foot">
              <div class="total-text">
                共1件商品
                <span class="order-price">
                  ￥
                  <i>{{item.goodsprice}}</i>
                </span> 合计
              </div>
              <div class="card-button">
                <x-button class="btn-gray">查看物流</x-button>
                <x-button class="btn-blue">确认收货</x-button>
              </div>
            </div>
          </template>
        </cell>
      </div>
    </div>
    <div class="tab-panel" v-if="this.index == 1">
      <div class="tab-card" v-for="(item,index) in this.bigList" :key="index" v-if="item.status==0">
        <cell>
          <template slot="after-title">
            <div class="shop-title">
              {{item.goods[0].suoshujingqu}}
              <x-icon type="ios-arrow-right" size="12"></x-icon>
            </div>
          </template>
          <template slot="default">
            <div class="div-status">待付款</div>
          </template>
        </cell>
        <cell>
          <template slot="icon">
            <div class="order-photo">
              <img :src="item.goods[0].shangpinxinxi.thumb" alt />
            </div>
          </template>
          <template slot="after-title">
            <div class="order-title">{{item.goods[0].shangpinxinxi.title}}</div>
          </template>
          <template slot="default">
            <div class="order-price">
              ￥
              <i>{{item.goodsprice}}</i>
            </div>
            <div class="order-number">×1</div>
          </template>
        </cell>
        <cell>
          <template slot="after-title">
            <div class="card-foot">
              <div class="total-text">
                共1件商品
                <span class="order-price">
                  ￥
                  <i>{{item.goodsprice}}</i>
                </span> 合计
              </div>
              <div class="card-button">
                <x-button class="btn-gray">取消订单</x-button>
                <x-button class="btn-blue">立即支付</x-button>
              </div>
            </div>
          </template>
        </cell>
      </div>
    </div>
    <div class="tab-panel" v-if="this.index == 2">
      <div class="tab-card" v-for="(item,index) in this.bigList" :key="index" v-if="item.status==1">
        <cell>
          <template slot="after-title">
            <div class="shop-title">
              {{item.goods[0].suoshujingqu}}
              <x-icon type="ios-arrow-right" size="12"></x-icon>
            </div>
          </template>
          <template slot="default">
            <div class="div-status">待发货</div>
          </template>
        </cell>
        <cell>
          <template slot="icon">
            <div class="order-photo">
              <img :src="item.goods[0].shangpinxinxi.thumb" alt />
            </div>
          </template>
          <template slot="after-title">
            <div class="order-title">{{item.goods[0].shangpinxinxi.title}}</div>
          </template>
          <template slot="default">
            <div class="order-price">
              ￥
              <i>{{item.goodsprice}}</i>
            </div>
            <div class="order-number">×1</div>
          </template>
        </cell>
        <cell>
          <template slot="after-title">
            <div class="card-foot">
              <div class="total-text">
                共1件商品
                <span class="order-price">
                  ￥
                  <i>{{item.goodsprice}}</i>
                </span> 合计
              </div>
              <div class="card-button">
                <x-button class="btn-blue">催单</x-button>
              </div>
            </div>
          </template>
        </cell>
      </div>
    </div>
    <div class="tab-panel" v-if="this.index == 3">
      <!-- <div class="empty-box" style="z-index:-1;">
                 <img src="../../../assets/images/empty.png" alt="">
        <p>你还没有订单，快去逛逛吧~</p>
      </div>-->
      <div class="tab-card" v-for="(item,index) in this.bigList" :key="index" v-if="item.status==2">
        <cell>
          <template slot="after-title">
            <div class="shop-title">
              {{item.goods[0].suoshujingqu}}
              <x-icon type="ios-arrow-right" size="12"></x-icon>
            </div>
          </template>
          <template slot="default">
            <div class="div-status">待收货</div>
          </template>
        </cell>
        <cell>
          <template slot="icon">
            <div class="order-photo">
              <img :src="item.goods[0].shangpinxinxi.thumb" alt />
            </div>
          </template>
          <template slot="after-title">
            <div class="order-title">{{item.goods[0].shangpinxinxi.title}}</div>
          </template>
          <template slot="default">
            <div class="order-price">
              ￥
              <i>{{item.goodsprice}}</i>
            </div>
            <div class="order-number">×1</div>
          </template>
        </cell>
        <cell>
          <template slot="after-title">
            <div class="card-foot">
              <div class="total-text">
                共1件商品
                <span class="order-price">
                  ￥
                  <i>{{item.goodsprice}}</i>
                </span> 合计
              </div>
              <div class="card-button">
                <x-button class="btn-blue" disabled>确认收货</x-button>
              </div>
            </div>
          </template>
        </cell>
      </div>
    </div>
    <div class="tab-panel" v-if="this.index == 4">
      <div class="tab-card" v-for="(item,index) in this.bigList" :key="index" v-if="item.status==3">
        <cell>
          <template slot="after-title">
            <div class="shop-title">
              {{item.goods[0].suoshujingqu}}
              <x-icon type="ios-arrow-right" size="12"></x-icon>
            </div>
          </template>
          <template slot="default">
            <div class="div-status">已完成</div>
          </template>
        </cell>
        <cell>
          <template slot="icon">
            <div class="order-photo">
              <img :src="item.goods[0].shangpinxinxi.thumb" alt />
            </div>
          </template>
          <template slot="after-title">
            <div class="order-title">{{item.goods[0].shangpinxinxi.title}}</div>
          </template>
          <template slot="default">
            <div class="order-price">
              ￥
              <i>{{item.goodsprice}}</i>
            </div>
            <div class="order-number">×1</div>
          </template>
        </cell>
        <cell>
          <template slot="after-title">
            <div class="card-foot">
              <div class="total-text">
                共1件商品
                <span class="order-price">
                  ￥
                  <i>{{item.goodsprice}}</i>
                </span> 合计
              </div>
              <div class="card-button">
                <x-button class="btn-blue" disabled>已评价</x-button>
              </div>
            </div>
          </template>
        </cell>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import OrderStateList from "@/components/layout/OrderStateList";
import { GoodsList } from "@/servers/api";
import { timeTodate } from "@/assets/js/tools";
import { Tab, TabItem, Cell, XButton } from "vux";

export default {

  data() {
    return {
      TitleObjData: {
        titleContent: "订单管理",
        showLeftBack: true,
        showRightMore: false
      },
      tabList: ["全部", "待付款", "待发货", "待收货", "已完成"],
      index: 0,
      iscur: 0,
      dataList: [],
      getData: [],
      bigList: []
    };
  },

  components: {
    Header,
    Tab,
    TabItem,
    OrderStateList,
    Cell,
    XButton
  },

  computed: {
    conSty() {
      return { height: document.documentElement.clientHeight - 60 + "px" };
    }
  },

  mounted() {
    this.getOrderList("9999");
  },

  methods: {
    getItem(index) {
      this.iscur = index;
      console.log(this.iscur);
    },

    refreshDate(val) {
      this.dataList.splice(val, 1);
    },
    onChangeTab(val) {
      this.getOrderList(val);
    },
    getOrderList(status) {
      this.dataList = [];
      GoodsList({
        status: status
      })
        .then(res => {
          console.log(res);
          this.bigList = res.data.result;
          console.log("列表：", this.bigList);
          // if (res.result === 1) {
          //   if (res.data.result) {
          //     for (let i = 0; i < res.data.result.length; i++) {
          //       this.dataList.push({
          //         id: res.data.result[i].id,
          //         goodsId: res.data.result[i].goods[0].id,
          //         ordersn: res.data.result[i].ordersn,
          //         orderType: res.data.result[i].iswxappcreate,
          //         classify: res.data.result[i].goods[0].suoshujingqu,
          //         status: res.data.result[i].status,
          //         orderState: res.data.result[i].status,
          //         goodImg: res.data.result[i].goods[0].shangpinxinxi.thumb,
          //         name: res.data.result[i].goods[0].shangpinxinxi.title,
          //         spec: "无",
          //         price: res.data.result[i].goods[0].goodsprice,
          //         count: res.data.result[i].goods[0].total,
          //         date: timeTodate(res.data.result[i].goods[0].createtime),
          //         priceCount: res.data.result[i].goods[0].price
          //       });
          //     }
          //   }
          // }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  updated() {
    this.dataList.length = 0;
  },
  watch: {}
};
</script>
<style lang='less' scoped>
.order-list-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.con-hei-wrap {
  width: 100%;
  overflow: hidden;
  overflow-y: scroll;
  background: #f9f9f9;
  padding-bottom: 50px;
  box-sizing: border-box;
}

.tab-card .weui-cell:before {
  display: none;
}
.tab-card .weui-btn {
  border-radius: 35px;
  height: 35px;
  width: 90px;
  font-size: 14px;
  margin: 0;
  background-color: transparent;
}
.tab-card .weui-btn:after {
  display: none;
}
.empty-box {
  text-align: center;
  padding-top: 100px;
  img {
    width: 135px;
    background: none;
  }
  p {
    margin-top: 10px;
    font-size: 16px;
    color: #999999;
  }
}
.order-photo {
  overflow: hidden;
  margin-right: 10px;
}
.order-photo img {
  width: 90px;
  height: 90px;
  border-radius: 4px;
}
.card-foot {
  text-align: right;
}
.card-button .weui-btn {
  display: inline-block;
  margin-left: 10px;
}
.card-button .weui-btn:active {
  background-color: transparent;
}
.card-button .weui-btn:disabled {
  opacity: 0.5;
}
.order-price {
  color: #222;
}
.order-price i {
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
}
.card-button .btn-gray {
  border: 1px solid #999999;
  color: #999999;
}
.card-button .btn-blue,
.card-button .btn-blue:active {
  border: 1px solid #3976ff !important;
  color: #3976ff !important;
}
.total-text {
  margin-bottom: 10px;
}
.div-status {
  color: #ff9d9d;
  font-size: 14px;
}
.shop-title {
  position: relative;
  padding-right: 20px;
  display: inline-block;
  font-size: 16px;
  line-height: 1;
  /*background: url(../../../assets/images/rt_arrow2.png) right center no-repeat;*/
  background-size: 12px 12px;
}

.tab-card {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 10px 15px 0px rgba(0, 101, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 15px;
  padding: 10px 0;
}
.vux-tab .vux-tab-item {
  background: none;
}
.vux-tab .vux-tab-item.vux-tab-selected {
  font-size: 16px;
  font-weight: bold;
}
.vux-tab-wrap{
  margin-top: 46px;
}
.vux-tab-wrap /deep/ .vux-tab-container {
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.08);
}
.tab-panel {
  padding: 15px 0;
  padding: 15px 0;
  overflow: hidden scroll;
  height: 88%;
}
</style>
