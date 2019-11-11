<template>
  <div class="wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="normal-content" :style="conHei">
      <div class="set-cells">
        <cell title="头像" is-link>
          <template slot="default">
            <div class="uc-avatar">
              <img :src="userInfo.avatar" alt />
              <ImageUpload
                class="img-upload-wrap"
                ref="ImageUploadCom"
                v-on:getHeaderImgUrl="getHeaderImgUrlData"
              ></ImageUpload>
            </div>
          </template>
        </cell>
        <cell title="昵称" is-link link="/Ucenter/ModifyNicknames">
          <template slot="default">
            <div class="uc-name">{{ userInfo.nickname }}</div>
          </template>
        </cell>
      </div>
      <div class="set-cells">
        <cell title="实名认证" value="未认证" is-link v-if="idState == '0'" @click.native="goRenzheng"></cell>
        <cell title="实名认证" value="已认证" v-if="idState != '0' "></cell>
        <cell title="人脸识别" value="未识别" v-if="face == 0" is-link @click.native="goFaceThr"></cell>
        <cell title="人脸识别" value="已识别" v-if="face == 1"></cell>
        <!-- <cell title="实名认证" is-link>
          <template slot="default">
            <div @click="goRenzheng">未认证</div>
          </template>
        </cell>
        <cell title="人脸识别" is-link>
          <template slot="default">
            <div>未识别</div>
          </template>
        </cell>-->
      </div>
      <div class="set-cells">
        <cell title="收货地址" is-link link="/address"></cell>
      </div>
    </div>
    <actionsheet v-model="show2" :menus="menus2" @on-click-menu="click" show-cancel></actionsheet>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Cell, XInput, Actionsheet } from "vux";
import ImageUpload from "@/components/common/UploadImgOne/UploadImgOne";
import { GetAuthState, getUserInfo } from "@/servers/api";
export default {
  name: "",
  props: [""],
  data() {
    return {
      show2: false,
      menus2: {
        menu1: "拍照上传",
        menu2: "打开相册"
      },
      TitleObjData: {
        titleContent: "个人中心",
        showLeftBack: true,
        showRightMore: false
      },
      //人脸识别状态
      face: 0,
      //实名认证状态
      idState: "0"
    };
  },
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
  },
  methods: {
    onClick(key) {
      this.show2 = !this.show2;
    },
    getHeaderImgUrlData() {},
    click(key) {
      console.log(key);
    },
    goRenzheng() {
      this.$router.push("/Ucenter/Certification");
    },
    goFaceThr() {
      this.$router.push("/face?form=Ucenter");
    },
    getStatus() {
      GetAuthState().then(res => {
        console.log(res);
      });
    }
  },

  components: {
    Header,
    Cell,
    XInput,
    Actionsheet,
    ImageUpload
  },
  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    },
    userInfo() {
      return this.$store.state.userLoginInfo;
    }
  },

  created() {
    this.getStatus();
  }
};
</script>
<style lang='css' scoped>
.normal-content {
  width: 100%;
  background: #f5f5f5;
  margin-top: 45px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 15px 0;
  box-sizing: border-box;
}
.set-cells {
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 15px;
  background-color: #ffffff;
}
.set-cells .weui-cell {
  padding: 15px;
  font-size: 16px;
}
.uc-avatar {
  position: relative;
  width: 30px;
  height: 30px;
}
.uc-avatar img {
  width: 30px;
  height: 30px;
  border-radius: 30px;
}
.uc-name {
  color: #222222;
}
.img-upload-wrap {
  width: 30px;
  height: 30px;
  left: 0;
  top: 0;
  position: absolute;
  overflow: hidden;
  display: inline-block;
  background: red;
  opacity: 0;
}
</style>
