<template>
  <div class="wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="normal-content" :style="conHei">
      <div class="tab-card">
        <x-textarea :max="120" placeholder="快说说您对我们有什么建议或者想要反馈的 问题吧" ></x-textarea>
      </div>
      <div class="tab-card">
        <div class="upload-cells">
          <div class="upl-text">上传图片</div>

            <UploadImgOne  v-on:getHeaderImgUrl="getImgVal" :plus="true" class="class">
              <div slot="bg">
                <div class="up-avata-bg">
                  <div class="camera"></div>
                </div>
              </div>
            </UploadImgOne>

        </div>
      </div>
      <div class="tab-card input-card ">
        <x-input title="电话" v-model="maskValue" placeholder="请留下电话方便我们后续与您联系" @on-change="onChange()">
        </x-input>
      </div>
    </div>
    <div class="end-button">
      <x-button :disabled="disable001">提交</x-button>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import UploadImgOne from "@/components/common/UploadImgOne/UploadImgOne";
  import { Cell ,XInput,XButton,XTextarea} from 'vux'
  export default {
    data() {
      return {
        TitleObjData: {
          titleContent: "意见反馈",
          showLeftBack: true,
          showRightMore: false
        },
        disable001:true,
        maskValue:'',
      };
    },
    methods:{
      onChange(){
        if (this.maskValue != "") {
          console.log('1111')
          this.disable001 = false
        } else{
          console.log('222')
          this.disable001 = true
        }
      },
      getImgVal(val) {
        console.log(val);
        this.imgUrl = val;
      },
    },
    components: {
      Header,
      Cell,
      XInput,
      XTextarea,
      XButton,
      UploadImgOne
    },
    computed: {
      conHei() {
        return { height: document.documentElement.clientHeight - 45 + "px" };
      }
    },
  };
</script>
<style lang='less' scoped>

    .class{
      margin-left: -16px;
    }
    .upload-img {
      width: 94px;
      height: 94px;
      display: inline-block;
      object-fit: cover;
      margin: 0 0 0 20px;
    }
    .up-avata-bg{
      width: 90px;
      height: 90px;
      border-radius: 4px;
      background-color: #EBEEF5;
      .camera{
        width: 46px;
        height: 46px;
        margin: 0 auto;
        position: relative;
        top: 22px;
        background-image: url("./camera.png");
        background-size: 100% 100%;
      }
    }
  .normal-content{
    width: 100%;
    background: #F5F5F5;
    margin-top: 45px;
    overflow: hidden;
    overflow-y: scroll;
    padding: 15px;
    box-sizing: border-box;
  }

  .tab-card{
    background:rgba(255,255,255,1);
    box-shadow:0px 5px 10px 0px rgba(0,101,255,0.04);
    border-radius:8px;
    overflow: hidden;
    margin-bottom: 15px;
  }
  .tab-card .weui-cell{
    padding: 15px;
  }
  .gar-photo{
    width: 90px;
    height: 90px;
    margin-right: 15px;
  }
  .gar-photo img{
    width: 90px;
    height: 90px;
    border-radius: 4px;
  }
  .tab-card .weui-btn{
    border-radius: 35px;
    height: 35px;
    width: 90px;
    font-size: 14px;
    margin: 0;
  }
  .tab-card .weui-btn:after{
    display: none;
  }
  .btn-blue{
    color: #fff;
    background:linear-gradient(90deg,rgba(57,118,255,1) 0%,rgba(57,150,255,1) 100%);
  }
  .gar-title{
    font-size: 14px;
  }
  .gar-body{
    height: 90px;
    line-height: 1.4;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    flex-direction:column
  }
  .gar-price{
    margin-top: 10px;
    font-size: 12px;
  }
  .gar-price span{
    font-size: 14px;
  }
  .input-card .weui-label{
    font-size: 16px;
  }

  /* button */
  .end-button{
    padding: 0 15px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
  }
  .end-button .weui-btn,
  .end-button .weui-btn:active{
    border: 0;
    width: 100%;
    background-color: #3976FF;
    color: #FFFFFF;
  }
  .end-button .weui-btn_disabled{
    opacity: .5;
  }
  .upload-cells{
    padding: 15px;
  }
  .upl-text{
    font-size: 16px;
    margin-bottom: 10px;
  }
  .upload-cell{
    width: 90px;
    height: 90px;
    border-radius: 4px;
    background-color: #EBEEF5;
  }
