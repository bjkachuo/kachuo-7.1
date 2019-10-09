<template>
  <div class="paperTicket-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="explain-wrap">
      <div class="explain-one">
        <img src="./yanpiao.png" alt />
      </div>
      <div class="text-wrap">
        <div>
          <p>1.景区购买线下票游客可通过APP扫描上传人脸数 据和门票识别码(二维码等)进行在线检票</p>
        </div>
        <div>
          <p>2.门票和人脸信息绑定，可通过景区闸机快速入园</p>
        </div>
      </div>
      <!-- <div class="p-wrap">
        <flexbox>
          <flexbox-item>
            <div class="flex-demo">
              <div class="p-img-wrap">
                <img src="./p1.png" alt />
              </div>
              <div>
                <p>扫描人脸</p>
              </div>
            </div>
          </flexbox-item>
          <div class="add-wrap">
            <img src="./p2.png" alt />
          </div>
          <flexbox-item>
            <div class="flex-demo">
              <div class="p-img-wrap">
                <img src="./p3.png" alt />
              </div>
              <div>
                <p>二维码</p>
              </div>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-demo">
              <div class="p-img-wrap">
                <img src="./p4.png" alt />
              </div>
              <div>
                <p>条形码</p>
              </div>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-demo">
              <div class="p-img-wrap">
                <img src="./p5.png" alt />
              </div>
              <div>
                <p>数字码</p>
              </div>
            </div>
          </flexbox-item>
        </flexbox>
      </div>-->
    </div>
    <div class="face-wrap">
      <div class="f-left">
        <img src="./renlian.png" alt />
      </div>
      <div class="f-right" v-if="this.face==1">
        <div class="i-warp">
          <x-icon type="ios-checkmark" size="15" class="yes"></x-icon>
        </div>
        <span>已通过</span>
      </div>
      <div class="f-right" v-else-if="this.face==0">
        <div class="i-warp">
          <x-icon type="ios-checkmark" size="15"></x-icon>
        </div>
        <span>未通过</span>
      </div>
    </div>
    <div class="binding-wrap">
      <div class="explain-one">
        <img src="./bangding.png" alt />
      </div>
      <div class="text-bind">
        <p>扫描或输入景区门票二维码、条形码或数字串码 等识别码进行门票信息绑定</p>
      </div>
      <div class="scann" @click="scanning">
        <p>扫码识别</p>
      </div>
      <div class="num" @click="write">
        <p>数字串码</p>
      </div>
    </div>
    <div class="CheckTickets" v-if="this.text == ''|| this.photo == 0">
      <p>立即验票</p>
    </div>
    <div class="CheckTicketsTwo" v-if="this.text !=''|| this.photo == 1" @click="tip">
      <p>立即验票</p>
    </div>
    <confirm
      v-model="show5"
      show-input
      ref="confirm5"
      title="请输入数字串码"
      @on-cancel="onCancel"
      @on-confirm="onConfirm5"
      @on-show="onShow5"
      @on-hide="onHide"
    ></confirm>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Tab, TabItem, Flexbox, FlexboxItem, Confirm } from "vux";
import { faceCheck } from "@/servers/api";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "纸质票",
        showLeftBack: true,
        showRightMore: false
      },
      show5: false,
      face: 0,
      //输入的信息状态
      text: "",
      //传入的图片状态
      photo: ""
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.face = JSON.parse(sessionStorage.getItem("userLoginInfo")).is_face;
    console.log(this.face);

    if (JSON.parse(sessionStorage.getItem("userLoginInfo")).is_face == 0) {
      this.$router.push("/facecheck");
    } else {
    }
  },
  watch: {},
  methods: {
    write() {
      this.show5 = !this.show5;
      console.log("11111");
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
    },
    scanning() {
      navigator.camera.getPicture(
        res => {
          if (res == null) return;
          this.$vux.loading.show({ text: "正在上传" });
          axios
            .post(this.videoUploadUrl, res, FACEUPLOADCONFIG)
            .then(res2 => {
              // alert(JSON.stringify(res2))
              if (res2.data.result === 1) {
                this.$vux.loading.hide();
                this.$vux.toast.show({
                  type: "success",
                  text: "扫描成功",
                  time: 1000
                });
                this.photo = res2.data.result;
                // this.$router.go("/indextab");
              } else {
                this.$vux.loading.hide();
                this.$vux.toast.show({
                  type: "warn",
                  text: "验证失败请重试",
                  time: 1000
                });
              }
            })
            .catch(err => {
              console.log(err);
            });
        },
        err => {
          console.log(err);
        },
        {
          quality: 50,
          destinationType: Camera.DestinationType.DATA_URL,
          cameraDirection: Camera.Direction.FRONT,
          targetWidth: 720,
          targetHeight: 1280
        }
      );
    },
    tip() {
      this.$vux.loading.hide();
      this.$vux.toast.show({
        type: "success",
        text: "验票成功",
        time: 1000
      });
      this.$router.go("/indextab");
    }
  },
  components: {
    Header,
    Tab,
    TabItem,
    Flexbox,
    FlexboxItem,
    Confirm
  }
};
</script>

