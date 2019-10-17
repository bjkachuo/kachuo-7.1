<template>
    <div>
      <Header style="margin-bottom: 46px" :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
      <div class="content">
        <div class="up-avata">
          <p><span class="blod">上传头像</span><span>(温馨提示：照片不能大于1M)</span></p>

          <UploadImgOne  v-on:getHeaderImgUrl="getImgVal" :plus="true">
            <div slot="bg">
              <div class="up-avata-bg" v-if="!form.user_path">
                <div class="camera"></div>
              </div>
            </div>
          </UploadImgOne>
        </div>
        <div class="information">
          <h2>基本信息</h2>
          <x-input title="姓名:" name="username" placeholder="请输入姓名" v-model="form.realname" label-width="5em"></x-input>
          <x-input title="手机号码:" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"  v-model="form.mobile" label-width="5em"></x-input>
          <Address v-on:selectAddress="getSelAddress"></Address>
          <x-input title="详细地址:" name="username" v-model="form.address" placeholder="街道、门牌号等" label-width="5em"></x-input>
          <x-input title="身份证号:" name="mobile" keyboard="number" v-model="form.idcard"   label-width="5em"></x-input>
        </div>
        <div class="information">
          <h2>商铺信息</h2>
          <x-input title="商铺名称:" name="username" v-model="form.shop_name" placeholder="请填写商铺名称"  label-width="5em"></x-input>
          <x-input title="经营项目:" name="mobile" v-model="form.shop_project" placeholder="请填写经营项目" keyboard="number" label-width="5em"></x-input>
          <Address v-on:selectAddress="getSelAddress2"></Address>
          <x-input title="详细地址:" name="username" v-model="form.shop_address" placeholder="街道、门牌号等" label-width="5em"></x-input>
        </div>
        <div class="information">
          <h2>账户信息</h2>
          <x-input title="开户行:" name="username" v-model="form.shop_bank" placeholder="请填写商铺名称"  label-width="5em"></x-input>
          <x-input title="银行卡:" name="mobile" v-model="form.shop_bank_cardnumber" placeholder="请填写经营项目" keyboard="number" label-width="5em"></x-input>
        </div>
        <div class="up-avata">
          <p><span class="blod">上传营业资质</span></p>

          <UploadImgOne  v-on:getHeaderImgUrl="gerImgVal2" :plus="true">
            <div slot="bg">
              <div class="up-avata-bg" v-if="!form.shop_business_pic">
                <div class="camera"></div>
              </div>
            </div>
          </UploadImgOne>
        </div>
        <div class="btn" @click="submit">提交申请</div>
      </div>

    </div>
</template>

<script>
  import Address from "@/components/common/Address";
  import Header from "@/components/common/Header";
  import UploadImgOne from "@/components/common/UploadImgOne/UploadImgOne";
  import { XInput } from 'vux'
  import {postShangjia} from "@/servers/api";
    export default {
        name: "shangjia",

        components:{ Header,UploadImgOne,Address,XInput },

        data(){
          return{
            TitleObjData: {
              titleContent: "商家入驻",
              showLeftBack: true,
              showRightMore: false
            },
            maskValueAddress:[],

            form:{
              user_path:'',
              realname:'',
              mobile:'',
              region:'',
              address:'',
              idcard:'',
              shop_name:'',
              shop_project:'',
              shop_region:'',
              shop_address:'',
              shop_bank:'',
              shop_bank_cardnumber:'',
              shop_business_pic:''
            },
          }
        },

        methods:{
          getImgVal(val) {
            this.form.user_path = val;
          },
          gerImgVal2(val){
            this.form.shop_business_pic = val
          },
          getSelAddress(val) {
            this.form.region = val;
          },
          getSelAddress2(val) {
            this.form.shop_region = val;
          },
          showTip(conttentTip) {
            this.$vux.toast.text(conttentTip, "middle")
            setTimeout(() => {
              this.$vux.toast.hide();
            }, 1000)
          },
          submit(){
            postShangjia({ ...this.form })
              .then( res  => {
                if (res.result == 1){
                  this.showTip('入驻成功')
                  this.$router.go(-1)
                }else{
                  this.showTip(res.msg)
                }
              })
          },
        }
    }
</script>
<style scoped>
  .content{
    height: calc(100% - 46px)
  }
</style>
<style scoped lang="less">

  .content{
    background-color: #f5f5f5;
    overflow-y: scroll;
    h2{
      color: #222;
      font-weight: 800;
      font-size: 16px;
      line-height: 44px;
    }
    .up-avata{
      padding-bottom: 16px;
      background-color: #fff;
      width: 92%;
      box-shadow:0px 5px 10px 0px rgba(0,101,255,0.06);
      border-radius:8px;
      margin: 15px auto 10px;
      p{
        line-height: 45px;
        padding: 0 16px;
        .blod{
          font-weight: 800;
          font-size: 16px;
          color: #222;
        }
        span{
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
    }
    .information{
      box-shadow:0px 5px 10px 0px rgba(0,101,255,0.06);
      border-radius:8px;
      width: 92%;
      margin: 10px auto;
      background-color: #fff;
      box-sizing: border-box;
      padding: 0 16px;
      /deep/.weui-cell{
        padding: 16px 15px;
      }
      /deep/.weui-cells{
        margin-top: 0;
      }
    }
    .btn{
      background-color: #3976FF;
      color: #fff;
      border-radius: 8px;
      width: 92%;
      line-height: 50px;
      margin: 28px auto 15px;
      text-align: center;
      font-size: 16px;
    }
  }
</style>
