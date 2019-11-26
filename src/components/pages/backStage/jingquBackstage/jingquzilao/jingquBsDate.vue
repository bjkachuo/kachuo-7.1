<template>
  <div class="data-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="photo" style="margin-top: 61px;">
      <div class="line-top">
        <p>景区照片</p>
        <span @click="addPhoto" v-if="this.List.scenic_img ==''">添加</span>
        <span @click="editPhoto" v-if="this.List.scenic_img !==''">编辑</span>
      </div>
      <div class="line-mid"></div>
      <div class="line-bottom">
        <p v-if="this.List.scenic_img !==''">
              <img :src="this.List.scenic_img" style="width:59px;height:59px;margin:6px 0 0 4%;">
        </p>
        <p v-if="this.List.scenic_img ==''">无</p>
      </div>
    </div>
    <div class="photo">
      <div class="line-top">
        <p>景区介绍</p>
        <span @click="addIntroduce" v-if="this.List.introduce ==''">添加</span>
        <span @click="editIntroduce" v-if="this.List.introduce !==''">编辑</span>
      </div>
      <div class="line-mid"></div>
      <div class="line-bottom">
        <p v-if="this.List.introduce==''">无</p>
        <p v-if="this.List.introduce!==''">已添加</p>
      </div>
    </div>
    <div class="photo">
      <div class="line-top">
        <p>服务项</p>
        <span @click="addSevice" v-if="this.List.services ==''">添加</span>
        <span @click="editSevice" v-if="this.List.services !==''">编辑</span>
      </div>
      <div class="line-mid"></div>
      <div class="line-bottom">
        <p v-if="this.List.services ==''">无</p>
        <p v-if="this.List.services !==''">已添加</p>
      </div>
    </div>
    <div class="photo">
      <div class="line-top">
        <p>安全提示</p>
        <span @click="addSecurity" v-if="this.List.security_tips ==''">添加</span>
        <span @click="editSecurity" v-if="this.List.security_tips !==''">编辑</span>
      </div>
      <div class="line-mid"></div>
      <div class="line-bottom">
        <p v-if="this.List.security_tips ==''">无</p>
        <p v-if="this.List.security_tips !==''">已添加</p>
      </div>
    </div>
    <div class="photo" style="height:126px">
      <div class="line-top">
        <p>服务电话</p>
      </div>
      <div class="line-mid"></div>
      <div style="margin: 5px 5% 5px;">
        <p>{{this.phone}}</p>
      </div>
      <div class="line-mid"></div>
      <div class="line-bottom">
        <x-button @click.native="showPlugin3" v-if="List.mobile == ''">+ 添加服务电话</x-button>
        <x-button @click.native="showPlugin3" v-if="List.mobile !== ''">+ 修改服务电话</x-button>
      </div>
    </div>
    <confirm
      v-model="show3"
      show-input
      ref="confirm5"
      title="请输入手机号码"
      @on-cancel="onCancel"
      @on-confirm="onConfirm5"
      @on-show="onShow5"
      @on-hide="onHide"
      :input-attrs="{type: 'number'}"
    ></confirm>
  </div>
</template>

