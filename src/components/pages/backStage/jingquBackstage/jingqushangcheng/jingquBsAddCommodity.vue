<template>
  <div class="addCommodity-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="addCommodity-content">
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

      <!--      <div class="jq-photo-wrap">-->
      <!--        <p>添加商品图片</p>-->
      <!--        <ImageUploaderBs></ImageUploaderBs>-->
      <!--      </div>-->
      <div class="name-wrap">
        <x-input title="商品名称" placeholder="请填写商品名称" type="text" class="name-ipt"></x-input>
        <popup-picker
          title="选择类目"
          :data="list1"
          v-model="value1"
          @on-show="onShow"
          @on-hide="onHide"
          @on-change="onChange"
        ></popup-picker>
      </div>
      <div class="Up-wrap">
        <!-- <h3>上架板块</h3>
        <div class="line"></div>-->
        <checklist
          title="上架板块"
          label-position="left"
          required
          :options="commonList"
          :max="1"
          v-model="checklist001"
          @on-change="change"
          style="margin-top:26px"
        ></checklist>
      </div>
      <div class="jq-photo-wrap-two">
        <p>添加商品详情页</p>
        <ImageUploaderBs></ImageUploaderBs>
      </div>
      <div class="price">
        <x-input title="单价" placeholder="请填写商品单价" type="number" :show-clear="false">
          <p slot="right" style="color:#222222">元</p>
        </x-input>
        <x-input title="库存" placeholder="请填写库存数量" type="number" :show-clear="false">
          <p slot="right" style="color:#222222">件</p>
        </x-input>
      </div>
      <div class="freight">
        <popup-picker
          title="运费"
          :data="list2"
          v-model="value2"
          @on-show="onShow"
          @on-hide="onHide"
          @on-change="onChange"
        ></popup-picker>
      </div>
      <div class="existing">
        <popup-picker
          title="上链存证"
          :data="list3"
          v-model="value3"
          @on-show="onShow"
          @on-hide="onHide"
          @on-change="onChange"
        ></popup-picker>
      </div>
      <div class="button">
        <x-button>立即上架</x-button>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "@/components/common/Header";
    import ImageUploaderBs from "@/components/common/ImageUploaderBs";
    import {XInput, XTextarea, PopupPicker, Checklist, XButton} from "vux";
    import UploadImgOne from "@/components/common/UploadImgOne/UploadImgOne";

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "添加商品",
                    showLeftBack: true,
                    showRightMore: false
                },
                form: {
                    tour_path: "",
                    introduce: "",
                    price: "",
                    lowest_time: [],
                    phone: ""
                },

                //选择种类
                list1: [["1", "2", "3"]],
                value1: ["1"],
                //选择包邮
                list2: [["包邮", "不包邮"]],
                value2: ["包邮"],
                //选择上链存证
                list3: [["需要", "不需要"]],
                value3: ["需要"],
                //上架选择
                commonList: ["地方特色商品", "自营文创产品"],
                checklist001: []
            };
        },
        computed: {},
        created() {
        },
        mounted() {
        },
        watch: {},
        methods: {
            //选择种类事件
            onChange(val) {
                console.log("val change", val);
            },
            onShow() {
                console.log("on show");
            },
            onHide(type) {
                console.log("on hide", type);
            },
            //切换上架选择
            change(val, label) {
                console.log("change", val, label);
            },
            //上传头像
            getImgVal(val) {
                this.form.tour_path = val;
            },

        },
        components: {
            Header,
            ImageUploaderBs,
            XInput,
            XTextarea,
            PopupPicker,
            Checklist,
            XButton,
            UploadImgOne

        }
    };
</script>

<style scoped lang="css">
  .addCommodity-wrap {
    height: 100%;
    width: 100%;
    background: #f5f5f5;
    overflow: hidden;
  }

  .addCommodity-content {
    height: 90%;
    width: 100%;
    background: #f5f5f5;
    overflow: hidden scroll;
    margin-top: 46px;
  }

  .jq-photo-wrap {
    width: 92%;
    min-height: 170px;
    background: #ffffff;
    margin: 10px auto 10px;
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

  .jq-photo-wrap-two {
    width: 92%;
    min-height: 170px;
    background: #ffffff;
    margin: 0 auto 10px;
    border-radius: 8px;
    overflow: hidden;
  }

  .jq-photo-wrap-two p {
    font-size: 16px;
    color: #222222;
    font-weight: bold;
    display: block;
    margin: 10px 0 0 4%;
  }

  .name-wrap {
    width: 92%;
    height: 110px;
    background: #ffffff;
    border-radius: 8px;
    margin: 0 auto 10px;
  }

  .Up-wrap {
    width: 92%;
    height: 165px;
    background: #ffffff;
    margin: 0 auto 10px;
    border-radius: 8px;
    overflow: hidden;
  }

  .Up-wrap h3 {
    font-size: 16px;
    color: #222222;
    font-weight: bold;
    display: block;
    margin: 10px 0 10px 4%;
  }

  .line {
    width: 92%;
    height: 1px;
    background: #e5e5e5;
    margin: 0 auto;
  }

  .price {
    width: 92%;
    height: 110px;
    background: #ffffff;
    margin: 0 auto 10px;
    border-radius: 8px;
  }

  .freight {
    width: 92%;
    height: 55px;
    background: #ffffff;
    margin: 0 auto 10px;
    border-radius: 8px;
  }

  .existing {
    width: 92%;
    height: 55px;
    background: #ffffff;
    margin: 0 auto 30px;
    border-radius: 8px;
  }

  .button {
    width: 92%;
    height: 50px;
    border-radius: 8px;
    margin: 0 auto 15px;
  }
</style>
<style lang="less" scoped>
  /deep/ .weui-cell {
    padding: 16px 13px;
  }

  /deep/
  .weui-cells_checkbox
  .weui-check:checked
  + .vux-checklist-icon-checked:before {
    color: #007fff;
  }

  /deep/ button.weui-btn,
  input.weui-btn {
    background: #3976ff;
    color: #ffffff;
  }

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
