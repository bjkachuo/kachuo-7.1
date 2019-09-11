<template>
  <div class="electronicsTicket-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <tab
      :line-width="1"
      custom-bar-width="100%"
      default-color="#666666FF"
      active-color="#222222FF"
      bar-active-color="#3976FFFF"
    >
      <tab-item @click.native="cur=0" :class="{active:cur==0}" selected>在线购票</tab-item>
      <tab-item @click.native="cur=1" :class="{active:cur==1}">智能验票</tab-item>
    </tab>
    <div class="tab-content">
      <b v-show="cur==0">
        <div class="t-content" v-for="(item,index) in dataListOne" :key="index">
          <div class="t-left">
            <div class="img-wrap">
              <img :src="item.ImgUrl" alt />
            </div>
            <div class="txt-wrap">
              <div class="t-one">
                <p>{{item.Name}}</p>
              </div>
              <div class="t-two">
                <p>当前景区</p>
              </div>
              <div class="t-three">
                <p>¥{{item.MarketPrice}}</p>
              </div>
            </div>
          </div>
          <div class="t-right" @click="buyTickets(index)">
            <p>认证</p>
          </div>
        </div>
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
        <div class="explain-wrap">
          <div class="explain-one">
            <img src="./yanpiao.png" alt />
          </div>
          <div class="text-wrap">
            <div>
              <p>1.通过APP扫描人脸数据和门票识别码(二维码等)</p>
            </div>
            <div>
              <p>&nbsp;&nbsp;2.门票和人脸信息绑定，可通过景区闸机快速入园</p>
            </div>
          </div>
          <div class="p-wrap">
            <flexbox>
              <flexbox-item>
                <div class="flex-demo">
                  <div class="p-img-wrap">
                    <img src="./p1.png" alt />
                  </div>
                  <div>
                    <p>扫描人脸</p>
                  </div>
                </div>
              </flexbox-item>
              <div class="add-wrap">
                <img src="./p2.png" alt />
              </div>
              <flexbox-item>
                <div class="flex-demo">
                  <div class="p-img-wrap">
                    <img src="./p3.png" alt />
                  </div>
                  <div>
                    <p>二维码</p>
                  </div>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="flex-demo">
                  <div class="p-img-wrap">
                    <img src="./p4.png" alt />
                  </div>
                  <div>
                    <p>条形码</p>
                  </div>
                </div>
              </flexbox-item>
              <flexbox-item>
                <div class="flex-demo">
                  <div class="p-img-wrap">
                    <img src="./p5.png" alt />
                  </div>
                  <div>
                    <p>数字码</p>
                  </div>
                </div>
              </flexbox-item>
            </flexbox>
            <!-- <div class="p-img-wrap">
                  <img src="" alt="">
              </div>
            <div class="p-text-wrap"><p>扫描人脸</p></div>-->
          </div>
        </div>
        <div class="face-wrap">
          <div class="f-left">
            <img src="./renlian.png" alt />
          </div>
          <div class="f-right">
            <div class="i-warp">
              <x-icon type="ios-checkmark" size="15"></x-icon>
            </div>
            <span>已通过</span>
          </div>
        </div>
        <div class="binding-wrap">
          <div class="explain-one">
            <img src="./bangding.png" alt />
          </div>
          <div class="text-bind">
            <p>扫描或输入其它平台购买的景区门票二维码、条形码或数字串码信息进行门票信息绑定</p>
          </div>
          <div class="scann" @click="scan">
            <p>扫码识别</p>
          </div>
          <div class="num">
            <p>数字串码</p>
          </div>
        </div>
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
        titleContent: "电子票",
        showLeftBack: true,
        showRightMore: false
      },
      cur: 0, //默认选中第一个tab
      dataListOne: [],
      dataList: [
        {
          imgSrc: require("@/assets/images/蓬莱阁.jpg"),
          distance: "500km",
          name: "蓬莱阁",
          price: "¥110",
          priceDiscount: "¥120",
          type: "蓬莱阁门票"
        },
        {
          imgSrc: require("@/assets/images/三孔.jpg"),
          distance: "500km",
          name: "三孔",
          price: "¥110",
          priceDiscount: "¥130",
          type: "三孔门票"
        },
        {
          imgSrc: require("@/assets/images/云冈石窟.jpg"),
          distance: "500km",
          name: "云冈石窟",
          price: "¥110",
          priceDiscount: "¥120",
          type: "云冈石窟门票"
        },
        {
          imgSrc: require("@/assets/images/云雾山.jpg"),
          distance: "500km",
          name: "云雾山",
          price: "¥110",
          priceDiscount: "¥120",
          type: "云雾山门票"
        },
        {
          imgSrc: require("@/assets/images/少林寺.jpg"),
          distance: "500km",
          name: "少林寺",
          price: "¥110",
          priceDiscount: "¥120",
          type: "少林寺门票"
        },
        {
          imgSrc: require("@/assets/images/徽州古城.jpg"),
          distance: "500km",
          name: "徽州古城",
          price: "¥110",
          priceDiscount: "¥120",
          type: "徽州古城门票"
        },
        {
          imgSrc: require("@/assets/images/苍岩山.jpg"),
          distance: "500km",
          name: "苍岩山",
          price: "¥110",
          priceDiscount: "¥120",
          type: "苍岩山门票"
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {
    //票列表
    this.$http
      .post(
        "http://core.kachuo.com/app/ewei_shopv2_app.php?i=8&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.ticket.getlist"
      )
      .then(({ data }) => {
        console.log(data);
        this.dataListOne = data.data;
        console.log(this.dataListOne);
      });
  },
  watch: {},
  methods: {
    scan(){
      this.$router.push('/facecheck')
    },
    //跳转购票页面
    buyTickets(index) {
      // var i = 0 ; i < this.dataList.length; i ++ ;
      let a = 0;
      for (let i = 0; i < this.dataList; i++) {
        a + -i;
        return a;
      }
      // console.log(11)
      // console.log(a)
      this.$router.push({
        path: "/ticketsdetails",
        query: {
          type: this.dataList[index + a].type
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
.electronicsTicket-wrap {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
}
.tab-content {
  width: 100%;
  height: 85%;
  overflow: hidden scroll;
  background: #f5f5f5;
}
.tab-content b {
  font-weight: normal;
  display: block;
  width: 100%;
}
.t-content {
  width: 92%;
  height: 110px;
  background: #ffffff;
  margin: 0 auto 15px;
  border-radius: 8px;
}
.t-left {
  width: 66%;
  height: 90px;
  float: left;
  margin: 8px 0 0 4%;
}
.img-wrap {
  height: 90px;
  width: 90px;
  float: left;
}
.img-wrap img {
  width: 100%;
}
.txt-wrap {
  width: 96px;
  height: 101px;
  float: left;
  margin-left: 4%;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.t-one p {
  font-size: 12px;
  color: #222222;
  font-weight: 600;
}
.t-two {
  width: 60px;
  height: 20px;
  background: #b8cdff;
  border-radius: 8px;
  margin: 6px 0 11px;
}
.t-two p {
  color: #ffffff;
  line-height: 20px;
  text-align: center;
  font-size: 12px;
}
.t-three p {
  font-size: 20px;
  color: #ff3939;
  font-weight: 800;
}
.t-right {
  float: right;
  width: 75px;
  height: 30px;
  border-radius: 15px;
  background: #3976ff;
  margin: 38px 4% 0 0;
}
.t-right p {
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  line-height: 30px;
}
.explain-wrap {
  width: 92%;
  height: 200px;
  margin: 0 auto 10px;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}
.face-wrap {
  width: 92%;
  height: 56px;
  margin: 0 auto 10px;
  background: #ffffff;
  border-radius: 8px;
}
.binding-wrap {
  width: 92%;
  height: 225px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}
.explain-one {
  width: 81px;
  height: 14px;
  margin: 15px auto;
}
.explain-one img {
  width: 100%;
  background: none;
}
.text-wrap {
  width: 92%;
  height: auto;
  margin: 0 auto 10px;
}
.text-wrap p {
  font-size: 3.6vw;
  color: #999faa;
  text-align: center;
}
.p-wrap {
  height: 80px;
  width: 88%;
  margin: 0 auto;
}
.add-wrap {
  width: 15px;
  height: 15px;
  margin: 0 0 30px 0;
}
.add-wrap img {
  width: 100%;
  background: none;
}
.p-img-wrap {
  width: 44px;
  height: 44px;
  margin: 0 auto 10px;
}
.p-img-wrap img {
  background: none;
  width: 100%;
}
.f-left {
  width: 81px;
  height: 14px;
  float: left;
  margin: 20px 0 0 4%;
}
.f-left img {
  background: none;
  width: 100%;
}
.f-right {
  /* width: 80px; */
  height: 15px;
  float: right;
  margin: 20px 4% 0 0;
}
.f-right span {
  color: #999faa;
  font-size: 14px;
  float: right;
}
.i-warp {
  float: left;
  margin-top: 2px;
}
.text-bind {
  width: 92%;
  height: auto;
  margin: 0 auto 10px;
}
.text-bind p {
  font-size: 3.6vw;
  color: #999faa;
}
.scann {
  width: 85%;
  height: 44px;
  background: #3976ff;
  box-shadow: 0px 10px 20px 0px rgba(57, 118, 255, 0.5);
  border-radius: 8px;
  margin: 0 auto 15px;
}
.scann p {
  text-align: center;
  line-height: 44px;
  color: #ffffff;
  font-size: 16px;
}
.num {
  width: 85%;
  height: 44px;
  background: #ffffff;
  border: 1px solid rgba(57, 118, 255, 1);
  border-radius: 8px;
  margin: 0 auto;
}
.num p {
  text-align: center;
  line-height: 44px;
  color: #3976ff;
  font-size: 16px;
}
</style>
<style scoped lang="less">
/deep/ .vux-tab-wrap {
  margin-top: 46px;
  margin-bottom: 10px;
}
/deep/ .vux-tab .vux-tab-item {
  font-size: 16px;
  font-weight: bold;
}
/deep/ .scrollable .vux-tab-item {
  flex: 0 0 20%;
}
.flex-demo {
  text-align: center;
  color: #fff;
  //   background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
  width: 60px;
  height: 68px;
}
.flex-demo p {
  font-size: 14px;
  color: #999faa;
}
.vux-x-icon {
  fill: #2ecc33;
}
</style>