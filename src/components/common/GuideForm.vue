<template>
  <div class="wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="normal-content" :style="conHei">
      <div class="form-main">
        <x-input title="姓名：" is-type="china-name" placeholder v-model="msgList.name"></x-input>
        <x-input title="联系电话：" placeholder v-model="msgList.phone"></x-input>
        <x-textarea name="description" placeholder="请输入留言..." v-model="msgList.content"></x-textarea>

        <popup-picker
          class="pickOne"
          title="选择人数/人"
          :data="this.numList"
          v-model="msgList.chooseList.numValue"
          @on-show="onShow"
          @on-hide="onHide"
          @on-change="onChange"
          placeholder="请选择"
        ></popup-picker>

        <popup-picker
          class="pickTwo"
          title="选择时长/小时"
          :data="this.timeList"
          v-model="msgList.chooseList.timeValue"
          @on-show="onShow"
          @on-hide="onHide"
          @on-change="onChange"
          placeholder="请选择"
        ></popup-picker>

        <!-- <cell title="选择人数" :value="numvalue" is-link></cell>
        <cell title="选择时长" :value="tvalue" is-link></cell>-->
      </div>
    </div>
    <div class="btm-bar">
      <div class="btm-price">
        合计:
        <span class="price">
          ￥
          <i>200.</i>00
        </span>
      </div>
      <x-button @click.native="submit">立即预约</x-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Cell, XButton, XInput, XTextarea, PopupPicker } from "vux";
export default {
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "预约导游",
        showLeftBack: true,
        showRightMore: false
      },
      test: [1],
      newTest: {},
      //导游id
      gId: "",
      //人数列表
      numList: [["1-5", "5-10", "10以上"]],
      //时间列表
      timeList: [["1", "2", "3", "4", "5", "6", "7", "8"]],
      // tvalue: "",
      //人数列表
      objOne: {},
      //时间列表
      objTwo: {},
      msgList: {
        //填写姓名
        name: "",
        //填写手机号
        phone: "",
        //填写内容
        content: "",
        // //选择人数
        // numValue: [],
        // //选择时间
        // timeValue: [],
        chooseList: {
          //选择人数
          numValue: [],
          //选择时间
          timeValue: []
        }
      }
    };
  },
  mounted() {
    console.log(this.$route.query.id);
    this.gId = this.$route.query.id;

    // const obj = {};
    // obj.people = this.msgList.chooseList.numValue[0];
    // // this.msgList.chooseList.numValue[0] = obj.people;
    // console.log(obj);
    // const obj2 = {};
    // obj2.time = this.msgList.chooseList.timeValue[0];
    // // this.msgList.chooseList.timeValue[0] = obj2.time;
    // console.log(obj2);
  },
  methods: {
    //选择器该改变时触发
    onChange(val) {
      //人数
      // const obj = {};
      // obj.people = this.msgList.chooseList.numValue[0];
      // // obj = this.objOne;
      // this.objOne = obj;
      // console.log(this.objOne);
      // //时间
      // const obj2 = {};
      // obj2.time = this.msgList.chooseList.timeValue[0];
      // // obj = this.objTwo;
      // this.objTwo = obj2;
      // console.log(this.objTwo);

      // console.log("val change", val);
    },
    //选择器显示时触发
    onShow() {
      console.log("on show");
    },
    //选择器关闭时触发
    onHide(type) {
      console.log("on hide", type);
    },
    url(link) {
      this.$router.push(link);
    },
    submit() {
      
      this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=tourguide.show.addorder",{
        id:this.$route.query.id,
        realname:this.msgList.name,
        mobile:this.msgList.phone,
        content:this.msgList.content,
        message:{people:this.msgList.chooseList.numValue.toString(),time:this.msgList.chooseList.timeValue.toString()}
      }
            // this.$route.query.id +
            // "&realname=" +
            //  +
            // "&mobile=" +
            // this.msgList.phone +
            // "&message=" +
            // this.msgList.content +
            // "&people=" +
            // this.objOne +
            // "&time=" +
            // this.objTwo
        )
        .then(({ data }) => {
          console.log(data);
        });
    }
  },

  components: {
    Header,
    Cell,
    XInput,
    XButton,
    XTextarea,
    PopupPicker
  },
  computed: {
    conHei() {
      return {
        height: document.documentElement.clientHeight - 45 + "px"
      };
    }
  }
};
</script>
<style lang='css' scoped>
.normal-content {
  width: 100%;
  background: #f5f5f5;
  margin-top: 45px;
  padding: 15px;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;
}
.form-main .weui-cell {
  padding: 15px;
  background-color: #ffffff;
  box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.06);
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 10px;
}
.form-main .weui-cell:before {
  display: none;
}
.form-main /deep/ .weui-label {
  font-size: 16px;
}
.form-main /deep/ .vux-label {
  font-size: 16px;
}
.form-main /deep/ .weui-textarea {
  font-size: 16px;
}
.btm-bar {
  position: fixed;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  height: 55px;
}
.btm-bar .weui-btn_default,
.btm-bar .weui-btn_default:active {
  background-color: #3987ff;
  height: 55px;
  width: 120px;
  color: #ffffff;
  border: 0;
  border-radius: 0;
  margin: 0;
}
.btm-price {
  padding: 0 15px;
  font-size: 16px;
}
.btm-price .price {
  color: #ff3939;
}
.btm-price .price i {
  font-style: normal;
  font-size: 20px;
}
</style>
<style lang="less" scoped>
/deep/ .pickOne {
  background: #fff;
  margin-bottom: 10px;
  border-radius: 8px;
}
/deep/ .pickTwo {
  background: #fff;
  border-radius: 8px;
}
</style>