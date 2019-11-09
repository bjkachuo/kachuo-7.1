<template>
  <div class="data-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="photo" style="margin-top: 61px;">
      <div class="line-top">
        <p>景区照片</p>
        <span @click="addPhoto">添加</span>
      </div>
      <div class="line-mid"></div>
      <div class="line-bottom">
        <p>无</p>
      </div>
    </div>
    <div class="photo">
      <div class="line-top">
        <p>景区介绍</p>
        <span @click="addIntroduce">添加</span>
      </div>
      <div class="line-mid"></div>
      <div class="line-bottom">
        <p>无</p>
      </div>
    </div>
    <div class="photo">
      <div class="line-top">
        <p>服务项</p>
        <span @click="addSevice">添加</span>
      </div>
      <div class="line-mid"></div>
      <div class="line-bottom">
        <p>无</p>
      </div>
    </div>
    <div class="photo">
      <div class="line-top">
        <p>安全提示</p>
        <span @click="addSecurity">添加</span>
      </div>
      <div class="line-mid"></div>
      <div class="line-bottom">
        <p>无</p>
      </div>
    </div>
    <div class="photo">
      <div class="line-top">
        <p>服务电话</p>
      </div>
      <div class="line-mid"></div>
      <div class="line-bottom">
        <x-button @click.native="showPlugin3">+ 添加服务电话</x-button>

        <!-- <div class="addNum">
          <div class="addNum-img">
            <img src="../add.png" alt />
          </div>
          <p>添加服务电话</p>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Confirm, XButton } from "vux";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "景区资料",
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
    //跳转添加景区照片页
    addPhoto() {
      this.$router.push("/jingquBsAddPhoto");
    },
    //跳转景区介绍添加页
    addIntroduce() {
      this.$router.push("/jingquBsAddIntroduce");
    },
    //跳转服务项添加页
    addSevice() {
      this.$router.push("/jingquBsAddService");
    },
    //添加安全提示页
    addSecurity() {
      this.$router.push("/jingquBsAddSecurity");
    },
    //添加电话号
    showPlugin3() {
      const _this = this;
      this.$vux.confirm.prompt("请输入", {
        title: "添加服务电话",
        onShow() {
          console.log("promt show");
          _this.$vux.confirm.setInputValue("");
        },
        onHide() {
          console.log("prompt hide");
        },
        onCancel() {
          console.log("prompt cancel");
        },
        onConfirm(msg) {
          alert(msg);
        }
      });
    }
  },
  components: {
    Header,
    Confirm,
    XButton
  }
};
</script>

<style scoped lang="css">
.data-wrap {
  width: 100%;
  height: 100%;
  background: #f0f1f5;
  overflow: hidden scroll;
}
.photo {
  width: 92%;
  height: 100px;
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
.addNum {
  width: 120px;
  height: 20px;
  margin: 18px auto;
}
.addNum-img {
  height: 13px;
  width: 13px;
  float: left;
}
.addNum-img img {
  width: 100%;
  background: none;
}
.addNum p {
  font-size: 14px;
  color: #9ebcff;
  line-height: 0;
  float: left;
  display: block;
  margin-top: 6px;
  margin-top: 13px;
  margin-left: 5px;
}
</style>
<style lang="less" scoped>
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
</style>
