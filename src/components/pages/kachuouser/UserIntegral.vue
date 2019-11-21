<template>
  <div class="user-interal-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <div class="user-interal-content-wrap" :style="consty">
      <!-- <div class="user-interal-desc">
        <p class="tip">当前积分</p>
        <p class="num">
          <span style="position:relative;top:-20px">{{userInfo.credit1}}</span>
        </p>
      </div>-->
      <!-- <CellDivider :cellList="cellListTools" class="user-interal-wrap-tools-wrap"></CellDivider> -->
      <div class="card">
        <div class="txt">
          <p>当前积分</p>
        </div>
        <div class="num">
          <p>{{this.iNum}}</p>
        </div>
        <div class="lineOne"></div>
        <div class="bottom">
          <div class="b-one" @click="draw">
            <p>积分提现</p>
          </div>
          <div class="line-two"></div>
          <div class="b-two">
            <p @click="goChong">积分充值</p>
          </div>
        </div>
      </div>
      <div class="bot">
        <div style="margin:0 auto;width: 124px;">
          <div class="bot-one">
            <p>积分规则</p>
          </div>
          <div class="bot-two"></div>
          <div class="bot-thr">
            <p>联系客服</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import CellDivider from "@/components/common/CellDivider";
import { getUserInfo } from "@/servers/api";

export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "我的资产",
        showLeftBack: true,
        showRightMore: false
      },
      cellListTools: [
        // {
        //   title: "签到领积分",
        //   icon: "iconfont iconqiandaolingjifen",
        //   link: "/signin"
        // },
        // {
        //   title: "我的资产",
        //   icon: "iconfont iconjifenshuoming",
        //   link: "/integraldesc"
        // }
      ],
      iNum: ""
    };
  },

  components: {
    Header,
    CellDivider
  },

  computed: {
    consty() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    },
    userInfo() {
      // return this.GLOBAL.getSession("userLoginInfo");
      return this.$store.state.userLoginInfo;
    }
  },
  created() {
    // this.getUserInfo();
  },
  beforeMount() {},

  mounted() {
    //从用户信息中提取积分余额
    getUserInfo({}).then(res => {
      this.$store.commit("setUserLoginInfo", res.data);
      this.GLOBAL.setSession("userLoginInfo", res.data);
      console.log(res.data);
      this.iNum = res.data.credit1;
    });

    console.log(this.$store.state.userLoginInfo);
  },

  methods: {
    //充值页面
    goChong() {
      this.$router.push("/Recharge");
    },
    //去积分提现页
    draw() {
      this.$router.push("/drawIntegral");
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.user-interal-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden scroll;
}
.user-interal-content-wrap {
  width: 100%;
  margin-top: 50px;
  background: #f9f9f9;
  overflow: hidden;
  position: relative;
}
.user-interal-desc {
  width: 100%;
  height: 200px;
  background: #4a74fe;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.tip {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
  box-sizing: border-box;
}
.num {
  flex: 4;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 30px;
}
.card {
  width: 92%;
  height: 200px;
  color: #fff;
  background: linear-gradient(
    90deg,
    rgba(31, 100, 255, 1),
    rgba(39, 141, 255, 1)
  );
  box-shadow: 0px 10px 25px 0px rgba(57, 118, 255, 0.5);
  border-radius: 8px;
  margin: 15px auto 0;
  overflow: hidden;
}
.txt {
  margin: 15px 0 34px 15px;
}
.num {
  margin-bottom: 39px;
}
.num p {
  text-align: center;
}
.lineOne {
  height: 1px;
  width: 92%;
  background: #4da0ff;
  margin: 0 auto;
}
.bottom {
  /* width: 92px; */
  height: 50px;
  margin: 0 auto;
}
.b-one {
  float: left;
  height: 50px;
  width: 49.5%;
}
.b-one p {
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: #80bfff;
}
.line-two {
  float: left;
  width: 1px;
  height: 30px;
  background: #4da0ff;
  margin-top: 6px;
}
.b-two {
  float: left;
  height: 50px;
  width: 49.5%;
}
.b-two p {
  text-align: center;
  line-height: 40px;
  font-size: 16px;
  color: #ffffff;
}
.bot {
  width: 100%;
  margin: 0 auto;
  position: absolute;
  bottom: 4px;
  /* left: 32%; */
}
.bot-one {
  float: left;
}
.bot-one p {
  font-size: 14px;
  color: #666666;
}
.bot-two {
  float: left;
  height: 13px;
  width: 1px;
  background: #666666;
  margin: 5px 5px 0;
}
.bot-thr {
  float: left;
}
.bot-thr p {
  font-size: 14px;
  color: #666666;
}
</style>
