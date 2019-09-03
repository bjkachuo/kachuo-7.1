<template>
  <div class="hotelDetails-wrap">
    <div class="banner">
      <div class="goback" @click="goBack">
        <x-icon type="ios-arrow-back" size="20"></x-icon>
      </div>
      <div class="home">
        <img src="../../assets/images/fangzier.png" alt />
      </div>
      <!-- <img
        class="previewer-demo-img"
        :src="this.storeDetails.video_image"
        v-for="(item, index) in this.storeDetails.image"
        @click="show(index)"
        :key="index"
      />-->
      <!-- <div v-transfer-dom>
        <previewer
          :list="this.storeDetails.image"
          ref="previewer"
          :options="options"
          @on-index-change="logIndexChange"
        ></previewer>
      </div>-->
    </div>
    <div class="hotelDetails-title">
      <div style="height: 51px;">
        <h3>7天连锁酒店(滨海路店)</h3>
        <div class="recommend-wrap">
          <p>推荐</p>
        </div>
      </div>
      <div class="score-wrap">
        <div class="house-wrap">
          <div class="house">
            <img src="../../assets/images/fangzi.png" alt />
          </div>
          <div class="characteristic">类型：经济连锁</div>
        </div>
        <div class="card-mid-text-one">
          <p>4分</p>
          <i>
            <rater v-model="data42" active-color="#FF9900" :font-size="10" :margin="0" disabled></rater>
          </i>
          <b>(121)</b>
        </div>
      </div>
      <div class="three-wrap">
        <div class="three-one">
          <div class="img-box">
            <img src="../../assets/images/xignxing.png" alt />
          </div>
          <p>收藏</p>
        </div>
        <div class="three-one">
          <div class="img-box">
            <img src="../../assets/images/xin.png" alt />
          </div>

          <p>31赞</p>
        </div>
        <div class="three-one">
          <div class="img-box">
            <img src="../../assets/images/dashang.png" alt />
          </div>

          <p>31打赏</p>
        </div>
      </div>
    </div>
    <div class="phone-wrap">
      <div class="phone-left">
        <div class="phone-icon-wrap">
          <img src="../../assets/images/电话icon@2x.png" alt />
        </div>
        <p>联系电话:</p>
        <span>(0535)5666900</span>
      </div>
      <div class="phone-right">
        <x-icon type="ios-arrow-right" size="20" class="vux-x-icon-two"></x-icon>
      </div>
    </div>
    <div class="address-wrap">
      <p>山东省蓬莱市海滨路南区巷6号</p>
      <div class="inner-wrap">
        <div class="address-img-wrap">
          <img src="../../assets/images/电话icon@2x(1).png" alt />
        </div>
        <span>地图/导航</span>
      </div>
    </div>
    <div class="inTime-wrap">
      <div class="inTime-wrap-left">
        <div class="house-img-wrap">
          <img src="../../assets/images/lou.png" alt />
        </div>
        <p>入住时间-退房时间</p>
      </div>
      <div class="inTime-wrap-right">
        <p>共1晚</p>
        <x-icon type="ios-arrow-right" size="20" class="vux-x-icon-two"></x-icon>
      </div>
    </div>
    <div class="house-list-wrap">
      <div class="house-list-title">
        <h3>在线订房</h3>
        <div class="list-right">
          <p>筛选</p>
        </div>
      </div>
      <div class="house-list">
        <div class="house-list-left">
          <div class="house-list-left-imgwrap">
            <img src alt />
          </div>
          <div class="house-list-left-text">
            <div class="text-one">
              <p>自主大床房</p>
            </div>
            <div class="text-two">
              <p>不含早 大床 有窗</p>
            </div>
            <div class="text-three">
              <p>不可取消</p>
            </div>
            <div class="text-four">
              <p>￥102</p>
            </div>
          </div>
        </div>
        <div class="house-list-right">
          <p>预订</p>
        </div>
      </div>
      <div class="house-list">
        <div class="house-list-left">
          <div class="house-list-left-imgwrap">
            <img src alt />
          </div>
          <div class="house-list-left-text">
            <div class="text-one">
              <p>自主大床房</p>
            </div>
            <div class="text-two">
              <p>不含早 大床 有窗</p>
            </div>
            <div class="text-three">
              <p>不可取消</p>
            </div>
            <div class="text-four">
              <p>￥102</p>
            </div>
          </div>
        </div>
        <div class="house-list-right">
          <p>预订</p>
        </div>
      </div>
      <div class="house-list">
        <div class="house-list-left">
          <div class="house-list-left-imgwrap">
            <img src alt />
          </div>
          <div class="house-list-left-text">
            <div class="text-one">
              <p>自主大床房</p>
            </div>
            <div class="text-two">
              <p>不含早 大床 有窗</p>
            </div>
            <div class="text-three">
              <p>不可取消</p>
            </div>
            <div class="text-four">
              <p>￥102</p>
            </div>
          </div>
        </div>
        <div class="house-list-right">
          <p>预订</p>
        </div>
      </div>
      <div class="Surplus">
        <p>查看剩余房型</p>
        <x-icon type="ios-arrow-down" size="20" class="vux-x-icon-four"></x-icon>
      </div>
    </div>
  </div>
