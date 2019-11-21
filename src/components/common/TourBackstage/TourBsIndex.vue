<template>
  <div class="TourIndex-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <div class="choose-Wrap">
      <flexbox>
        <flexbox-item @click.native="goPM">
          <div class="flex-demo">
            <div class="img-wrap">
              <img src="./pen.png" alt />
            </div>
            <div class="txt-wrap">
              <p>个人信息</p>
            </div>
          </div>
        </flexbox-item>
        <flexbox-item @click.native="goOd">
          <div class="flex-demo">
            <div class="img-wrap">
              <img src="./pen.png" alt />
            </div>
            <div class="txt-wrap">
              <p>订单管理</p>
            </div>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Flexbox, FlexboxItem } from "vux";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "导游后台管理",
        showLeftBack: true,
        showRightMore: false
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    //跳转个人中心页
    goPM(){
      this.$router.push("/personMsgBs")
    },
    //跳转订单管理页
    goOd(){
      this.$router.push("/GuideOrderBs")
    }
  },
  components: {
    Header,
    Flexbox,
    FlexboxItem
  }
};
</script>

<style scoped lang="css">
.TourIndex-wrap {
  background: #f0f1f5;
}
.choose-Wrap {
  height: 130px;
  width: 92%;
  margin: 56px auto 0;
}
</style>
<style lang="less" scoped>
.flex-demo {
  text-align: center;
  background-color: #ffffff;
  border-radius: 8px;
  background-clip: padding-box;
  height: 130px;
  width: 165px;
  overflow: hidden;
}
/deep/ .img-wrap {
  width: 47px;
  height: 47px;
  margin: 30px 59px 8px;
}
/deep/ .img-wrap img {
  width: 100%;
  background: none;
}
/deep/ .txt-wrap p {
  color: #333333;
  font-size: 18px;
}
</style>
