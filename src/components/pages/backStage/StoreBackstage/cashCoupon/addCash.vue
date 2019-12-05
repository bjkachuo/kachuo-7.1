<template>
  <div class="index-wrap">
    <Header
      style="margin-bottom: 0px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <div class="line-one">
      <cell title="价格信息"></cell>
      <popup-picker title="券面额" :data="list1" v-model="facePrice" @on-show="onShow" @on-hide="onHide"
                    @on-change="onChange" placeholder="请选择" :columns="1" show-name></popup-picker>
      <x-input title="卷售价" placeholder="请输入代金券出售价格" :show-clear="false" v-model="price">
        <template slot="right">元</template>
      </x-input>
    </div>
    <div class="line-two">
      <cell title="使用条件"></cell>
      <popup-picker title="使用时间" :data="list2" v-model="time" @on-show="onShow" @on-hide="onHide" @on-change="onChange"
                    placeholder="请选择" :columns="1" show-name></popup-picker>
      <popup-picker title="适用范围" :data="list3" v-model="range" @on-show="onShow" @on-hide="onHide" @on-change="onChange"
                    placeholder="请选择" :columns="1" show-name></popup-picker>
      <popup-picker title="使用限制" :data="list4" v-model="limit" @on-show="onShow" @on-hide="onHide" @on-change="onChange"
                    placeholder="请选择" :columns="1" show-name></popup-picker>
    </div>
    <div class="line-three">
      <cell title="有效期" value="自售出日起一年"></cell>
    </div>
    <div class="button-wrap" v-if="facePrice =='' || price ==''|| time ==''||range ==''||limit ==''">添加</div>
    <div class="button-wrap-two" v-else @click="Submit">添加</div>
  </div>
</template>
<script>
    import Header from "@/components/pages/backStage/StoreBackstage/BsHederWhite";
    import {Cell, Group, PopupPicker, XInput} from 'vux'
    //商家后台添加购物券功能
    import {StoreBsAddCash} from "@/servers/api";

    export default {
        props: {},
        data() {
            return {
                cur: 0, //默认选中第一个tab
                TitleObjData: {
                    titleContent: "添加",
                    showLeftBack: true,
                    showRightMore: false
                },
                //券面额选项
                list1: [
                    {
                        name: '10元',
                        value: '1',
                        parent: 0
                    },
                    {
                        name: '20元',
                        value: '2',
                        parent: 0
                    },
                    {
                        name: '30元',
                        value: '3',
                        parent: 0
                    },
                    {
                        name: '50元',
                        value: '4',
                        parent: 0
                    },
                    {
                        name: '100元',
                        value: '5',
                        parent: 0
                    },

                ],
                //券面额
                facePrice: [],
                //输入的券售价
                price: "",
                //使用时间选项
                list2: [
                    {
                        name: '周一至周五',
                        value: '1',
                        parent: 0
                    },
                    {
                        name: '周六、周日',
                        value: '2',
                        parent: 0
                    },
                    {
                        name: '周一至周日',
                        value: '3',
                        parent: 0
                    }
                ],
                //时间选项
                time: [],
                //适用范围选项
                list3: [
                    {
                        name: '全场可用',
                        value: '1',
                        parent: 0
                    },
                    {
                        name: '部分商品可用',
                        value: '2',
                        parent: 0
                    },
                ],
                //适用范围
                range: [],
                //使用限制选项
                list4: [
                    {
                        name: '不限张数',
                        value: '1',
                        parent: 0
                    },
                    {
                        name: '单次可使用1张',
                        value: '2',
                        parent: 0
                    },
                    {
                        name: '单次可使用2张',
                        value: '3',
                        parent: 0
                    },
                    {
                        name: '单次可使用3张',
                        value: '4',
                        parent: 0
                    },

                ],
                //使用限制
                limit: [],
            }
        },
        computed: {},
        watch: {},
        methods: {
            //提示框
            showTip(conttentTip) {
                this.$vux.toast.text(conttentTip, "middle");
                setTimeout(() => {
                    this.$vux.toast.hide();
                }, 1000);
            },
            onChange(val) {
                console.log('val change', val)
            },
            onShow() {
                console.log('on show')
            },
            onHide(type) {
                console.log('on hide', type)
            },
            //提交
            Submit() {
                // alert("可以提交啦！！！");
                StoreBsAddCash({
                    //优惠券面额
                    coupon_type: this.facePrice.join(),
                    //输入的价格
                    price: this.price,
                    //时间选项
                    use_date: this.time.join(),
                    //使用范围
                    use_range: this.range.join(),
                    //使用限制
                    use_number: this.limit.join()
                }).then(res => {
                    console.log(res);
                    if (res.result == 1) {
                        this.showTip("添加成功");
                        sessionStorage.goback = "yes";
                        this.$router.goBack();
                    }else {
                        this.showTip("错误");
                    }
                })
            }
        },
        components: {
            Header,
            Cell,
            Group,
            PopupPicker,
            XInput
        },
        filters: {}
    }
</script>

<style scoped lang="css">
  .index-wrap {
    height: 100%;
    width: 100%;
    background: #f5f5f5;
    overflow: hidden scroll;
  }

  .line-one {
    width: 92%;
    height: 135px;
    background: #FFFFFF;
    margin: 56px auto 10px;
    border-radius: 8px;
  }

  .line-two {
    width: 92%;
    height: 180px;
    background: #FFFFFF;
    margin: 0px auto 10px;
    border-radius: 8px;
  }

  .line-three {
    width: 92%;
    height: 44.5px;
    background: #FFFFFF;
    margin: 0px auto 10px;
    border-radius: 8px;
  }

  .button-wrap {
    width: 92%;
    height: 45px;
    color: #FFFFFF;
    background: #CCCCCC;
    text-align: center;
    line-height: 45px;
    font-size: 14px;
    position: fixed;
    bottom: 15px;
    left: 4%;
    border-radius: 8px;
  }

  .button-wrap-two {
    background: #3976FF;
    width: 92%;
    height: 45px;
    color: #FFFFFF;
    text-align: center;
    line-height: 45px;
    font-size: 14px;
    position: fixed;
    bottom: 15px;
    left: 4%;
    border-radius: 8px;
  }
</style>
<style scoped lang="less">
  /deep/ .weui-cell {
    padding: 12px 15px;
  }
</style>