</template>

<script>
import { Previewer, TransferDom, Rater } from "vux";
export default {
  props: {},
  data() {
    return {
      //星星评分
      data42: 3.5,

      //商家详情
      storeDetails: [],
      //获取到的商家id
      idNum: "",
      options: {
        getThumbBoundsFn(index) {
          // find thumbnail element
          let thumbnail = document.querySelectorAll(".previewer-demo-img")[
            index
          ];
          // get window scroll Y
          let pageYScroll =
            window.pageYOffset || document.documentElement.scrollTop;
          // optionally get horizontal scroll
          // get position of element relative to viewport
          let rect = thumbnail.getBoundingClientRect();
          // w = width
          return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
          // Good guide on how to get element coordinates:
          // http://javascript.info/tutorial/coordinates
        }
      }
    };
  },
  computed: {},
  created() {},
  mounted() {
    //查看传来的id
    console.log(this.$route.query);
    this.idNum = this.$route.query.idNum;

    //获取商家详情！
    this.$http
      .post(
        "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.index.business_info&id=" +
          this.idNum
      )
      .then(({ data }) => {
        console.log(data);
        this.storeDetails = data.data;
        console.log(this.storeDetails);
      });
  },
  watch: {},
  methods: {
    //返回
    goBack() {
      this.$router.go(-1);
    },
    // //切换图
    // logIndexChange(arg) {
    //   console.log(arg);
    // },
    show(index) {
      this.$refs.previewer.show(index);
    }
  },
  directives: {
    TransferDom
  },
  components: {
    Previewer,
    Rater
  }
};
</script>

