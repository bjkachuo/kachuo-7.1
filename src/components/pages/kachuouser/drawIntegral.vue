<template>
  <div class="draw-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="content">
      <div class="text-wrap">
        <p>账户余额将提现到微信</p>
      </div>
      <div class="input-wrap">
        <x-input title="¥" type="number" show-clear></x-input>
      </div>
      <div class="line"></div>
      <div class="bottom">
        <div class="left">
          <p>账户余额：¥{{this.iNum}}</p>
        </div>
        <div class="right">
          <p>提现记录</p>
        </div>
      </div>
    </div>
    <div class="btn">
      <p>立即提现</p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { XInput } from "vux";
import { getUserInfo } from "@/servers/api";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "积分提现",
        showLeftBack: true,
        showRightMore: false
      },
      iNum: ""
    };
  },
  computed: {},
  created() {},
  mounted() {
    //从用户信息中提取积分余额
    getUserInfo({}).then(res => {
      this.$store.commit("setUserLoginInfo", res.data);
      this.GLOBAL.setSession("userLoginInfo", res.data);
      console.log(res.data);
      this.iNum = res.data.credit1;
    });
  },
  watch: {},
  methods: {},
  components: {
    Header,
    XInput
  }
};
</script>

<style scoped lang="css">
.draw-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden scroll;
  background: #f5f5f5;
}
.content {
  width: 92%;
  height: 150px;
  background: #ffffff;
  margin: 56px auto 30px;
  border-radius: 8px;
  overflow: hidden;
}
.text-wrap {
  margin: 20px 0 12px 20.5px;
}
.text-wrap p {
  font-size: 14px;
  color: #666666;
}
.input-wrap {
  margin: 0 0 0px 20px;
  height: 45px;
}
.line {
  width: 92%;
  height: 1px;
  margin: 0 auto 17px;
  background: #e5e5e5;
}
.bottom {
  padding: 0 15px;
}
.left {
  float: left;
  font-size: 14px;
  color: #666666;
}
.right {
  float: right;
  font-size: 14px;
  color: #3976ff;
}
.btn {
  width: 92%;
  height: 50px;
  background: #3976ff;
  margin: 0 auto;
  border-radius: 8px;
}
.btn p {
  text-align: center;
  line-height: 50px;
  color: #ffffff;
  font-size: 16px;
}
</style>
<style scoped lang="less">
/deep/ .weui-cell {
  padding: 0px 15px;
}
/deep/ .weui-cell__hd {
  font-size: 28px;
  width: 18px;
}
/deep/ .weui-cell__primary {
  font-size: 28px;
  margin-left: 20px;
}
</style>
