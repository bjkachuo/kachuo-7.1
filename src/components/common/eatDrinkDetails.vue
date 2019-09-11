<template>
  <div class="store-details-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <!-- <scroller
      lock-x
      height="-10"
      @on-scroll-bottom="onScrollBottom"
      ref="scrollerBottom"
      :scroll-bottom-offst="-10"
    >-->
    <div class="store-details-content">
      <div class="video-wrap">
        <img :src="this.storeDetails.video_image" alt />
        <div class="card">
          <div class="card-title">
            <p>{{this.storeDetails.name}}</p>
          </div>
          <div class="card-mid">
            <div class="card-mid-img-wrap" @click="showDialogStyle = !showDialogStyle">
              <img :src="this.storeDetails.video_image" alt />
              <div class="play-img">
                <img src="../../assets/images/playv.png" alt />
              </div>
            </div>
            <x-dialog
              v-model="showDialogStyle"
              hide-on-blur
              :dialog-style="{'max-width': '100%', width: '100%', height: '50%', 'background-color': 'transparent'}"
            >
              <p style="color:#fff;text-align:center;" @click="showDialogStyle = false">
                <video
                  :src="this.storeDetails.video"
                  :poster="this.storeDetails.video_image"
                  controlslist="nodownload"
                  preload="none"
                  controls="controls"
                  x5-video-orientation="landscape"
                ></video>
                <!-- <span class="vux-close" @click="showToast=false"></span> -->
              </p>
            </x-dialog>
            <div class="card-mid-text-wrap">
              <div class="card-mid-text-one">
                <p>{{this.storeDetails.score}}</p>
                <i>
                  <rater
                    v-model="this.starNum"
                    active-color="#ffc800"
                    :font-size="10"
                    :margin="0"
                    disabled
                  ></rater>
                </i>
                <b>(121)</b>
              </div>
              <span>人均31元</span>
              <div class="house-wrap">
                <div class="house">
                  <img src="../../assets/images/fangzi.png" alt />
                </div>
                <div class="characteristic">特色：地方菜、面馆</div>
              </div>
            </div>
          </div>
        </div>
        <!-- <video
            :src="this.storeDetails.video"
            :poster="this.storeDetails.video_image"
            controls="controls"
            @ended="test()"
        ></video>-->
      </div>
      <div class="tab-wrap">
        <ul class="tab-tilte">
          <li @click="cur=0" :class="{active:cur==0}">点餐</li>
          <li @click="cur=1" :class="{active:cur==1}">商家</li>
        </ul>
        <div class="tab-content">
          <b v-show="cur==0">
            <div class="dc-panel">
              <div class="dc-navbar">
                <div
                  v-for="(tab ,index) in tabs"
                  :class="{cur:iscur==index}"
                  @click="iscur=index,tabChange('list' + (index + 1))"
                  :key="index"
                >{{tab.name}}</div>
              </div>
              <div class="dc-cells">
                <component v-bind:is="tabView"></component>
              </div>
            </div>
          </b>
          <b v-show="cur==1">
            <div class="line-a">
              <cell title="联系方式:" is-link class="store-msg">
                <img
                  slot="icon"
                  width="20"
                  style="display:block;margin-right:5px;"
                  src="../../assets/images/电话icon@2x.png"
                />
                <span>
                  <a :href="'tel:'+ this.storeDetails.phone">{{this.storeDetails.phone}}</a>
                </span>
              </cell>
              <cell title="商家地址:" class="store-msg">
                <img
                  slot="icon"
                  width="20"
                  style="display:block;margin-right:5px;"
                  src="../../assets/images/定位icon@2x.png"
                />
                <span>{{this.storeDetails.address}}</span>
              </cell>
            </div>
            <div class="line-b">
              <cell title="营业资质" @click.native="fications" class="store-msg">
                <img
                  slot="icon"
                  width="20"
                  style="display:block;margin-right:5px;"
                  src="../../assets/images/资质icon@2x.png"
                />
                <!-- <span>山东省蓬莱市海滨路南区巷6号</span> -->
              </cell>
            </div>
          </b>
        </div>
      </div>
      <!-- <div class="storeIntroduce-wrap">
        <div class="Introduce-title">
          <p>{{this.storeDetails.name}}</p>
        </div>
        <div class="star-price">
          <div class="star-wrap">
            <el-rate v-model="value1" disabled text-color="#ff9900"></el-rate>
          </div>
          <dir class="price-wrap">
            <p>{{this.storeDetails.price}}¥/人</p>
          </dir>
        </div>
        <div class="introduce-wrap">
          <p>介绍：{{this.storeDetails.content}}</p>
        </div>
      </div>-->
      <!-- <div class="characteristic-wrap">
        <div class="characteristic-title">
          <p>商家特色</p>
        </div>
        <ul class="characteristic-list">
          <li>
            <p>{{this.storeDetails.product}}</p>
          </li>
        </ul>
      </div>-->
      <!-- <div class="contact-address-wrap">
        <div class="contact">
          <div class="contact-left">
            <p>联系方式</p>
            <p>
              <a :href="'tel:'+ this.storeDetails.phone">{{this.storeDetails.phone}}</a>
            </p>
          </div>
          <div class="contact-right">
            <a :href="'tel:'+ this.storeDetails.phone">
              <i class="el-icon-phone-outline"></i>
            </a>
          </div>
        </div>
        <div class="line-one"></div>
        <div class="adress-wrap">
          <div class="adress-title">
            <p>详细地址</p>
          </div>
          <div class="adress-details">
            <a
              :href="'https://uri.amap.com/marker?position='+this.storeDetails.latitude+','+this.storeDetails.longitude+'&name='+this.storeDetails.address"
            >
              <p>{{this.storeDetails.address}}</p>
            </a>
          </div>
        </div>
        <div></div>
      </div>-->
      <!-- <div class="evaluate-wrap">
        <div class="evaluate-head">
          <div class="evaluate-title">
            <span>游客点评</span>
          </div>
          <div class="evaluate-button">
            <el-button size="mini" round>写评价</el-button>
          </div>
        </div>
        <div class="big-star">
          <div class="block">
            <el-rate v-model="value1" disabled></el-rate>
          </div>
          <div class="line-two"></div>
        </div>
        <ul class="user-evaluate-wrap">
          <li v-for="(item,index) in commentList" :key="index">
            <div class="row-one">
              <div class="head-img">
                <img :src="item.avatar" alt />
              </div>
              <div class="name-star-wrap">
                <span class="name">{{item.nickname}}</span>
                <span>
                  <el-rate v-model="item.score" disabled></el-rate>
                </span>
              </div>
              <div class="point-time">
                <div>
                  <i class="el-icon-more"></i>
                </div>
                <div class="time">{{item.date}}</div>
              </div>
            </div>
            <div class="row-two">
              <p>{{item.content}}</p>
            </div>
            <div class="line-two"></div>
          </li>
          <load-more tip="loading"></load-more>
        </ul>
      </div>-->
    </div>
    <div class="bottom">
      <div class="bottom-inner-left">
        <p>去结算</p>
        <span>￥16.5</span>
      </div>
      <div class="bottom-inner-right" @click="goEatOrder">
        <p>支付</p>
      </div>
    </div>

    <!-- </scroller> -->
  </div>
