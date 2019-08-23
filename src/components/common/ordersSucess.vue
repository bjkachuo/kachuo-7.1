<template>
  <div class="eatDrinkOrdersSucess-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="eatDrinkOrdersSucess-content">
      <div class="tip">
        <p>当前订单获得2点积分奖励~</p>
        <span>
          积分详情
          <div class="icon-wrap">
            <x-icon type="ios-arrow-right" size="15" class="cell-x-icon"></x-icon>
          </div>
        </span>
      </div>
      <div class="success-msg">
        <div class="success-icon-wrap">
          <icon type="success" is-msg></icon>
          <!-- <x-icon type="ios-checkmark-outline" size="30"></x-icon> -->

          <p>支付成功</p>
        </div>
        <div class="result">
          <span>预计14：39前，短信告知您预订结果</span>
        </div>
      </div>
      <div class="Order">
        <cell :title="this.Total"></cell>
        <cell-form-preview :list="list"></cell-form-preview>
      </div>
      <div class="maptelephone">
        <div class="mtcontent">
          <div class="mt-img-wrap">
            <img src="../../assets/images/定位icon@2x.png" alt />
          </div>
          <p>地图/导航</p>
        </div>
        <div class="midLine"></div>
        <div class="mtcontent">
          <div class="mt-img-wrap">
            <img src="../../assets/images/电话icon@2x.png" alt />
          </div>
          <p>联系商家</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Icon, CellFormPreview, Cell } from "vux";
export default {
  props: {},
  data() {
    return {
      //头部信息设置
      TitleObjData: {
        titleContent: "订单详情",
        showLeftBack: true,
        showRightMore: false
      },
      Total: "订单详情",
      //订单信息
      list: [
        {
          label: "订单编号：",
          value: "1211093871"
        },
        {
          label: "下单时间：",
          value: "2019-08-11 20:16:51"
        },
        {
          label: "下单手机：",
          value: "178 1611 5091"
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    Header,
    Icon,
    CellFormPreview,
    Cell
  }
};
</script>

<style scoped lang="css">
.eatDrinkOrdersSucess-wrap {
  width: 100%;
  height: 100%;
  background: #f5f5f5ff;
}
.eatDrinkOrdersSucess-content {
  height: 94%;
  margin-top: 46px;
  /* border-top: 1px solid #eeeeee; */
  background: #f5f5f5;
  overflow: hidden scroll;
}
.tip {
  width: 100%;
  height: 30px;
  background: #fff7efff;
  margin-bottom: 10px;
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.08);
}
.tip p {
  display: block;
  float: left;
  font-size: 14px;
  color: #ffa24cff;
  font-family: PingFangSC-Regular;
  line-height: 30px;
  margin-left: 8.3%;
}
.tip span {
  display: block;
  float: right;
  font-size: 14px;
  color: #ffa24cff;
  font-family: PingFangSC-Regular;
  line-height: 30px;
  margin-right: 8.3%;
}
.icon-wrap {
  float: right;
  margin-top: 3px;
}
.cell-x-icon {
  fill: #ffa24cff;
}
.success-msg {
  width: 92%;
  height: 101px;
  margin: 0 auto 10px;
  background: #ffffffff;
  overflow: hidden;
  border-radius: 8px;
}
.success-icon-wrap {
  height: 24px;
  margin: 25px auto 15px;
  width: 45%;
}
.success-icon-wrap p {
  display: block;
  float: left;
  margin-left: 5.6%;
  color: #222222ff;
  font-weight: 800;
  font-family: PingFangSC-Bold;
  font-size: 24px;
}
.success-msg span {
  display: block;
  /* width: 72%; */
  /* margin: 0 auto; */
  font-size: 14px;
  color: #222222ff;
  font-weight: 300;
  text-align: center;
  font-family: PingFangSC-Medium;
}
.Order {
  width: 92%;
  height: 170px;
  margin: 0 auto 10px;
  background: #ffffffff;
  border-radius: 8px;
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.06);
}

.maptelephone {
  width: 92%;
  height: 55px;
  margin: 0 auto;
  border-radius: 8px;
  background: #ffffffff;
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.08);
  overflow: hidden;
}
.mtcontent {
  width: 27%;
  height: 100%;
  /* background: darkcyan; */
  height: 25px;
  margin: 16px 0 0 41px;
  float: left;
}
.mt-img-wrap {
  width: 15px;
  height: 15px;
  float: left;
}
.mt-img-wrap img {
  background: none;
  width: 100%;
}
.mtcontent p {
  display: block;
  float: left;
  font-size: 16px;
  color: #222222ff;
  font-weight: 400;
  margin-left: 6.4%;
}
.midLine {
  width: 1px;
  height: 30px;
  background: #e5e5e5ff;
  float: left;
  margin: 13px 0 0 13%;
}
</style>
<style lang="less" scoped>
/deep/ .weui-icon_msg {
  font-size: 24px;
  float: left;
  margin-top: 7px;
}
/deep/ .vux-label {
  font-size: 16px;
  color: #222222ff;
  font-weight: 800;
}
/deep/ .weui-form-preview__label {
  font-size: 16px;
  color: #666666ff;
  font-weight: 400;
}
/deep/ .weui-form-preview__value {
  color: #222222ff;
  font-size: 16px;
  font-weight: 400;
}
</style>
