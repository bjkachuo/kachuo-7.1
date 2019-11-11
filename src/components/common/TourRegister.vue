<template>
  <div class="Tr-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="infor">
      <x-input
        title="姓名"
        name="username"
        placeholder="请输入姓名"
        is-type="china-name"
        v-model="form.realname"
      ></x-input>
      <x-input
        title="电话"
        name="mobile"
        placeholder="请输入手机号码"
        keyboard="number"
        is-type="china-mobile"
        v-model="form.mobile"
      ></x-input>
      <popup-picker
        title="注册景区"
        :data="List"
        v-model="form.id"
        @on-change="onChange"
        @on-show="onShow"
        @on-hide="onHide"
        placeholder="选择注册景区"
        :columns="2"
      ></popup-picker>
      <Address v-on:selectAddress="getSelAddress"></Address>
      <x-input
        title="详细地址:"
        name="username"
        placeholder="街道、门牌号等"
        label-width="5em"
        v-model="form.address"
      ></x-input>
      <cell title="人脸识别" value="未识别" is-link v-if="face == 0" @click.native="goFaceTwo"></cell>
      <cell title="人脸识别" value="已识别" v-if="face == 1"></cell>
      <cell title="实名认证" value="未认证" is-link v-if="idState == '0'" @click.native="goId"></cell>
      <cell title="实名认证" value="已认证" v-if="idState != '0' "></cell>
    </div>
    <div class="up-avata">
      <p>
        <span class="blod">上传头像</span>
        <span>(温馨提示：照片不能大于1M)</span>
      </p>
      <UploadImgOne v-on:getHeaderImgUrl="getImgVal" :plus="true">
        <div slot="bg">
          <div class="up-avata-bg" v-if="!form.user_path">
            <div class="camera"></div>
          </div>
        </div>
      </UploadImgOne>
    </div>
    <div class="up-avata">
      <p>
        <span class="blod">上传导游资质证明</span>
      </p>
      <UploadImgOne v-on:getHeaderImgUrl="getImgValTwo" :plus="true">
        <div slot="bg">
          <div class="up-avata-bg" v-if="!form.shop_business_pic">
            <div class="camera"></div>
          </div>
        </div>
      </UploadImgOne>
    </div>
    <div class="up-avata">
      <p>
        <span class="blod">上传手持身份证照片</span>
      </p>
      <UploadImgOne v-on:getHeaderImgUrl="getImgValThree" :plus="true">
        <div slot="bg">
          <div class="up-avata-bg" v-if="!form.idcard">
            <div class="camera"></div>
          </div>
        </div>
      </UploadImgOne>
    </div>
    <div class="tijiao" @click="submit">
      <p>提交</p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { XInput, Cell, PopupPicker } from "vux";
import Address from "@/components/common/Address";
import ImageUploaderBs from "@/components/common/ImageUploaderBs";
import UploadImgOne from "@/components/common/UploadImgOne/UploadImgOne";

import { guideRegister, getUserInfo } from "@/servers/api";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "导游注册",
        showLeftBack: true,
        showRightMore: false
      },
      //人脸识别状态
      face: 0,
      //实名认证状态
      idState: "0",
      //表单
      form: {
        id: [],
        realname: "",
        mobile: "",
        //地区
        region: "",
        //详细地址
        address: "",
        //用户头像
        user_path: "",
        //手持身份证照片
        idcard: "",
        //导游资质照片
        shop_business_pic: ""
      },
      List: [
        { name: "苍岩山", value: "22" },
        { name: "徽州古城", value: "23" },
        { name: "蓬莱", value: "24" },
        { name: "少林", value: "25" },
        { name: "神垕", value: "26" },
        { name: "云雾山", value: "27" },
        { name: "三孔", value: "35" },
        { name: "云冈石窟", value: "66" }
      ],
      AList: []
    };
  },
  computed: {},
  created() {},
  mounted() {
    //获取全局用户信息
    getUserInfo({}).then(res => {
      this.$store.commit("setUserLoginInfo", res.data);
      this.GLOBAL.setSession("userLoginInfo", res.data);
      console.log(res.data);
      this.face = res.data.is_face;
      console.log("人脸识别状态   " + this.face);
      this.idState = res.data.sm_createtime;
      console.log("实名认证状态   " + this.idState);
    });
    // //人脸识别状态
    // this.face = JSON.parse(sessionStorage.getItem("userLoginInfo")).is_face;
    // console.log("人脸识别状态" + this.face);
    // //实名认证状态
    // this.idState = JSON.parse(
    //   sessionStorage.getItem("userLoginInfo")
    // ).sm_createtime;
    // console.log("实名认真状态" + this.idState);
    //获取景区和对应id
    this.$http
      .post(
        "http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.scenic_list"
      )
      .then(({ data }) => {
        console.log(data.data);
        this.AList = data.data;
        console.log("AList:", this.AList);
      });
  },
  watch: {},
  methods: {
    //获取全局用户信息
    getUserInfo() {},
    //选择注册景区
    onChange(val) {
      console.log("val change", val);
      this.id = val.toString();
    },
    onShow() {
      console.log("on show");
    },
    onHide(type) {
      console.log("on hide", type);
    },
    //选择地区
    getSelAddress(val) {
      this.form.region = val;
      console.log(this.form.region);
    },
    //上传头像
    getImgVal(val) {
      this.form.user_path = val;
    },
    //上传导游资质照片
    getImgValTwo(val) {
      this.form.shop_business_pic = val;
    },
    //上传手持身份证照片
    getImgValThree(val) {
      this.form.idcard = val;
    },
    //提交表单
    submit() {
      guideRegister({
        scenic_id: this.id,
        realname: this.form.realname,
        mobile: this.form.mobile,
        region: this.form.region,
        address: this.form.address,
        user_path: this.form.user_path,
        shop_business_pic: this.form.shop_business_pic,
        idcard: this.form.idcard
      }).then(res => {
        console.log(res);
        if (res.result == 1 && this.face == 1 && this.idState != "") {
          this.showTip("注册成功");
          this.$router.push("/waitingAudit")
        } else {
          this.showTip("请填写完整并检查人脸识别和实名认证状态");
        }
      });
    },
    //提示框
    showTip(conttentTip) {
      this.$vux.toast.text(conttentTip, "middle");
      setTimeout(() => {
        this.$vux.toast.hide();
      }, 1000);
    },
    //跳转人脸识别
    goFaceTwo() {
      this.$router.push("/face?form=TourRegister");
    },
    //跳转实名认真
    goId() {
      this.$router.push("/Ucenter/Certification");
    }
  },
  components: {
    Header,
    XInput,
    Address,
    Cell,
    ImageUploaderBs,
    UploadImgOne,
    PopupPicker
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
  height: 390px;
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
.tijiao {
  width: 92%;
  background: #3976ff;
  height: 50px;
  margin: 0 auto;
  border-radius: 8px;
}
.tijiao p {
  text-align: center;
  line-height: 50px;
  font-size: 16px;
  color: #ffffff;
}
</style>
<style lang="less" scoped>
/deep/ .weui-cell {
  padding: 17px 15px;
}
.up-avata {
  padding-bottom: 16px;
  background-color: #fff;
  width: 92%;
  box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.06);
  border-radius: 8px;
  margin: 15px auto 10px;
  p {
    line-height: 45px;
    padding: 0 16px;
    .blod {
      font-weight: 800;
      font-size: 16px;
      color: #222;
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
      background-image: url("./camera.png");
      background-size: 100% 100%;
    }
  }
}
</style>