</template>
<script>
import Header from "@/components/common/Header";
import { Scroller,LoadMore,Rater,Cell, XDialog,XButton,XInput,Group,Actionsheet,} from "vux";
import list1 from "@/components/common/goods/list1.vue";
import list2 from "@/components/common/goods/list2.vue";
import list3 from "@/components/common/goods/list3.vue";
import list4 from "@/components/common/goods/list4.vue";
import list5 from "@/components/common/goods/list5.vue";

export default {
  data() {
    return {
      showDialogStyle: false,
      tabView: "list1",
      tabs: [
        { name: "锅底" },
        { name: "肉串类" },
        { name: "荤菜类" },
        { name: "素菜类" },
        { name: "盘类" },
        { name: "主食类" },
        { name: "蘸料" }
      ],
      iscur: 0,
      cur: 0, //默认选中第一个tab
      //星星评分
      starNum:'0',
      //获取到的商家id
      idNum: "",
      //商家详情数组
      storeDetails: [],
      //评论列表数组
      commentList: [],
      //上拉刷新
      page: "1",

      //头部信息设置
      TitleObjData: {
        titleContent: "详情",
        showLeftBack: true,
        showRightMore: false
      },
      //星星的评级1-5
      value: 5,
      //大星星
      value1: 4.6
      //单用户评分
      // value2: null
    };
  },
  components: {
    Header,
    Scroller,
    LoadMore,
    Rater,
    Cell,
    XInput,
    XButton,
    Group,
    Rater,
    Actionsheet,
    list1,
    list2,
    list3,
    list4,
    list5,
    XDialog
  },
  created() {},
  methods: {
    tabChange: function(tab) {
      this.tabView = tab;
    },
    //去吃喝订单页
    goEatOrder() {
      this.$router.push("/eatDrinkOrders");
    },
    //跳转资质页面
    fications() {
      this.$router.push("/Qualifications");
    }
  },
  mounted() {
    //获取列表页传来的id
    console.log(this.$route.query.idNum);
    this.idNum = this.$route.query.idNum;
    // console.log(this.idNum);
    //获取商家详情！
    this.$http
      .post(
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.index.business_info&id=" +
          this.idNum
      )
      .then(({ data }) => {
        // console.log(data.data);
        this.storeDetails = data.data;
        console.log(this.storeDetails);

        this.starNum =  data.data.score -0;
        console.log(this.starNum);
      });
  }
};
</script>
<style lang='css' scoped>
a {
  text-decoration: none;
  color: #111111;
}
li {
  list-style: none;
}
i {
  font-style: normal;
}
b {
  font-weight: normal;
}
.play-img {
  width: 30px;
  height: 30px;
  position: absolute;
  top: 25%;
  left: 30%;
}
.play-img img {
  width: 100%;
  background: none;
}
.store-details-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #f5f5f5;
  position: relative;
}
.store-details-content {
  /* width: 375px; */
  /* height: 635px; */
  /* margin-top: 46px; */
  overflow: hidden;
  height: 100%;
  overflow-y: scroll;
}
.video-wrap {
  /* width: 375px; */
  height: 200px;
  position: relative;
}
.video-wrap img {
  width: 100%;
  background: none;
  filter: blur(4px);
}
.card {
  width: 92%;
  height: 160px;
  background: rgba(255, 255, 255);
  border-radius: 8px;
  position: absolute;
  top: 41%;
  left: 4%;
  box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.1);
}
.card-title p {
  font-size: 20px;
  font-weight: 800;
  color: #222222ff;
  margin: 6px 0 15px 3%;
}
.card-mid {
  width: 100%;
  height: 58px;
  margin-bottom: 15px;
}
.card-mid-img-wrap {
  float: left;
  width: 23.2%;
  height: 58px;
  margin-left: 4.3%;
  margin: 0 3% 0 4.3%;
  position: relative;
}
.card-mid-img-wrap img {
  background: none;
  width: 100%;
  filter: blur(0px);
}
.card-mid-text-wrap {
  float: left;
  height: 50px;
  float: left;
  height: 50px;
  width: 48%;
}
.card-mid-text-one {
  height: 16px;
  width: 100%;
}
.card-mid-text-one p {
  font-size: 12px;
  color: #222222ff;
  font-weight: 800;
  display: block;
  float: left;
}
.card-mid-text-one i {
  display: block;
  float: left;
  margin: 0 3% 0 2%;
}
.card-mid-text-one b {
  display: block;
  float: left;
  color: #999999ff;
  font-size: 12px;
}
.card-mid-text-wrap span {
  font-size: 12px;
  color: #222222ff;
  width: 60%;
  display: block;
}
.house-wrap {
  width: 100%;
  height: 25px;
  display: block;
  /* width: 140px; */
  /* height: 25px; */
  /* background: rgba(245, 245, 245, 1); */
  font-size: 12px;
  color: #666666ff;
  font-weight: normal;
  font-family: PingFangSC-Medium;
  text-align: center;
  /* line-height: 25px; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* border-radius: 8px; */
}
.house-wrap .house {
  width: 13px;
  height: 12px;
  float: left;
}
.house-wrap .house img {
  background: none;
  width: 100%;
  filter: blur(0px);
}
.house-wrap .characteristic {
  float: left;
  line-height: 22px;
  text-indent: 4%;
}
.tab-wrap {
  width: 100%;
  height: 100%;
  /* background: olivedrab; */
  margin-top: 65px;
}

