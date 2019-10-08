<template>
  <div class="personMsg-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <p class="Preservation">提交</p>
    <div class="jq-photo-wrap">
      <p>上传个人照片</p>
      <ImageUploaderBs></ImageUploaderBs>
    </div>
    <div class="introduce">
      <x-textarea
        :max="200"
        name="detail"
        placeholder="请输入导游介绍"
        :show-counter="false"
        :height="130"
        :rows="8"
        :cols="30"
      ></x-textarea>
    </div>
    <div class="price">
      <x-input title="每小时价格(元)" placeholder="请输入每小时价格" required="true" type="number"></x-input>
    </div>
    <div class="time">
      <popup-picker
        title="最低预约时长"
        :data="list1"
        v-model="value1"
        @on-show="onShow"
        @on-hide="onHide"
        @on-change="onChange"
      ></popup-picker>
    </div>
    <div class="price">
      <x-input title="联系方式" placeholder="请输入联系方式" required="true" is-type="china-mobile"></x-input>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { XInput, XTextarea, PopupPicker } from "vux";
import ImageUploaderBs from "@/components/common/ImageUploaderBs";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "个人资料",
        showLeftBack: true,
        showRightMore: false
      },
      list1: [["1小时", "2小时", "3小时", "4小时", "5小时", "6小时", "7小时"]],
      value1: ["1小时"]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {
    Header,
    XInput,
    XTextarea,
    ImageUploaderBs,
    PopupPicker
  }
};
</script>

<style scoped lang="css">
.personMsg-wrap {
  background: #f0f1f5;
  position: relative;
  overflow: hidden scroll;
}
.Preservation {
  display: block;
  position: absolute;
  top: 10px;
  right: 4%;
  font-size: 16px;
  z-index: 9999;
  color: #333333;
}
.jq-photo-wrap {
  width: 92%;
  min-height: 170px;
  background: #FFFFFF;
  margin: 56px auto 10px;
  border-radius: 8px;
  overflow: hidden;
}
.jq-photo-wrap p {
  font-size: 16px;
  color: #222222;
  font-weight: bold;
  display: block;
  margin: 10px 0 0 4%;
}
.introduce {
  width: 92%;
  height: 150px;
  background: #FFFFFF;
  border-radius: 8px;
  margin: 0 auto 10px;
}
.price {
  width: 92%;
  height: 55px;
  background: #FFFFFF;
  border-radius: 8px;
  margin: 0 auto 10px;
  padding: 8px 2px;
}
.time {
  width: 92%;
  height: 55px;
  background: #FFFFFF;
  margin: 0 auto 10px;
  border-radius: 8px;
  padding: 8px 2px;
}
.time p {
  color: #222222;
  font-size: 16px;
  display: block;
  float: left;
  margin: 16px 0 0 4%;
}
</style>
