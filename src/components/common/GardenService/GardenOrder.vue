<template>
  <div class="Order-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <div style="margin-top:46px;">
      <tab
        :line-width="1"
        custom-bar-width="40px"
        default-color="#222222"
        active-color="#3976FF"
        bar-active-color="#3976FF"
      >
        <tab-item @click.native="cur=0" :class="{active:cur==0}" selected>全部</tab-item>
        <tab-item @click.native="cur=1" :class="{active:cur==1}">服务中</tab-item>
        <tab-item @click.native="cur=2" :class="{active:cur==2}">已取消</tab-item>
        <tab-item @click.native="cur=3" :class="{active:cur==3}">已完成</tab-item>
      </tab>
    </div>
    <div class="tab-content">
      <b v-show="cur==0">
        <flexbox orient="vertical">
          <flexbox-item>
            <div class="order-content" v-for="(item,index) in this.allList" :key="index">
              <div class="content-top" @click="goOrderTwo(index)">
                <div class="img-wrap">
                  <img :src="item.image" alt />
                  <!-- <div class="num">
                    <p>吃吧</p>
                  </div>-->
                </div>
                <div class="mid-text">
                  <div class="text-one">
                    <p class="name">{{item.name}}</p>
                    <p class="state" style="color:#FF8585;" v-if="item.status == 1">服务中</p>
                    <p class="state" style="color:#999999;" v-if="item.status == 2">已取消</p>
                    <p class="state" style="color:#999999;" v-if="item.status == 6">已完成</p>
                  </div>
                  <div class="text-two">
                    <p>支付时间:{{item.add_time}}</p>
                  </div>
                  <div class="text-three">
                    <p>本单金额:¥{{item.amount}}</p>
                  </div>
                </div>
              </div>
              <div class="content-bottom" v-if="item.status == 1">
                <div class="bottom-two" @click="done(item.id)">
                  <p>订单完成</p>
                </div>
                <div class="bottom-one">
                  <p>
                    <a :href="'tel:' + item.phone">联系商家</a>
                  </p>
                </div>
              </div>
              <div class="content-bottom" style="display:none;" v-if="item.status == 2 || 6">
                <div class="bottom-two">
                  <p>订单完成</p>
                </div>
                <div class="bottom-one">
                  <p>
                    <a :href="'tel:' + item.phone">联系商家</a>
                  </p>
                </div>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </b>
      <b v-show="cur==1">
        <flexbox orient="vertical">
          <flexbox-item>
            <div
              class="order-content"
              v-for="(item,index) in this.allList"
              :key="index"
              v-if="item.status == 1"
            >
              <div class="content-top" @click="goOrderTwo(index)">
                <div class="img-wrap">
                  <img :src="item.image" alt />
                  <!-- <div class="num">
                    <p>吃吧</p>
                  </div>-->
                </div>
                <div class="mid-text">
                  <div class="text-one">
                    <p class="name">{{item.name}}</p>
                    <p class="state" style="color:#FF8585;">服务中</p>
                  </div>
                  <div class="text-two">
                    <p>支付时间:{{item.add_time}}</p>
                  </div>
                  <div class="text-three">
                    <p>本单金额:¥{{item.amount}}</p>
                  </div>
                </div>
              </div>
              <div class="content-bottom">
                <div class="bottom-two" @click="done(item.id)">
                  <p>订单完成</p>
                </div>
                <div class="bottom-one">
                  <p>
                    <a :href="'tel:' + item.phone">联系商家</a>
                  </p>
                </div>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </b>
      <b v-show="cur==2">
        <flexbox orient="vertical">
          <flexbox-item>
            <div
              class="order-content"
              v-for="(item,index) in this.allList"
              :key="index"
              v-if="item.status == 2"
            >
              <div class="content-top" @click="goOrderThr(index)">
                <div class="img-wrap">
                  <img :src="item.image" alt />
                  <!-- <div class="num">
                    <p>吃吧</p>
                  </div>-->
                </div>
                <div class="mid-text">
                  <div class="text-one">
                    <p class="name">{{item.name}}</p>
                    <p class="state" style="color:#999999;">已取消</p>
                  </div>
                  <div class="text-two">
                    <p>支付时间:{{item.add_time}}</p>
                  </div>
                  <div class="text-three">
                    <p>本单金额:¥{{item.amount}}</p>
                  </div>
                </div>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </b>
      <b v-show="cur==3">
        <flexbox orient="vertical">
          <flexbox-item>
            <div
              class="order-content"
              v-for="(item,index) in this.allList"
              :key="index"
              v-if="item.status == 6"
            >
              <div class="content-top" @click="goOrderFour(index)">
                <div class="img-wrap">
                  <img :src="item.image" alt />
                  <!-- <div class="num">
                    <p>吃吧</p>
                  </div>-->
                </div>
                <div class="mid-text">
                  <div class="text-one">
                    <p class="name">{{item.name}}</p>
                    <p class="state" style="color:#999999;">已完成</p>
                  </div>
                  <div class="text-two">
                    <p>支付时间:{{item.add_time}}</p>
                  </div>
                  <div class="text-three">
                    <p>本单金额:¥{{item.amount}}</p>
                  </div>
                </div>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </b>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Tab, TabItem, Flexbox, FlexboxItem } from "vux";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "游园订单",
        showLeftBack: true,
        showRightMore: false
      },
      cur: 0, //默认选中第一个tab,
      //全部订单
      allList: []
    };
  },
  computed: {},
  created() {},
  mounted() {
    console.log(JSON.parse(sessionStorage.getItem("userLoginInfo")).id);
    //获取订单列表
    this.$http
      .post(
        "http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.index.orderlist&id=" +
          JSON.parse(sessionStorage.getItem("userLoginInfo")).id
      )
      .then(({ data }) => {
        console.log(data);
        this.allList = data.data.list;
        console.log("全部订单", this.allList);
      });
  },
  watch: {},
  methods: {
    //订单完成
    done(id) {
      this.$http
        .post(
          "https://core.kachuo.com/app/ewei_shopv2_app.php?i=8&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.index.operateOrderStatus&id=" +
            id +
            "&status=" +
            6
        )
        .then(({ data }) => {
          console.log(data);
          this.start();
        });
    },
    //刷新订单列表
    start() {
      this.$http
        .post(
          "http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.index.orderlist&id=" +
            JSON.parse(sessionStorage.getItem("userLoginInfo")).id
        )
        .then(({ data }) => {
          console.log(data);
          this.allList = data.data.list;
          console.log("刷新后全部订单", this.allList);
        });
    },
    //进行中
    goOrderTwo(index) {
      this.$router.push({
        path: "/orderDetails",
        query: {
          status: "进行中",
          listOne: this.allList[index]
        }
      });
    },
    //已取消
    goOrderThr(index) {
      this.$router.push({
        path: "/orderDetails",
        query: {
          status: "已取消",
          listOne: this.allList[index]
        }
      });
    },
    //已完成
    goOrderFour(index) {
      this.$router.push({
        path: "/orderDetails",
        query: {
          status: "已完成",
          listOne: this.allList[index]
        }
      });
    }
  },
  components: {
    Header,
    Tab,
    TabItem,
    Flexbox,
    FlexboxItem
  }
};
</script>

<style scoped lang="css">
.Order-wrap {
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  overflow: hidden scroll;
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
  /* height: 180px; */
  background: #ffffff;
  margin-bottom: 10px;
  border-radius: 8px;
  min-height: 120px;
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
  margin: 2px 4% 0 4%;
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
