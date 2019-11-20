<template>
  <div class="addCommodity-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="addCommodity-content">
      <div class="jq-photo-wrap">
        <p>添加商品图片</p>
        <ImageUploaderBs></ImageUploaderBs>
      </div>
      <div class="name-wrap">
        <x-input title="商品名称" placeholder="请填写商品名称" type="text" class="name-ipt"></x-input>
        <popup-picker
          title="选择类目"
          :data="list1"
          v-model="value1"
          @on-show="onShow"
          @on-hide="onHide"
          @on-change="onChange"
        ></popup-picker>
      </div>
      <div class="Up-wrap">
        <!-- <h3>上架板块</h3>
        <div class="line"></div>-->
        <checklist
          title="上架板块"
          label-position="left"
          required
          :options="commonList"
          :max="1"
          v-model="checklist001"
          @on-change="change"
          style="margin-top:26px"
        ></checklist>
      </div>
      <div class="jq-photo-wrap-two">
        <p>添加商品详情页</p>
        <ImageUploaderBs></ImageUploaderBs>
      </div>
      <div class="price">
        <x-input title="单价" placeholder="请填写商品单价" type="number" :show-clear="false">
          <p slot="right" style="color:#222222">元</p>
        </x-input>
        <x-input title="库存" placeholder="请填写库存数量" type="number" :show-clear="false">
          <p slot="right" style="color:#222222">件</p>
        </x-input>
      </div>
      <div class="freight">
        <popup-picker
          title="运费"
          :data="list2"
          v-model="value2"
          @on-show="onShow"
          @on-hide="onHide"
          @on-change="onChange"
        ></popup-picker>
      </div>
      <div class="existing">
        <popup-picker
          title="上链存证"
          :data="list3"
          v-model="value3"
          @on-show="onShow"
          @on-hide="onHide"
          @on-change="onChange"
        ></popup-picker>
      </div>
      <div class="button">
        <x-button>立即上架</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import ImageUploaderBs from "@/components/common/ImageUploaderBs";
import { XInput, XTextarea, PopupPicker, Checklist, XButton } from "vux";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "添加商品",
        showLeftBack: true,
        showRightMore: false
      },
      //选择种类
      list1: [["1", "2", "3"]],
      value1: ["1"],
      //选择包邮
      list2: [["包邮", "不包邮"]],
      value2: ["包邮"],
      //选择上链存证
      list3: [["需要", "不需要"]],
      value3: ["需要"],
      //上架选择
      commonList: ["地方特色商品", "自营文创产品"],
      checklist001: []
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
    },
    //切换上架选择
    change(val, label) {
      console.log("change", val, label);
    }
  },
  components: {
    Header,
    ImageUploaderBs,
    XInput,
    XTextarea,
    PopupPicker,
    Checklist,
    XButton
  }
};
</script>

<style scoped lang="css">
.addCommodity-wrap {
  height: 100%;
  width: 100%;
  background: #f5f5f5;
  overflow: hidden;
}
.addCommodity-content {
  height: 90%;
  width: 100%;
  background: #f5f5f5;
  overflow: hidden scroll;
  margin-top: 46px;
}
.jq-photo-wrap {
  width: 92%;
  min-height: 170px;
  background: #ffffff;
  margin: 10px auto 10px;
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

.jq-photo-wrap-two {
  width: 92%;
  min-height: 170px;
  background: #ffffff;
  margin: 0 auto 10px;
  border-radius: 8px;
  overflow: hidden;
}
.jq-photo-wrap-two p {
  font-size: 16px;
  color: #222222;
  font-weight: bold;
  display: block;
  margin: 10px 0 0 4%;
}

.name-wrap {
  width: 92%;
  height: 110px;
  background: #ffffff;
  border-radius: 8px;
  margin: 0 auto 10px;
}
.Up-wrap {
  width: 92%;
  height: 165px;
  background: #ffffff;
  margin: 0 auto 10px;
  border-radius: 8px;
  overflow: hidden;
}
.Up-wrap h3 {
  font-size: 16px;
  color: #222222;
  font-weight: bold;
  display: block;
  margin: 10px 0 10px 4%;
}
.line {
  width: 92%;
  height: 1px;
  background: #e5e5e5;
  margin: 0 auto;
}
.price {
  width: 92%;
  height: 110px;
  background: #ffffff;
  margin: 0 auto 10px;
  border-radius: 8px;
}
.freight {
  width: 92%;
  height: 55px;
  background: #ffffff;
  margin: 0 auto 10px;
  border-radius: 8px;
}
.existing {
  width: 92%;
  height: 55px;
  background: #ffffff;
  margin: 0 auto 30px;
  border-radius: 8px;
}
.button {
  width: 92%;
  height: 50px;
  border-radius: 8px;
  margin: 0 auto 15px;
}
</style>
<style lang="less" scoped>
/deep/ .weui-cell {
  padding: 16px 13px;
}
/deep/
  .weui-cells_checkbox
  .weui-check:checked
  + .vux-checklist-icon-checked:before {
  color: #007fff;
}
/deep/ button.weui-btn,
input.weui-btn {
  background: #3976ff;
  color: #ffffff;
}
</style>
