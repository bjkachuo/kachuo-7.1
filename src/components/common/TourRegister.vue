<template>
  <div class="Tr-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="infor">
      <x-input title="姓名" name="username" placeholder="请输入姓名" is-type="china-name"></x-input>
      <x-input
        title="电话"
        name="mobile"
        placeholder="请输入手机号码"
        keyboard="number"
        is-type="china-mobile"
      ></x-input>
      <Address v-on:selectAddress="getSelAddress"></Address>
      <x-input title="详细地址:" name="username" placeholder="街道、门牌号等" label-width="5em"></x-input>
      <cell title="实名认证" value="未认证" is-link></cell>
    </div>
    <div class="jq-photo-wrap">
      <p>上传导游资质证明</p>
      <ImageUploaderBs></ImageUploaderBs>
    </div>
    <div class="jq-photo-wrap">
      <p>上传手持身份证照片</p>
      <ImageUploaderBs></ImageUploaderBs>
    </div>
    <div class="id-wrap">
      <cell title="人脸识别" value="未识别" is-link></cell>
    </div>
    <div class="tijiao"><p>提交</p></div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { XInput, Cell } from "vux";
import Address from "@/components/common/Address";
import ImageUploaderBs from "@/components/common/ImageUploaderBs";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "导游注册",
        showLeftBack: true,
        showRightMore: false
      },
      //日期
      region: ""
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    getSelAddress(val) {
      this.region = val;
      console.log(this.region);
    }
  },
  components: {
    Header,
    XInput,
    Address,
    Cell,
    ImageUploaderBs
  }
};
</script>

<style scoped lang="css">
.Tr-wrap {
  background: #f5f5f5;
  overflow: hidden scroll;
  height: 100%;
}
.infor {
  width: 92%;
  height: 275px;
  margin: 56px auto 10px;
  background: #ffffff;
  border-radius: 8px;
}
.jq-photo-wrap {
  width: 92%;
  min-height: 170px;
  background: #ffffffff;
  margin: 0px auto 10px;
  border-radius: 8px;
  overflow: hidden;
}
.jq-photo-wrap p {
  font-size: 16px;
  color: #222222ff;
  font-weight: bold;
  display: block;
  margin: 10px 0 0 4%;
}
.id-wrap {
  height: 55px;
  width: 92%;
  background: #ffffff;
  margin: 0px auto 10px;
}
.tijiao{
  width: 92%;
  background: #3976FF;
  height: 50px;
  margin: 0 auto;
  border-radius: 8px;
}
.tijiao p{
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  color: #FFFFFF;
}
</style>
<style lang="less" scoped>
/deep/ .weui-cell {
  padding: 17px 15px;
}
</style>