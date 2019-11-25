<template>
  <div class="personMsg-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <p class="Preservation" @click="submit">提交</p>
    <div class="up-avata">
      <p>
        <span class="blod">上传个人照片</span>
      </p>
      <UploadImgOne v-on:getHeaderImgUrl="getImgVal" :plus="true" ref="upimg">
        <div slot="bg">
          <div class="up-avata-bg" v-if="!form.tour_path">
            <div class="camera"></div>
          </div>
        </div>
      </UploadImgOne>
    </div>
    <div class="price">
      <x-input
        title="姓名"
        placeholder="请输入导游姓名"
        v-model="form.name"
      ></x-input>
    </div>
    <div class="introduce">
      <x-textarea
        :max="200"
        name="detail"
        placeholder="请输入导游介绍"
        :show-counter="false"
        :height="130"
        :rows="8"
        :cols="30"
        v-model="form.introduce"
      ></x-textarea>
    </div>
    <div class="price">
      <x-input title="每小时价格(元)" placeholder="请输入每小时价格" required type="number" v-model="form.price"></x-input>
    </div>
    <div class="time">
      <popup-picker
        title="最低预约时长/小时"
        :data="list1"
        v-model="form.lowest_time"
        @on-show="onShow"
        @on-hide="onHide"
        @on-change="onChange"
      ></popup-picker>
    </div>
    <div class="price">
      <x-input
        title="联系方式"
        placeholder="请输入联系方式"
        required
        is-type="china-mobile"
        v-model="form.phone"
      ></x-input>
    </div>
  </div>
</template>

<script>
    import Header from "@/components/common/Header";
    import {XInput, XTextarea, PopupPicker} from "vux";
    import UploadImgOne from "@/components/common/UploadImgOne/UploadImgOne";
    import {guideInfor} from "@/servers/api";
    import ImageUploaderBs from "@/components/common/ImageUploaderBs";
    import { JqBsAddGuide } from "@/servers/api";

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "添加导游",
                    showLeftBack: true,
                    showRightMore: false
                },
                form: {
                    //导游头像
                    tour_path: "",
                    //导游姓名
                    name:"",
                    //导游介绍
                    introduce: "",
                    //价格
                    price: "",
                    //最短预约时间
                    lowest_time: [],
                    //联系方式
                    phone: "",
                },
                //最低预约时间
                list1: [["1", "2", "3", "4", "5", "6", "7"]],
            };
        },
        computed: {},
        created() {
        },
        mounted() {
            // //打印导演注册的全局id
            // console.log(
            //     JSON.parse(sessionStorage.getItem("userLoginInfo")).tourguide_id
            // );
        },
        watch: {},
        methods: {
            //提示框
            showTip(conttentTip) {
                this.$vux.toast.text(conttentTip, "middle");
                setTimeout(() => {
                    this.$vux.toast.hide();
                }, 1000);
            },

            onShow() {
                console.log("on show");
            },
            onHide(type) {
                console.log("on hide", type);
            },
            onChange(val) {
                console.log("val change", val);
                // this.lowest_time = val.toString();
                console.log(this.form);
            },
            //上传头像
            getImgVal(val) {
                this.form.tour_path = val;
            },
            //提交表单
            submit() {
                JqBsAddGuide({
                    name:this.form.name,
                    scenic_id: JSON.parse(sessionStorage.getItem("userLoginInfo")).scenic_id,
                    tour_path: this.form.tour_path,
                    introduce: this.form.introduce,
                    price: this.form.price,
                    lowest_time: this.form.lowest_time.toString(),
                    phone: this.form.phone
                }).then(res => {
                    console.log(res);
                    if (res.result == 1) {
                        this.showTip("提交成功");
                        sessionStorage.goback = "yes";
                        this.$router.goBack();
                    } else {
                        this.showTip("请填写完整或检查网络");
                    }
                });
            }
        },
        components: {
            Header,
            XInput,
            XTextarea,
            ImageUploaderBs,
            PopupPicker,
            UploadImgOne
        }
    };
</script>

<style scoped lang="css">
  .personMsg-wrap {
    background: #f0f1f5;
    position: relative;
    overflow: hidden scroll;
  }

  .Preservation {
    display: block;
    position: absolute;
    top: 10px;
    right: 4%;
    font-size: 16px;
    z-index: 9999;
    color: #333333;
  }

  .jq-photo-wrap {
    width: 92%;
    min-height: 170px;
    background: #ffffff;
    margin: 56px auto 10px;
    border-radius: 8px;
    overflow: hidden;
  }

  .jq-photo-wrap p {
    font-size: 16px;
    color: #222222;
    font-weight: bold;
    display: block;
    margin: 10px 0 0 4%;
  }

  .introduce {
    width: 92%;
    height: 150px;
    background: #ffffff;
    border-radius: 8px;
    margin: 0 auto 10px;
  }

  .price {
    width: 92%;
    height: 55px;
    background: #ffffff;
    border-radius: 8px;
    margin: 0 auto 10px;
    padding: 8px 2px;
  }

  .time {
    width: 92%;
    height: 55px;
    background: #ffffff;
    margin: 0 auto 10px;
    border-radius: 8px;
    padding: 8px 2px;
  }

  .time p {
    color: #222222;
    font-size: 16px;
    display: block;
    float: left;
    margin: 16px 0 0 4%;
  }
</style>
<style lang="less" scoped>
  // /deep/ .weui-cell {
  //   padding: 17px 15px;
  // }

  .up-avata {
    padding-bottom: 16px;
    background-color: #fff;
    width: 92%;
    box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.06);
    border-radius: 8px;
    margin: 56px auto 10px;

    p {
      line-height: 45px;
      padding: 0 16px;

      .blod {
        font-weight: 800;
        font-size: 16px;
        color: #222;
      }

      span {
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

    .up-avata-bg {
      width: 90px;
      height: 90px;
      border-radius: 4px;
      background-color: #ebeef5;

      .camera {
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
</style>
