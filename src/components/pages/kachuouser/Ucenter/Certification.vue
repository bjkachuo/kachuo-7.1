<template>
<div class="wrap">
<Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
      <div class="cert-panel">
        <div class="cert-hd">上传身份证</div>
        <div class="cert-body">
          <flexbox :gutter="15" class="cert-flex">
            <flexbox-item>
              <div class="cert-photo">
                <img src="./card1.png" alt="">
              </div>
              <div class="text">身份证正面</div>
            </flexbox-item>
            <flexbox-item>
              <div class="cert-photo">
                <img src="./card2.png" alt="">
              </div>
              <div class="text">身份证背面</div>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
      <div class="cert-foot">
        <span class="text">信息已加密，仅用于身份认证</span>
      </div>
      <div class="end-button">
        <x-button>提交</x-button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import { Flexbox, FlexboxItem,XButton } from 'vux'
import UploadImgOne from "@/components/common/UploadImgOne/UploadImgOne";
export default {
  name: "",
  props: [""],
  data() {
    return {
      TitleObjData: {
        titleContent: "实名认证",
        showLeftBack: true,
        showRightMore: false
      },
    };
  },
  components: {
    Header,
    Flexbox,
    XButton,
    FlexboxItem
  },
  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },
};
</script>
<style lang='css' scoped>
.normal-content{
  width: 100%;
  background: #F5F5F5;
  margin-top: 45px;
  overflow: hidden;
  overflow-y: scroll;
  padding: 15px;
  box-sizing: border-box;
}
.cert-panel{
  background-color: #FFF;
  box-shadow:0px 10px 20px 0px rgba(0,101,255,0.06);
  border-radius:8px;
  overflow: hidden;
  padding: 15px;
}
.cert-hd{
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
}
.cert-foot{
  text-align: center;
  margin-top: 30px;
}
.cert-foot .text{
  display: inline-block;
  line-height: 1;
  color: #CCCCCC;
  font-size: 12px;
  padding-left: 20px;
  line-height: 16px;
  /*background: url(../../../assets/images/zzrz.png) left center no-repeat;*/
  background-size: contain;
}
.cert-flex{
  text-align: center;
}
.cert-flex .text{
  font-size: 14px;
  margin-top: 10px;
}
.cert-photo{
  overflow: hidden;
  border-radius: 8px;
  border: 1px solid #e9edf3;
}
.cert-photo img{
  height: 88px;
  width: 100%;
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
</style>
