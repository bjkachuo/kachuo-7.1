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
          <p>1.年龄符合免票条件的游客通过APP扫描上传人脸 数据和身份证信息(其它类型免票游客可通过人工 检票处入园)</p>
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
      <div class="f-right" v-if="this.face==0">
        <div class="i-warp">
          <x-icon type="ios-checkmark" size="15" class="no"></x-icon>
        </div>
        <span>未通过</span>
      </div>
    </div>
    <div class="face-wrap">
      <div class="f-left" style="width:93px">
        <img src="./shenfenzheng.png" alt />
      </div>
      <div class="f-right-two" @click="IdCard">
        <span>立即绑定</span>
        <div class="i-warp-two">
          <x-icon type="ios-arrow-right" size="15" class="cell-x-icon"></x-icon>
        </div>
      </div>
    </div>
    <div class="CheckTickets" v-if="this.face==0 || this.idState == null">
      <p>立即验票</p>
    </div>
    <div class="CheckTicketsTwo" v-if="this.face==1 && this.idState !==null" @click="tip">
      <p>立即验票</p>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Tab, TabItem, Flexbox, FlexboxItem } from "vux";
import { getUserInfo } from "@/servers/api";

export default {
  props: {},
  data() {
    return {
      TitleObjData: {
        titleContent: "免票用户",
        showLeftBack: true,
        showRightMore: false
      },
      face: 0,
      idState: null
    };
  },
  computed: {},
  created() {},
  mounted() {
    //获取全局用户信息
    // getUserInfo({}).then(res => {
    //   this.$store.commit("setUserLoginInfo", res.data);
    //   this.GLOBAL.setSession("userLoginInfo", res.data);
    //   console.log(res);
    // });

    this.face = JSON.parse(sessionStorage.getItem("userLoginInfo")).is_face;
    // this.face = this.$route.query.face;
    console.log(this.face);

    this.idState = JSON.parse(
      sessionStorage.getItem("userLoginInfo")
    ).sm_createtime;
    console.log(this.idState, 111);
    if (JSON.parse(sessionStorage.getItem("userLoginInfo")).is_face == 0) {
      this.$router.push("/facecheck");
    } else {
    }
  },
  watch: {},
  methods: {
    tip() {
      this.$vux.toast.show({
        type: "success",
        text: "验票成功",
        time: 1000
      });
      setTimeout(() => {
        this.$router.push("/indextab");
      }, 2000);
    },
    IdCard() {
      this.$router.push("/Ucenter/Certification");
      console.log("1111");
    }
  },
  components: {
    Header,
    Tab,
    TabItem,
    Flexbox,
    FlexboxItem
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
  height: 150px;
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
  margin: 0 -80px 30px -70px;
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
.f-right-two {
  height: 15px;
  float: right;
  margin: 22px 2% 0 0;
}
.f-right-two span {
  color: #437dff;
  font-size: 12px;
  float: left;
}
.i-warp-two {
  float: right;
  /* margin-top: 2px; */
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
  margin: 0 auto;
}
.flex-demo p {
  font-size: 14px;
  color: #999faa;
}
/deep/ .yes {
  fill: #2ecc33;
}
/deep/ .no {
  fill: #ccc;
}

.cell-x-icon {
  fill: #437dff;
}
</style>