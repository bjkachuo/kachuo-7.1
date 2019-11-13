<template>
  <div class="information-warp">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="up-avata">
      <p>
        <span class="blod">上传店铺封面</span>
      </p>
      <UploadImgOne v-on:getHeaderImgUrl="getImgVal" :plus="true" ref="upimg">
        <div slot="bg">
          <div class="up-avata-bg" v-if="!form.tour_path">
            <div class="camera"></div>
          </div>
        </div>
      </UploadImgOne>
    </div>
    <div class="photo">
      <div class="line-top">
        <!-- <p>服务电话</p> -->
        <x-input title="服务电话" v-model="this.form.phone" disabled>
          <p slot="right">修改</p>
        </x-input>
      </div>
      <div class="line-mid"></div>
      <div class="line-bottom">
        <!-- <x-button @click.native="showPlugin3">+ 添加服务电话</x-button> -->
        <x-button @click.native="write">+ 添加服务电话</x-button>
      </div>
    </div>
    <div class="photo">
      <x-input title="店铺名称" disabled v-model="this.form.name"></x-input>
      <x-input title="经营项目" disabled v-model="this.form.introduce"></x-input>
      <x-input title="店铺地址" disabled v-model="this.form.address"></x-input>
    </div>
    <div class="photo">
      <x-input title="账户管理" disabled v-model="this.form.account"></x-input>
      <x-input title="银行卡号" disabled v-model="this.form.cardNumber"></x-input>
    </div>

    <confirm
      v-model="show5"
      show-input
      ref="confirm5"
      title="请输入门票编号"
      @on-cancel="onCancel"
      @on-confirm="onConfirm5"
      @on-show="onShow5"
      @on-hide="onHide"
      :input-attrs="{type: 'number'}"
    ></confirm>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import UploadImgOne from "@/components/common/UploadImgOne/UploadImgOne";
import { Confirm, XButton, XInput } from "vux";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "店铺信息",
        showLeftBack: true,
        showRightMore: false
      },
      //修改电话弹窗
      show5: false,

      form: {
        tour_path: "",
        introduce: "大床房、标间",
        price: "",
        lowest_time: [],
        phone: "18790123121",
        name: "如家酒店",
        address: "山东省济南市历下街道",
        account: "中国建设银行",
        cardNumber: "621226100108077XXXX"
      }
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    //添加电话
    write() {
      this.show5 = !this.show5;
      console.log("修改手机号");
    },
    onHide() {
      console.log("on hide");
    },
    onCancel() {
      console.log("on cancel");
    },
    onShow5() {
      this.$refs.confirm5.setInputValue("");
    },
    onConfirm5(value) {
      this.$refs.confirm5.setInputValue("");
      this.$vux.toast.text("input value: " + value);
      this.text = value;
      console.log(this.text);
    },

    //上传头像
    getImgVal(val) {
      this.form.tour_path = val;
    }
    //添加电话号
    // showPlugin3() {
    //   const _this = this;
    //   this.$vux.confirm.prompt("请输入", {
    //     title: "服务电话",
    //     onShow() {
    //       console.log("promt show");
    //       _this.$vux.confirm.setInputValue("");
    //     },
    //     onHide() {
    //       console.log("prompt hide");
    //     },
    //     onCancel() {
    //       console.log("prompt cancel");
    //     },
    //     onConfirm(msg) {
    //       alert(msg);
    //     }
    //   });
    // }
  },
  components: {
    Header,
    UploadImgOne,
    Confirm,
    XButton,
    XInput
  }
};
</script>

<style scoped lang="less">
.information-warp {
  width: 100%;
  height: 100%;
  background: #f0f1f5;
  overflow: hidden scroll;
}
.photo {
  width: 92%;
  //   height: 100px;
  background: #ffffff;
  border-radius: 8px;
  margin: 0 auto 15px;
}
.line-top {
  height: 49px;
}
.line-top p {
  display: block;
  font-size: 16px;
  float: left;
  color: #222222;
  font-weight: 800;
  margin: 12px 0 0 4%;
}
.line-top span {
  display: block;
  float: right;
  font-size: 14px;
  color: #3976ff;
  margin: 14px 4% 0 0;
}
.line-mid {
  height: 1px;
  width: 92%;
  background: #f0f1f5;
  margin: 0 auto;
}
.line-bottom {
  height: 48px;
}
.line-bottom p {
  line-height: 42px;
  font-size: 14px;
  color: #cccccc;
  margin-left: 4%;
}
/deep/ .weui-btn_default {
  margin-top: 8px;
  width: 54%;
  color: #9ebcff;
  font-size: 14px;
  background: rgba(255, 255, 255, 0.5);
}
/deep/ .weui-btn:after {
  border: none;
}
/deep/ .weui-label {
  font-size: 16px;
  color: #666666;
}
/deep/ .weui-cell__primary {
  font-size: 16px;
  color: #222222;
}
/deep/ .line-top p {
  font-size: 16px;
  color: #3976ff;
  margin: 0;
}
/deep/ .vux-x-input.disabled .weui-inpu {
  -webkit-text-fill-color: #222222;
}
.up-avata {
  padding-bottom: 16px;
  background-color: #fff;
  width: 92%;
  box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.06);
  border-radius: 8px;
  margin: 56px auto 10px;
  p {
    line-height: 45px;
    padding: 0 16px;
    .blod {
      //   font-weight: 800;
      font-size: 16px;
      color: #666666;
    }
    span {
      font-size: 14px;
      color: #999;
    }
  }
  .upload-img {
    width: 94px;
    height: 94px;
    display: inline-block;
    object-fit: cover;
    margin: 0 0 0 20px;
  }
  .up-avata-bg {
    width: 90px;
    height: 90px;
    border-radius: 4px;
    background-color: #ebeef5;
    .camera {
      width: 46px;
      height: 46px;
      margin: 0 auto;
      position: relative;
      top: 22px;
      background-image: url("../camera.png");
      background-size: 100% 100%;
    }
  }
}
</style>