<script>
    import Header from "@/components/common/Header";
    import {Confirm, XButton} from "vux";
    import {JqBsAddDate} from "@/servers/api";

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "景区资料",
                    showLeftBack: true,
                    showRightMore: false
                },
                show3: false,
                phone: "无",
                List: [],
                //富文本测试
                copy:[],
                text:"",
                img:""
            };
        },
        computed: {},
        created() {
        },
        mounted() {

            //获取景区资料页信息
            this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.manage.scenicGetDate").then(({data}) => {
                console.log(data);
                this.List = data.data;
                //获取手机号
                this.phone = data.data.mobile;
                console.log(this.List)
                ////////富文本提取测试
                // this.copy = data.data.introduce;
                //
                // this.copy.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/g, function (match, capture) {
                //     data.push(capture);
                // });
                // console.log(copy);
            })
        },
        methods: {

            //跳转添加景区照片添加页+
            addPhoto() {
                this.$router.push("/jingquBsAddPhoto");
            },
            //跳转添加景区照片编辑页*
            editPhoto() {
                this.$router.push("/jingquBsEditPhoto");
            },

            //跳转景区介绍添加页+
            addIntroduce() {
                this.$router.push("/jingquBsAddIntroduce");
            },
            //跳转景区介绍编辑页*
            editIntroduce() {
                this.$router.push("/jingquBsEditIntroduce");
            },

            //跳转服务项添加页+
            addSevice() {
                this.$router.push("/jingquBsAddService");
            },
            //跳转服务项添加页*
            editSevice() {
                this.$router.push("/jingquBsEditService");
            },

            //跳转安全提示添加页+
            addSecurity() {
                this.$router.push("/jingquBsAddSecurity");
            },
            //跳转安全提示添加页*
            editSecurity() {
                this.$router.push("/jingquBsEditSecurity");
            },

            //点击显示隐藏电话号确认取消框
            showPlugin3() {
                this.show3 = !this.show3;
                console.log("修改手机号");
            },
            onHide() {
                console.log("on hide");
            },
            onCancel() {
                console.log("on cancel");
            },
            onShow5() {
                this.$refs.confirm5.setInputValue("");
            },
            //确认添加手机号
            onConfirm5(value) {
                // this.$refs.confirm5.setInputValue("");
                // this.$vux.toast.text("input value: " + value);
                // this.phone = value;
                //添加手机号
                JqBsAddDate({
                    mobile: value
                }).then(res => {
                    console.log(res)
                    if (res.result == 1) {
                        //获取景区资料列表手机号
                        this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.manage.scenicGetDate").then(({data}) => {
                            this.phone = data.data.mobile;
                            console.log("手机号", this.phone);
                            this.$vux.toast.text("添加成功");
                        })
                    } else if (value == "") {
                        this.$vux.toast.text("请输入手机号");

                    }
                });
                console.log(this.phone, value)
            },
            //刷新列表方法
            Refresh() {
                //获取景区后台导游列表
                this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.manage.scenicGetDate").then(({data}) => {
                    this.List = data.data;
                    console.log("我刷新了列表", this.List);
                })
            }

        },
        components: {
            Header,
            Confirm,
            XButton
        },
        watch: {
            '$route': function (to) {
                if (sessionStorage.goback == "yes") {
                    sessionStorage.goback = ''
                    this.Refresh();
                }
            }

        }

    };
</script>

<style scoped lang="css">
  .data-wrap {
    width: 100%;
    height: 100%;
    background: #f0f1f5;
    overflow: hidden scroll;
  }

  .photo {
    width: 92%;
    min-height: 126px;
    background: #ffffff;
    border-radius: 8px;
    margin: 0 auto 15px;
  }

  .line-top {
    height: 49px;
  }

  .line-top p {
    display: block;
    font-size: 16px;
    float: left;
    color: #222222;
    font-weight: 800;
    margin: 12px 0 0 4%;
  }

  .line-top span {
    display: block;
    float: right;
    font-size: 14px;
    color: #3976ff;
    margin: 14px 4% 0 0;
  }

  .line-mid {
    height: 1px;
    width: 92%;
    background: #f0f1f5;
    margin: 0 auto;
  }

  .line-bottom {
    height: 48px;
  }

  .line-bottom p {
    line-height: 42px;
    font-size: 14px;
    color: #cccccc;
    margin-left: 4%;
  }
</style>
<style lang="less" scoped>
  /deep/ .weui-btn_default {
    margin-top: 8px;
    width: 54%;
    color: #9ebcff;
    font-size: 14px;
    background: rgba(255, 255, 255, 0.5);
  }

  /deep/ .weui-btn:after {
    border: none;
  }
</style>
