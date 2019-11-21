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
          <span class="blod">添加商品图片</span>
        </p>
        <UploadImgOne v-on:getHeaderImgUrl="getImgVal" :plus="true" ref="upimg">
          <div slot="bg">
            <div class="up-avata-bg" v-if="!form.goodsPhoto">
              <div class="camera"></div>
            </div>
          </div>
        </UploadImgOne>
      </div>
      <div class="name-wrap">
        <x-input title="商品名称" placeholder="请填写商品名称" type="text" class="name-ipt" v-model="form.goodsName"></x-input>
        <popup-picker
          title="选择类目"
          :data="ChoiceGoodsClass"
          v-model="form.goodsClass"
          @on-show="onShow"
          @on-hide="onHide"
          @on-change="onChange"
          :columns="2"
          show-name
        ></popup-picker>
      </div>
      <div class="Up-wrap">
        <checklist
          title="上架板块"
          label-position="left"
          required
          :options="UpperPlate"
          :max="1"
          v-model="form.UpperPlate"
          @on-change="change"
          style="margin-top:26px"
        ></checklist>
      </div>
      <div class="up-avata">
        <p>
          <span class="blod">添加商品详情页</span>
        </p>
        <UploadImgOne v-on:getHeaderImgUrl="getImgValTwo" :plus="true" ref="upimg">
          <div slot="bg">
            <div class="up-avata-bg" v-if="!form.goodsPhotoDetails">
              <div class="camera"></div>
            </div>
          </div>
        </UploadImgOne>
      </div>
      <div class="price">
        <x-input title="单价" placeholder="请填写商品单价" type="number" :show-clear="false" v-model="form.goodsPrice">
          <p slot="right" style="color:#222222">元</p>
        </x-input>
        <x-input title="库存" placeholder="请填写库存数量" type="number" :show-clear="false" v-model="form.goodsNum">
          <p slot="right" style="color:#222222">件</p>
        </x-input>
        <x-input title="运费" placeholder="请填写运费价格" type="number" :show-clear="false" v-model="form.freight">
          <p slot="right" style="color:#222222">元</p>
        </x-input>

      </div>
      <div class="existing">
        <popup-picker
          title="上链存证"
          :data="ChoiceChain"
          v-model="form.chain"
          @on-show="onShow"
          @on-hide="onHide"
          @on-change="onChange"
          :columns="1"
          show-name
        ></popup-picker>
      </div>
      <div class="button" @click="submit">
        <x-button>立即上架</x-button>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "@/components/common/Header";
    import {XInput, XTextarea, PopupPicker, Checklist, XButton} from "vux";
    import UploadImgOne from "@/components/common/UploadImgOne/UploadImgOne";
    import {JqBsAddGoods} from "@/servers/api";

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "添加商品",
                    showLeftBack: true,
                    showRightMore: false
                },
                //添加商品表单
                form: {
                    //商品图片
                    goodsPhoto: "",
                    //商品名称
                    goodsName: "",
                    //商品类目
                    goodsClass: [],
                    //上架板块
                    UpperPlate: [],
                    //商品详情图片
                    goodsPhotoDetails: "",
                    //商品价格
                    goodsPrice: "",
                    //商品库存
                    goodsNum: "",
                    //运费
                    freight: "",
                    //上链
                    chain: ["1"]

                },
                //选择商品类目
                ChoiceGoodsClass: [
                    {
                        name: 'one',
                        value: '1',
                        parent: 0,
                        id:1
                    },
                    {
                        name: 'two',
                        value: '2',
                        parent: 0,
                        id:2

                    },
                    {
                        name: 'one-one',
                        value: '3',
                        parent: '1',
                        id:3
                    }, {
                        name: 'one-two',
                        value: '4',
                        parent: '1',
                        id:4
                    },
                    {
                        name: 'two-one',
                        value: '5',
                        parent: '2',
                        id:5
                    }, {
                        name: 'two-two',
                        value: '6',
                        parent: '2',
                        id:6
                    },
                ],
                //选择上架板块
                UpperPlate: [
                    {
                        key: '1',
                        value: '地方特色商品',
                    },
                    {
                        key: '2',
                        value: '自营文创产品',
                    },
                ],
                //选择上链存证
                ChoiceChain:
                    [
                        {
                            name: '需要',
                            value: '1',
                            parent: 0
                        },
                        {
                            name: '不需要',
                            value: '0',
                            parent: 0
                        },

                    ]
            };
        },
        computed: {},
        created() {
        },
        mounted() {
            //获取景区商品类目
            this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.shop.getGoodsCates").then(({data})=>{
                console.log(data);
                this.ChoiceGoodsClass = data.data
            })
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
            onHide(type,) {
                console.log("on hide", type);
            },
            //切换上架选择
            change(val, label) {
                console.log("change", val, label);
            },
            //上传商品图片
            getImgVal(val) {
                this.form.goodsPhoto = val;
            },
            //上传商品详情图片图片
            getImgValTwo(val) {
                this.form.goodsPhotoDetails = val;
            },
            //提交添加商品表单
              submit() {
                JqBsAddGoods({
                    //商品名称
                    title: this.form.goodsName,
                    //商品类目
                    cates: this.form.goodsClass[1].toString(),
                    //商品图片
                    image: this.form.goodsPhoto.toArray(),
                    //上架板块
                    on_plate: this.form.UpperPlate.toString(),
                    //商品详情图片
                    content: this.form.goodsPhotoDetails.toArray(),
                    //商品价格
                    marketprice: this.form.goodsPrice,
                    //运费价格
                    dispatchprice: this.form.freight,
                    //商品库存数量
                    total: this.form.goodsNum,
                    //商品上链
                    is_yc:this.form.chain.toLocaleString()

                }).then(res => {
                    console.log(res)
                })
            }

        },
        components: {
            Header,
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
    height: 160px;
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
    margin: 10px auto 10px;

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
