<template>
  <div class="add-address-wrap">
    <Header
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>


      <div class="normal-content" :style="conHei">
        <div class="addr-card">
          <x-input title="收货人：" v-model="maskValueName" :max="10" placeholder="请填写收货人姓名"></x-input>
          <x-input title="手机号码：" v-model="maskValuePhone" :max="11" placeholder="请填写收货人手机号码"></x-input>
          <Address style="height:52px;line-height:24px;font-size:14px" v-on:selectAddress="getSelAddress" class="custom" ref="address"></Address>
          <x-input title="详细地址：" v-model="maskValueDetails" placeholder="街道、楼牌号等"></x-input>
        </div>
        <div class="addr-card">
          <x-switch title="设为默认地址" :value-map="['0', '1']" v-model="isdefault"></x-switch>
        </div>
      </div>
      <div class="end-button">
        <x-button @click.native="formateData">保存地址</x-button>
      </div>

    </div>

</template>

<script>
import Header from "@/components/common/Header";
import Address from "@/components/common/Address";
import CheckList from "@/components/common/CheckList";
import { updateAddress ,getAddressDetail} from "@/servers/api";
import { XButton, XInput, Group,XSwitch } from "vux";

export default {
  name: "",

  data() {
    return {
      TitleObjData: {
        titleContent: "添加地址",
        showLeftBack: true,
        showRightMore: false
      },
      maskValueName: "",
      maskValuePhone: "",
      maskValueDetails: "",
      maskValueAddress: [],
      isdefault:'0',
    };
  },

  components: {
    Header,
    CheckList,
    XButton,
    XInput,
    Group,
    XSwitch,
    Address
  },

  computed: {
    conHei() {
      return { height: document.documentElement.clientHeight - 45 + "px" };
    }
  },

  mounted() {
    if(this.$route.query.id){
      this.TitleObjData.titleContent = "修改地址"

      getAddressDetail({id:this.$route.query.id}).then(res=>{
        console.log(this.$refs.address);
        this.$refs.address.showAxiosData(res.data)

        this.maskValueAddress = res.data.province+','+res.data.city+','+res.data.area
        this.maskValueName = res.data.realname
        this.maskValuePhone = res.data.mobile
        this.maskValueDetails = res.data.address
        this.isdefault = res.data.isdefault
      })

    }
  },

  methods: {

    formateData() {
      if (!this.maskValueName) {
        this.showTip("请输入收货人姓名");
        return;
      } else if (!this.maskValuePhone) {
        this.showTip("请输入收货人手机号");
        return;
      } else if (!this.maskValueAddress.length) {
        this.showTip("请选择地区");
        return;
      } else if (!this.maskValueDetails) {
        this.showTip("请输入详细地址");
        return;
      } else {
        this.updateAddressData();
      }
    },
    updateAddressData() {
      updateAddress({
        id:this.$route.query.id,
        tel: this.maskValuePhone,
        realname: this.maskValueName,
        mobile: this.maskValuePhone,
        province: this.maskValueAddress.split(',')[0],
        city: this.maskValueAddress.split(',')[1],
        area: this.maskValueAddress.split(',')[2],
        address: this.maskValueDetails,
        isdefault:this.isdefault
      })
        .then(res => {
          if (res.result === 1) {
            this.$vux.toast.show({
              type: "success",
              text: "添加成功",
              time: 1000,
              isShowMask: true,
              onHide: () => {
                this.$store.state.address ++
                this.$router.goBack();
              }
            });
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getSelAddress(val) {
      this.maskValueAddress = val;
    },
    showTip(conttentTip) {
      this.$vux.toast.text(conttentTip, "middle");
      setTimeout(() => {
        this.$vux.toast.hide();
      }, 1000);
    }
  },

  watch: {
      "$route": function(to){
        this.maskValueAddress = []
        this.getSelAddress()
      }
  }
};
</script>
<style lang='less' scoped>
  .custom/deep/.weui-cell{
    padding: 15px 15px;
  }
  .normal-content{
    width: 100%;
    background: #F5F5F5;
    margin-top: 45px;
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
    padding: 15px 0;
  }
  .addr-card{
    margin-bottom: 10px;
    background-color: #FFFFFF;
    border-radius: 8px;
    overflow: hidden;
  }
  .addr-card .weui-cell{
    padding: 15px;
  }
  .addr-card /deep/ .vux-popup-picker-select{
    text-align: left!important
  }
  .addr-card /deep/ .weui-label{
    width: 84px!important
  }
  .demo1-item{
    text-align: center;
    width: 70px;
    border: 1px solid #CCCCCC;
    height: 28px;
    border-radius: 28px;
  }
  .demo1-item{
    text-align: center;
    line-height: 28px;
    margin-right: 15px;
    width: 70px;
    border: 1px solid #CCCCCC;
    height: 28px;
    border-radius: 28px;
  }
  .demo1-item-selected{
    background-color: #3976FF;
    border: 1px solid #3976FF;
    color: #FFFFFF;
  }
  .addr-card /deep/ .weui-switch:checked,
  .addr-card /deep/ .weui-switch-cp__input:checked ~ .weui-switch-cp__box{
    border-color: #3976FF;
    background-color: #3976FF;
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
</style>
