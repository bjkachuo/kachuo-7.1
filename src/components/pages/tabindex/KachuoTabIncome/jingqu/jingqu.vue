<template>
    <div>
      <Header style="margin-bottom: 46px" :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
      <div class="content">
        <div class="up-avata">
          <p><span class="blod">上传申请人头像</span><span>(温馨提示：照片不能大于1M)</span></p>
          <UploadImgOne  v-on:getHeaderImgUrl="getUser_path" :plus="true">
            <div slot="bg">
              <div class="up-avata-bg" v-if="!form.user_path">
                <div class="camera"></div>
              </div>
            </div>
          </UploadImgOne>
        </div>
        <div class="information">
          <h2>基本信息</h2>
          <x-input title="姓名:" v-model="form.realname" placeholder="请输入姓名" is-type="china-name" label-width="5em"></x-input>
          <x-input title="手机号码:" v-model="form.mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"  mask="999 9999 9999" label-width="5em"></x-input>
          <Address v-on:selectAddress="getSelAddressG"></Address>
          <x-input title="详细地址:" v-model="form.address" placeholder="街道、门牌号等" label-width="5em"></x-input>
          <x-input title="身份证号:" v-model="form.idcard" keyboard="number" is-type="china-mobile"  label-width="5em"></x-input>
        </div>
        <div class="up-avata">
          <p><span class="blod">上传景区资质</span></p>
          <UploadImgOne  v-on:getHeaderImgUrl="getAptitude" :plus="true">
            <div slot="bg">
              <div class="up-avata-bg" v-if="!form.aptitude">
                <div class="camera"></div>
              </div>
            </div>
          </UploadImgOne>
        </div>
        <div class="information">
          <h2>景区信息</h2>
          <x-input title="景区名称:" v-model="form.scenic_title" placeholder="请输入姓名" is-type="china-name" label-width="5em"></x-input>
          <Address v-on:selectAddress="getSelAddress"></Address>
          <PopupPicker :dataOpion="dataOpF" @givePickerVal="getPickValF"></PopupPicker>
          <PopupPicker :dataOpion="dataOpG" @givePickerVal="getPickValG"></PopupPicker>
          <PopupPicker :dataOpion="dataOpH" @givePickerVal="getPickValH"></PopupPicker>
          <x-input title="景点数量:" v-model="form.scenic_num"  label-width="5em"></x-input>
          <x-input title="年游客量:" v-model="form.year_num" placeholder="街道、门牌号等" label-width="5em"></x-input>
        </div>
        <div class="btn" @click="submit">提交申请</div>
      </div>
    </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import PopupPicker from "@/components/common/PopupPicker";
  import { XInput } from 'vux'
  import UploadImgOne from "@/components/common/UploadImgOne/UploadImgOne";
  import Address from "@/components/common/Address";
  import { getUserRule,postJingqu } from "@/servers/api";
  import { formData } from "@/assets/js/tools";
    export default {
        name: "scenicSpot",

        components:{ Header,UploadImgOne,Address,PopupPicker,XInput },

        data(){
          return{
            TitleObjData: {
              titleContent: "景区入驻",
              showLeftBack: true,
              showRightMore: false
            },

            form:{
              scenic_title:'',
              region:'1',
              user_path:'',
              aptitude:'',
              realname:'',
              idcard:'',
              address:'',
              cele_industry:'',
              cele_duty:''
            },
            maskValueAddress:[],
            pickValF:[],
            pickValG:[],
            dataOpE:{

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
            dataOpH: {
              title: "等级",
              columns: 1,
              data: [
                {name:"5A", parent:"0", value:"5"},
                {name:"4A", parent:"0", value:"4"},
                {name:"3A", parent:"0", value:"3"},
                {name:"2A", parent:"0", value:"2"},
                {name:"1A", parent:"0", value:"1"},
                ]
            },

          }
        },

        mounted(){
          this.getDataList()
        },

        methods:{
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
                console.log(err)
              })
          },

          submit(){
            postJingqu({...this.form})
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
          },

          getUser_path(val) {
            this.form.user_path = val
          },
          getAptitude(val){
            this.form.aptitude = val
          },
          getSelAddressG(val) {
            this.form.region = val.toString();
          },
          getSelAddress(val) {
            this.form.location = val.toString();
          },
          getPickValF(val) {
            this.form.cele_duty = val.toString();
          },
          getPickValG(val) {
            this.form.cele_industry = val.toString();
          },
          getPickValH(val){
            this.form.scenic_level = val.toString();
          }
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
