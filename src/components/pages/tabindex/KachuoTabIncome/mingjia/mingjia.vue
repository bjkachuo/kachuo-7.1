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
        <x-input title="姓名:" name="username" placeholder="请输入姓名" is-type="china-name" label-width="5em" v-model="form.realname"></x-input>
        <x-input title="手机号码:" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" v-model="form.mobile" mask="999 9999 9999" label-width="5em"></x-input>
        <Address v-on:selectAddress="getSelAddress"></Address>
        <x-input title="详细地址:" name="username" v-model="form.address" placeholder="街道、门牌号等" label-width="5em"></x-input>
        <x-input title="身份证号:" name="username" v-model="form.idcard" placeholder="请输入证件号码" label-width="5em"></x-input>
      </div>
      <div class="master">
        <h2>师承信息</h2>
        <PopupPicker :dataOpion="dataOpE" @givePickerVal="getPickValE"></PopupPicker>
      </div>
      <div class="industry">
        <h2>行业信息</h2>
        <PopupPicker :dataOpion="dataOpF" @givePickerVal="getPickValF"></PopupPicker>
        <PopupPicker :dataOpion="dataOpG" @givePickerVal="getPickValG"></PopupPicker>
      </div>
      <div class="up-avata">
        <p><span class="blod">上传资格认证材料</span></p>
        <UploadImgOne  v-on:getHeaderImgUrl="getAptitude" :plus="true">
          <div slot="bg">
            <div class="up-avata-bg" v-if="!form.aptitude">
              <div class="camera"></div>
            </div>
          </div>
        </UploadImgOne>
      </div>
      <div class="up-avata">
        <p><span class="blod">上传代表作品</span></p>
        <UploadImgOne  v-on:getHeaderImgUrl="getCele_production" :plus="true">
          <div slot="bg">
            <div class="up-avata-bg" v-if="!form.cele_production">
              <div class="camera"></div>
            </div>
          </div>
        </UploadImgOne>
      </div>
      <div class="information">
        <h2>账号信息</h2>
        <x-input title="开户行:" v-model="form.shop_bank" name="username" placeholder="请输入"  label-width="5em"></x-input>
        <x-input title="银行卡:" v-model="form.shop_bank_cardnumber" name="mobile" placeholder="请输入银行卡号码" keyboard="number" label-width="5em"></x-input>
      </div>

      <div class="btn" @click="submit">立即入驻</div>

    </div>
  </div>
</template>

<script>
  import { getUserRule } from "@/servers/api";
  import { formData } from "@/assets/js/tools";
  import Header from "@/components/common/Header";
  import UploadImgOne from "@/components/common/UploadImgOne/UploadImgOne";
  import { XInput } from 'vux'
  import Address from "@/components/common/Address";
  import PopupPicker from "@/components/common/PopupPicker";

  import { postMingjia } from "@/servers/api";


  export default {
      name: "mingjia",

      components:{ Header,UploadImgOne,Address,XInput,PopupPicker },

      data(){
        return{
          TitleObjData: {
            titleContent: "名家入驻",
            showLeftBack: true,
            showRightMore: false
          },

          form:{
            user_path:'',
            realname:'',
            mobile:'',
            region:'',
            address:'',
            idcard:'',
            teacher:'',
            cele_duty:'',
            cele_industry:'',
            aptitude:'',
            cele_production:'',
            shop_bank:'',
            shop_bank_cardnumber:''
          },
          dataOpE: {
            title: "师承",
            columns: 4,
            data: []
          },
          dataOpF: {
            title: "职称/职务",
            columns: 4,
            data: []
          },
          dataOpG: {
            title: "行业",
            columns: 4,
            data: []
          },
        }
      },

      methods:{
        getImgVal(val) {
          this.form.user_path = val;
        },
        getAptitude(val){
          this.form.aptitude = val;
        },
        getCele_production(val){
          this.form.cele_production = val;
        },

        getSelAddress(val) {
          this.form.region = val;
        },
        getPickValE(val) {
          this.form.teacher = val.toString();
        },
        getPickValF(val) {
          this.form.cele_duty = val.toString();
        },
        getPickValG(val) {
          this.form.cele_industry = val.toString();
        },
        getDataList() {
          getUserRule({})
            .then(res => {
              if (res.result === 1) {
                let dataResult = formData(res.data.list);
                console.log(dataResult);
                dataResult.forEach(item => {
                  switch (item.name) {
                    case "师承":
                      this.dataOpE.data = item.data;
                      break;
                    case "职称":
                      this.dataOpF.data = item.data;
                      break;
                    case "行业":
                      this.dataOpG.data = item.data;
                      break;
                    default:
                      return;
                  }
                });
              }
            })
            .catch(err => {
              console.log(err);
            });
        },

        submit(){
          postMingjia({...this.form})
            .then( res  => {
              if (res.result == 1){
                this.showTip('入驻成功')
                this.$router.go(-1)
              }else{
                this.showTip(res.msg)
              }
            })
        },

        showTip(conttentTip) {
          this.$vux.toast.text(conttentTip, "middle")
          setTimeout(() => {
            this.$vux.toast.hide();
          }, 1000)
        }

      },

      mounted() {
         this.getDataList()
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
    }
    .master{
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
    .industry{
      box-shadow:0px 5px 10px 0px rgba(0,101,255,0.06);
      border-radius:8px;
      width: 92%;
      margin: 10px auto;
      background-color: #fff;
      box-sizing: border-box;
      padding: 0 16px;
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