</style>



<!--<template>-->
<!--  <div class="opinion-wrap">-->
<!--    <Header-->
<!--      :titleContent="TitleObjData.titleContent"-->
<!--      :showLeftBack="TitleObjData.showLeftBack"-->
<!--      :showRightMore="TitleObjData.showRightMore"-->
<!--    ></Header>-->
<!--    <div class="opinion-con" :style="conHei">-->
<!--      <group>-->
<!--        <x-textarea-->
<!--          class="input-font-size"-->
<!--          v-model="val"-->
<!--          :max="999"-->
<!--          :rows="5"-->
<!--          placeholder="写下您的意见，方便我们及时改进～"-->
<!--          @on-change="onEvent('focus')"-->
<!--        ></x-textarea>-->
<!--      </group>-->
<!--      <x-button type="primary" class="sub-btn" @click.native="subBtnFn">提交</x-button>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--import Header from "@/components/common/Header";-->
<!--import { Group, XTextarea, XButton } from "vux";-->
<!--import { OpinionBack } from "@/servers/api";-->
<!--export default {-->
<!--  name: "",-->
<!--  props: [""],-->
<!--  data() {-->
<!--    return {-->
<!--      TitleObjData: {-->
<!--        titleContent: "意见反馈",-->
<!--        showLeftBack: true,-->
<!--        showRightMore: false-->
<!--      },-->
<!--      val: ""-->
<!--    };-->
<!--  },-->

<!--  components: {-->
<!--    Header,-->
<!--    XTextarea,-->
<!--    Group,-->
<!--    XButton-->
<!--  },-->

<!--  computed: {-->
<!--    conHei() {-->
<!--      return { height: document.documentElement.clientHeight - 45 + "px" };-->
<!--    }-->
<!--  },-->

<!--  beforeMount() {},-->

<!--  mounted() {},-->

<!--  methods: {-->
<!--    foc(){-->
<!--      alert(1)-->
<!--    },-->
<!--    onEvent(event) {-->
<!--      // console.log(this.val);-->
<!--    },-->
<!--    subBtnFn() {-->
<!--      if (this.val) {-->
<!--        console.log(this.val);-->
<!--        OpinionBack({-->
<!--          content: this.val,-->
<!--        })-->
<!--          .then(res => {-->
<!--            if (res.result === 1) {-->
<!--              this.$vux.alert.show({-->
<!--                title: "成功",-->
<!--                content: "感谢您的反馈",-->
<!--                onHide: () => {-->
<!--                  this.$router.goBack();-->
<!--                }-->
<!--              });-->
<!--            }-->
<!--          })-->
<!--          .catch(err => {-->
<!--            console.log(err);-->
<!--          });-->
<!--      } else {-->
<!--        this.$vux.toast.show({-->
<!--          type: "text",-->
<!--          text: "请输入内容",-->
<!--          time: 1000,-->
<!--          position: "top"-->
<!--        });-->
<!--      }-->
<!--    }-->
<!--  },-->

<!--  watch: {}-->
<!--};-->
<!--</script>-->
<!--<style lang='css' scoped>-->
<!--.opinion-wrap {-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  overflow: hidden;-->
<!--}-->
<!--.opinion-con {-->
<!--  width: 100%;-->
<!--  background: #f9f9f9;-->
<!--  margin-top: 50px;-->
<!--  overflow: hidden;-->
<!--  overflow-y: scroll;-->
<!--  padding: 15px;-->
<!--  box-sizing: border-box;-->
<!--}-->
<!--.input-font-size {-->
<!--  font-size: 16px;-->
<!--}-->
<!--.sub-btn {-->
<!--  width: 80%;-->
<!--  margin-top: 80px;-->
<!--}-->

<!--</style>-->