ul li {
  margin: 0;
  padding: 0;
  list-style: none;
}
.tab-tilte {
  width: 90%;
}
.tab-tilte li {
  float: left;
  /* width: 25%; */
  padding: 10px 0;
  margin-left: 12%;
  font-size: 20px;
  text-align: center;
  color: #666666ff;
  font-weight: 300;
}
/* 点击对应的标题添加对应的背景颜色 */
.tab-tilte .active {
  color: #222222ff;
  font-weight: bold;
  height: 40px;
  border-bottom: 8px solid #ccdcffff;
}
.tab-content {
  clear: both;
}
.tab-content b {
  /* float: left; */
  display: block;
  width: 100%;
  /* line-height: 100px;
  text-align: center; */
}
.line-a {
  /* height: 110px; */
  width: 100%;
  background: rgba(255, 255, 255);
  margin-bottom: 10px;
  border-radius: 8px;
}
.line-b {
  /* height: 55px; */
  width: 100%;
  background: rgba(255, 255, 255);
  border-radius: 8px;
}

.bottom {
  height: 60px;
  width: 100%;
  /* background: forestgreen; */
  position: absolute;
  bottom: 0%;
  left: 0%;
  z-index: 100;
  box-shadow: 0px -10px 20px 0px rgba(0, 101, 255, 0.16);
}
.bottom-inner-left {
  width: 70%;
  height: 60px;
  background: rgba(255, 255, 255);
  float: left;
}
.bottom-inner-left p {
  float: left;
  font-size: 16px;
  color: #222222ff;
  font-weight: 400;
  font-family: PingFangSC-Medium;
  margin-left: 45%;
  line-height: 60px;
}
.bottom-inner-left span {
  float: left;
  color: #222222ff;
  font-size: 24px;
  font-family: PingFangSC-Heavy;
  font-weight: 800;
  line-height: 60px;
}
.bottom-inner-right {
  width: 30%;
  height: 60px;
  background: #3976ff;
  float: left;
}
.bottom-inner-right p {
  text-align: center;
  color: rgba(255, 255, 255);
  font-size: 16px;
  line-height: 60px;
  font-weight: 800;
  font-family: PingFangSC-Heavy;
}

