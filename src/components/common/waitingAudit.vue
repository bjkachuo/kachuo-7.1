<template>
  <div class="Audit-wrap">
    <div style="box-shadow: 0px 5px 10px 0px rgba(0,101,255,0.06);height:46px;position:relative;">
      <Header
        :titleContent="TitleObjData.titleContent"
        :showLeftBack="TitleObjData.showLeftBack"
        :showRightMore="TitleObjData.showRightMore"
      ></Header>
      <div class="over" @click="done">
        <p>完成</p>
      </div>
    </div>
    <div class="content">
      <div class="img-wrap">
        <img src="../../assets/images/ddshaaa.png" alt />
      </div>
      <div class="t-one">
        <p>您的注册申请已经提交成功</p>
      </div>
      <div class="t-two">
        <p>请耐心等待审核</p>
      </div>
      <div class="t-thr">
        <p>审核通过后请去个人中心查看后台入口</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "等待审核",
        showLeftBack: false,
        showRightMore: false
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
      done(){
          this.$router.push("/TourList")
      }
  },
  components: {
    Header
  }
};
</script>

<style  lang="css" scoped>
.Audit-wrap {
  background: #ffffff;
  overflow: hidden scroll;
  height: 100%;
}
.over {
  position: absolute;
  right: 12px;
  top: 11px;
  z-index: 22222;
}
.over p {
  font-size: 16px;
  color: #333333;
}
.content {
  width: 100%;
  height: 260px;
  /* background: gold; */
  margin-top: 128px;
}
.img-wrap {
  width: 135px;
  height: 144px;
  margin: 0px auto 12px;
}
.img-wrap img {
  width: 100%;
}
.t-one {
  margin-bottom: 14px;
}
.t-one p {
  text-align: center;
  color: #222222;
  font-size: 18px;
}
.t-two {
  margin-bottom: 14px;
}
.t-two p {
  text-align: center;
  color: #999999;
  font-size: 14px;
}
.t-thr p {
  text-align: center;
  color: #222222;
  font-size: 14px;
}
</style>
