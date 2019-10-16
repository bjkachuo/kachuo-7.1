<template>
  <div class="od-wrap">
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
        <p>已取消</p>
      </div>
      <div class="form-wrap">
        <div class="f-one">
          <x-input title="联系人:" disabled v-model="person" class="top"></x-input>
          <x-input title="手机号:" disabled v-model="phone" mask="999 9999 9999"></x-input>
          <x-input title="留言：" disabled v-model="message" class="bottom"></x-input>
        </div>
        <div class="f-one">
          <x-input title="预约时长:" disabled v-model="time" class="top"></x-input>
          <x-input title="游客人数:" disabled v-model="personNum" class="bottom"></x-input>
        </div>
        <div class="f-one">
          <cell title="本单金额:" class="mid">
            <div>
              <span>¥{{this.price}}</span>
            </div>
          </cell>
        </div>
        <div class="f-one">
          <x-input title="订单编号:" disabled v-model="orderNum" class="top"></x-input>
          <x-input title="支付时间:" disabled v-model="payTime"></x-input>
          <x-input title="取消时间:" disabled v-model="cancelTime" class="bottom"></x-input>
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
import { Cell, XInput } from "vux";

export default {
  props: {},
  data() {
    return {
      //联系人
      person: "李先生",
      //电话
      phone: "18309812211",
      //留言
      message: "无",
      //预约时长
      time: "4小时",
      //预约人数
      personNum: "3人",
      //价格
      price: "1200",
      //订单编号
      orderNum: "128389127481",
      //支付时间
      payTime: "2019-08-09 12:42",
      //取消时间
      cancelTime: "2019-08-11 12:52"
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    goback() {
      this.$router.go(-1);
    }
  },
  components: {
    Cell,
    XInput
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
</style>
