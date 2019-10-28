<template>
  <div class="done-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="img-wrap">
      <img src="./txcg.png" alt />
    </div>
    <div class="p-one">
      <p>您的提现申请已经提交成功</p>
    </div>
    <div class="p-two">
      <p>预计24小时内提现成功</p>
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
        titleContent: "提现完成",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    Header
  }
};
</script>

<style scoped lang="css">
.done-wrap {
  width: 100%;
  height: 100%;
  overflow: hidden scroll;
  background: #f5f5f5;
}
.img-wrap {
  width: 138px;
  height: 165.5px;
  margin: 170.5px auto 9.5px;
}
.img-wrap img {
  width: 100%;
  background: none;
}
.p-one {
  margin-bottom: 15px;
}
.p-one p {
  font-size: 18px;
  color: #222222;
  text-align: center;
}
.p-two p {
  font-size: 14px;
  color: #999999;
  text-align: center;
}
</style>
