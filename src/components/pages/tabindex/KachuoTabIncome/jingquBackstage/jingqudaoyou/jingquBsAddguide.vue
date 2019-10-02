<template>
  <div class="addGuide-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <p class="Preservation">提交</p>
    <div class="name">
      <x-input title name="username" placeholder="请输入导游姓名" is-type="china-name" class="name-inpt"></x-input>
    </div>
    <div class="introduce">
      <x-textarea
        :max="200"
        name="detail"
        placeholder="请输入个人介绍..."
        :show-counter="false"
        :height="130"
        :rows="8"
        :cols="30"
      ></x-textarea>
    </div>
    <div class="jq-photo-wrap">
      <p>导游头像</p>
      <ImageUploaderBs></ImageUploaderBs>
    </div>
    <div class="price">
      <x-input title placeholder="请输入每小时定价" type="number" class="price-inpt" :show-clear="false">
        <p slot="right" style="color=#222222">元</p>
      </x-input>
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
        titleContent: "添加导游",
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
  methods: {
    //选择种类事件
    onChange(val) {
      console.log("val change", val);
    },
    onShow() {
      console.log("on show");
    },
    onHide(type) {
      console.log("on hide", type);
    }
  },
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
.addGuide-wrap {
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  overflow: hidden scroll;
  position: relative;
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
.name {
  width: 92%;
  height: 55px;
  background: #ffffff;
  margin: 56px auto 10px;
  border-radius: 8px;
}
.introduce {
  width: 92%;
  height: 150px;
  background: #ffffff;
  border-radius: 8px;
  margin: 0 auto 10px;
}
.jq-photo-wrap {
  width: 92%;
  min-height: 170px;
  background: #ffffff;
  margin: 0 auto 10px;
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
.price {
  width: 92%;
  height: 55px;
  background: #ffffff;
  margin: 0 auto 10px;
  border-radius: 8px;
}
.time {
  width: 92%;
  height: 55px;
  background: #ffffff;
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
<style lang="less" scoped>
/deep/ .name-inpt input {
  height: 2.411765em;
}
/deep/ .price-inpt input {
  height: 2.411765em;
}
/deep/ .right-icon {
  margin: 13px 4% 0 0;
  float: right;
}
</style>