<style scoped lang="css">
.paperTicket-wrap {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  overflow: hidden scroll;
}
.explain-wrap {
  width: 92%;
  height: 130px;
  margin: 56px auto 10px;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}
.face-wrap {
  width: 92%;
  height: 56px;
  margin: 0 auto 10px;
  background: #ffffff;
  border-radius: 8px;
}
.binding-wrap {
  width: 92%;
  height: 225px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
}
.explain-one {
  width: 81px;
  height: 14px;
  margin: 15px auto;
}
.explain-one img {
  width: 100%;
  background: none;
}
.text-wrap {
  width: 92%;
  height: auto;
  margin: 0 auto 10px;
}
.text-wrap p {
  font-size: 3.6vw;
  color: #999faa;
  /* text-align: center; */
}
.p-wrap {
  height: 80px;
  width: 88%;
  margin: 0 auto;
}
.add-wrap {
  width: 15px;
  height: 15px;
  margin: 0 0 30px 0;
}
.add-wrap img {
  width: 100%;
  background: none;
}
.p-img-wrap {
  width: 44px;
  height: 44px;
  margin: 0 auto 10px;
}
.p-img-wrap img {
  background: none;
  width: 100%;
}
.f-left {
  width: 81px;
  height: 14px;
  float: left;
  margin: 20px 0 0 4%;
}
.f-left img {
  background: none;
  width: 100%;
}
.f-right {
  /* width: 80px; */
  height: 15px;
  float: right;
  margin: 20px 4% 0 0;
}
.f-right span {
  color: #999faa;
  font-size: 14px;
  float: right;
}
.i-warp {
  float: left;
  margin-top: 2px;
}
.text-bind {
  width: 92%;
  height: auto;
  margin: 0 auto 10px;
}
.text-bind p {
  font-size: 3.6vw;
  color: #999faa;
}
.scann {
  width: 85%;
  height: 44px;
  background: #3976ff;
  box-shadow: 0px 10px 20px 0px rgba(57, 118, 255, 0.5);
  border-radius: 8px;
  margin: 0 auto 15px;
}
.scann p {
  text-align: center;
  line-height: 44px;
  color: #ffffff;
  font-size: 16px;
}
.num {
  width: 85%;
  height: 44px;
  background: #ffffff;
  border: 1px solid rgba(57, 118, 255, 1);
  border-radius: 8px;
  margin: 0 auto;
}
.num p {
  text-align: center;
  line-height: 44px;
  color: #3976ff;
  font-size: 16px;
}
.CheckTickets {
  height: 60px;
  width: 100%;
  position: absolute;
  background: #cccccc;
  bottom: 0px;
}
.CheckTickets p {
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  line-height: 60px;
}
.CheckTicketsTwo {
  height: 60px;
  width: 100%;
  position: absolute;
  background: rgba(57, 118, 255, 1);
  bottom: 0px;
}
.CheckTicketsTwo p {
  font-size: 16px;
  color: #ffffff;
  text-align: center;
  line-height: 60px;
}
</style>
<style scoped lang="less">
/deep/ .vux-tab-wrap {
  margin-top: 46px;
  margin-bottom: 10px;
}
/deep/ .vux-tab .vux-tab-item {
  font-size: 16px;
  font-weight: bold;
}
/deep/ .scrollable .vux-tab-item {
  flex: 0 0 20%;
}
.flex-demo {
  text-align: center;
  color: #fff;
  //   background-color: #20b907;
  border-radius: 4px;
  background-clip: padding-box;
  width: 60px;
  height: 68px;
}
.flex-demo p {
  font-size: 14px;
  color: #999faa;
}
/deep/ .yes {
  fill: #2ecc33;
}
</style>