<style scoped lang="css">
.hotelDetails-wrap {
  background: #f5f5f5ff;
  height: 100%;
  width: 100%;
  overflow: hidden scroll;
}
.banner {
  width: 100%;
  height: 234px;
  background: darkcyan;
  margin-bottom: 5px;
  position: relative;
}
.banner img {
  width: 100%;
  background: none;
}
.goback {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 2%;
  left: 4%;
}
.home {
  width: 35px;
  height: 35px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  position: absolute;
  top: 2%;
  right: 4%;
}
.home img {
  width: 20px;
  height: 20px;
  margin: 6px 0 0 8px;
}
.hotelDetails-title {
  width: 100%;
  height: 158px;
  background: #ffffffff;
  margin-bottom: 10px;
}
.hotelDetails-title h3 {
  display: block;
  float: left;
  color: #222222ff;
  font-size: 24px;
  font-weight: 800;
  margin: 3px 3% 0 3%;
}
.recommend-wrap {
  float: left;
  width: 37px;
  height: 19px;
  margin-top: 20px;
  background: linear-gradient(
    90deg,
    rgba(255, 202, 0, 1) 0%,
    rgba(244, 224, 43, 1) 100%
  );
  border-radius: 8px;
}
.recommend-wrap p {
  color: #222222ff;
  font-size: 12px;
  font-weight: 400;
  text-align: center;
}
.score-wrap {
  height: 34px;
  width: 50%;
  margin-left: 4%;
  margin-bottom: 4px;
  /* background: darkcyan; */
}
.house-wrap {
  width: 100%;
  height: 18px;
  display: block;
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
}
.house-wrap .characteristic {
  float: left;
  line-height: 22px;
  text-indent: 4%;
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
.three-wrap {
  height: 44px;
  width: 100%;
  margin-top: 14px;
}
.three-one {
  height: 44px;
  width: 45px;
  /* background: darkkhaki; */
  float: right;
  margin-right: 12px;
}
.img-box {
  width: 22px;
  height: 22px;
  margin: 0 auto 4px;
}
.img-box img {
  background: none;
  width: 100%;
}

.three-one p {
  text-align: center;
  font-size: 14px;
  color: #666666ff;
}
.phone-wrap {
  width: 100%;
  height: 55px;
  border-radius: 8px;
  margin-bottom: 10px;
  background: #ffffffff;
}
.phone-left {
  width: 70%;
  float: left;
  height: 55px;
}
.phone-left p {
  float: left;
  display: block;
  font-size: 16px;
  color: #222222ff;
  line-height: 55px;
  margin-right: 5%;
}
.phone-left span {
  float: left;
  display: block;
  font-size: 16px;
  color: #222222ff;
  line-height: 55px;
}
.phone-right {
  /* width: 20%; */
  float: right;
  height: 55px;
}
.phone-icon-wrap {
  width: 15px;
  height: 15px;
  float: left;
  margin: 14px 2% 0 6%;
}
.phone-icon-wrap img {
  background: none;
  width: 100%;
}
.address-wrap {
  width: 100%;
  height: 55px;
  border-radius: 8px;
  margin-bottom: 10px;
  background: #ffffffff;
}
.address-wrap p {
  display: block;
  float: left;
  color: #666666ff;
  font-size: 15px;
  line-height: 55px;
  margin-left: 4%;
  width: 65%;
  height: 55px;
}
.address-wrap .inner-wrap {
  float: right;
  margin: 15px 3% 0 0;
}
.address-img-wrap {
  float: left;
  width: 15px;
  height: 15px;
}
.inner-wrap span {
  display: block;
  float: right;
  font-size: 16px;
  color: #3976ffff;
}
.inTime-wrap {
  width: 100%;
  height: 55px;
  border-radius: 8px;
  margin-bottom: 10px;
  background: #ffffffff;
}
.inTime-wrap-left {
  height: 55px;
  width: 60%;
  float: left;
  /* background: fuchsia; */
}
.house-img-wrap {
  width: 15px;
  height: 15px;
  margin: 13px 4% 0 7%;
  float: left;
}
.house-img-wrap img {
  width: 100%;
  background: none;
}
.inTime-wrap-left p {
  display: block;
  float: left;
  font-size: 16px;
  color: #222222ff;
  margin-top: 13px;
}
.inTime-wrap-right {
  height: 55px;
  width: 62px;
  float: right;

  color: #3976ffff;
  font-size: 16px;
}
.inTime-wrap-right p {
  float: left;
  display: block;
  margin-top: 12px;
}
.house-list-wrap {
  width: 100%;
  background: #ffffff;
  border-radius: 8px;
}
.house-list-title {
  width: 100%;
  height: 55px;
}
.house-list-title h3 {
  color: #222222ff;
  font-size: 18px;
  font-weight: 800;
  float: left;
  margin: 11px 0 0 4%;
  display: block;
}
.list-right {
  width: 65px;
  height: 55px;
  float: right;
}
.list-right p {
  color: #222222ff;
  font-size: 14px;
  display: block;
  float: left;
  margin-top: 18px;
  margin-left: 17%;
}
.house-list {
  width: 92%;
  height: 75px;
  margin: 0 auto 30px;
  /* background: navy; */
}
.house-list-left {
  width: 50%;
  height: 75px;
  float: left;
  width: 70%; /* background: darkorange; */
}
.house-list-left-imgwrap {
  width: 75px;
  height: 75px;
  float: left;
  margin-right: 13px;
}
.house-list-left-imgwrap img {
  width: 100%;
}
.house-list-left-text {
  height: 75px;
  width: 110px;
  float: left;
}
.text-one p {
  font-size: 14px;
  color: #222222ff;
  font-weight: bold;
}
.text-two p {
  color: #666666ff;
  font-size: 12px;
  font-weight: normal;
}
.text-three p {
  color: #666666ff;
  font-size: 12px;
  font-weight: normal;
}
.text-four p {
  color: #ff3939ff;
  font-size: 12px;
}

.house-list-right {
  width: 70px;
  height: 30px;
  float: right;
  background: #3976ffff;
  margin-top: 8px;
  border-radius: 8px;
}
.house-list-right p {
  font-size: 16px;
  color: #ffffffff;
  font-weight: 800;
  text-align: center;
  line-height: 30px;
}
.Surplus {
  height: 55px;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
  background: #ffffffff;
  padding-top: 20px;
}
.Surplus p {
  display: block;
  float: left;
  overflow: hidden;
  margin-left: 4%;
}
</style>
<style lang="less" scoped>
.vux-x-icon {
  fill: #ffffff;
  margin: 7px 0 0 5px;
}
.vux-x-icon-two {
  fill: #222222ff;
  margin: 15px 0 0 0;
}
.vux-x-icon-three {
  fill: #222222ff;
  display: block;
  float: left;
  margin: 17px 0 0 0px;
}
.vux-x-icon-four {
  fill: #222222ff;
  display: block;
  margin-top: 2px;
}
</style>