video {
  object-fit: fill;
  width: 100%;
  height: 100%;
  margin-top: 40%;
}
.storeIntroduce-wrap {
  /* width: 375px; */
  height: 200px;
  overflow: hidden;
  background: #ffffff;
  margin-bottom: 10px;
}
.Introduce-title {
  /* width: 375px; */
  height: 20px;
  margin-top: 20px;
}
.Introduce-title p {
  font-size: 20px;
  line-height: 20px;
  text-indent: 15px;
}
.star-price {
  /* width: 375px; */
  height: 18px;
  margin: 10px 0 20px 0;
}
.star-wrap {
  width: 80px;
  height: 15px;
  float: left;
  margin: 0px 12px 0 15px;
}
.price-wrap {
  width: 62px;
  height: 14px;
  float: left;
}
.price-wrap p {
  line-height: 14px;
  font-size: 14px;
}
.introduce-wrap {
  /* width: 340px; */
  height: 87px;
  margin-left: 15px;
}
.introduce-wrap p {
  font-size: 14px;
}
.characteristic-wrap {
  /* width: 375px; */
  height: 80px;
  overflow: hidden;
  background: #ffffff;
  margin-bottom: 10px;
}
.characteristic-title {
  height: 14px;
  margin: 15px 0 12px 15px;
}
.characteristic-title p {
  font-size: 14px;
  color: #111111;
}
.characteristic-list {
  height: 22px;
}
.characteristic-list li:first-child {
  margin-left: 15px;
}
.characteristic-list li {
  display: block;
  height: 22px;
  float: left;
  margin-right: 10px;
  background: #f5f5f5;
  border-radius: 6%;
}
.characteristic-list li p {
  margin: 6px 13px;
  font-size: 11px;
  line-height: 12px;
}
.contact-address-wrap {
  /* width: 375px; */
  height: 112px;
  background: #ffffff;
  margin-bottom: 15px;
}
.contact {
  /* width: 375px; */
  height: 56px;
  overflow: hidden;
}
.contact-left {
  width: 80%;
  height: 20px;
  margin: 18px 0 0 15px;
  border-right: 1px solid #e5e5e5;
  float: left;
}
.contact-left p:first-child {
  margin-right: 16px;
}
.contact-left p {
  float: left;
  font-size: 14px;
  line-height: 20px;
}
.line-one {
  width: 360px;
  height: 1px;
  margin-left: 15px;
  border-bottom: 1px solid #e5e5e5;
}
.contact-right {
  height: 20px;
  float: right;
  margin-right: 30px;
}
.contact-right i {
  font-size: 14px;
  line-height: 52px;
}
.adress-wrap {
  width: 375px;
  height: 56px;
}
.adress-title {
  width: 64px;
  margin-left: 15px;
  float: left;
  margin-top: 10px;
}
.adress-title p {
  font-size: 14px;
  color: #111111;
}
.adress-details {
  width: 272px;
  float: left;
  margin-left: 14px;
  margin-top: 10px;
}
.adress-details p {
  color: #666666;
  font-size: 14px;
}
.evaluate-wrap {
  /* width: 375px; */
  overflow: hidden;
  background: #ffffff;
}
.evaluate-head {
  height: 45px;
  /* width: 375px; */
  border-bottom: 1px solid #e5e5e5;
}
.evaluate-title {
  width: 80px;
  float: left;
  margin: 8px 0px 0 15px;
}
.evaluate-head span {
  font-size: 16px;
  color: #111111;
}
.evaluate-button {
  width: 80px;
  float: right;
  margin-right: 15px;
}
.el-button {
  height: 25px;
  width: 80px;
  color: #ffffff;
  background: #ff6d1b;
  border: none;
  font-size: 12px;
  margin-top: 8px;
}
.big-star {
  height: 58px;
  /* width: 375px; */
  overflow: hidden;
}
.block {
  width: 165px;
  height: 25px;
  margin: 15px auto;
  text-align: center;
}
.line-two {
  width: 345px;
  height: 1px;
  border-bottom: 1px solid #e5e5e5;
  margin-left: 15px;
}
.user-evaluate-warp {
  width: 375px;
}
.user-evaluate-wrap li {
  /* width: 375px; */
  /* height: 90px; */
  display: block;
}
.user-evaluate-wrap li .line-two {
  margin-top: 0px;
}
.row-one {
  /* width: 375px; */
  height: 50px;
}
.head-img {
  width: 35px;
  height: 35px;
  float: left;
  margin: 10px 0 0 15px;
}
.head-img img {
  border-radius: 50%;
}
.name-star-wrap {
  /* width: 88px; */
  height: 35px;
  float: left;
  margin: 13px 0 0 11px;
}
.name-star-wrap span:first-child {
  font-size: 14px;
  color: #333333;
  margin-bottom: 5px;
}
.point-time {
  width: 76px;
  height: 48px;
  float: right;
  margin: 10px 15px 0 0;
}
.el-icon-more {
  color: #999999;
  margin-left: 48px;
}
.time {
  font-size: 10px;
  color: #999999;
}
.row-two {
  /* width: 240px; */
  height: 40px;
  margin: 10px 0 0px 60px;
}
.row-two p {
  font-size: 14px;
  color: #333333;
}
.dc-navbar {
  position: absolute;
  left: 10px;
  top: 0;
  width: 80px;
  text-align: center;
  box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.06);
  border-radius: 8px;
  background-color: #ffffff;
  overflow: hidden;
}
.dc-navbar div {
  height: 50px;
  line-height: 50px;
  font-size: 14px;
}
.dc-navbar .cur {
  background-color: #ccdcff;
  font-weight: bold;
}
.dc-panel {
  position: relative;
  min-height: 440px;
  padding: 0 10px 10px 100px;
}
.order-pic {
  border-radius: 4px;
  display: block;
  width: 80px;
  height: 50px;
  margin-right: 10px;
}
</style>
<style lang="less" scoped>
.el-rate__icon {
  font-size: 14px;
  margin-right: 0px;
  /* line-height: 1px; */
}
.block .el-rate__icon {
  font-size: 28px;
}
/* .el-icon-phone-outline{
  font-size: 14px;
  line-height: 20px;

} */
/deep/ .vux-header {
  background: rgba(90, 90, 54, 0);
}
/deep/ .vux-header .vux-header-left .vux-header-back {
  color: #ffffff;
}
/deep/ .vux-header .vux-header-title {
  color: #ffffff;
}
/deep/ .vux-header .vux-header-left .left-arrow:before {
  border: solid white;
  border-width: 1px 0 0 1px;
}
/deep/ .vux-rater {
  display: block;
}
/deep/ .store-msg img {
  background: none;
  width: 12px;
  height: 12px;
}
/deep/ .vux-cell-primary {
  // flex: none;
  // -webkit-box-flex: none;
  // -webkit-flex: none;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  // margin-right: 5%;
}
/deep/ .weui-cell {
  // height: 50%;
}
/deep/ .weui-cell__ft {
  font-size: 16px;
  color: #222222ff;
}
/deep/ .vux-label {
  display: inline-block;
  word-wrap: break-word;
  word-break: break-all;
  font-size: 16px;
  color: #222222ff;
}
</style>
