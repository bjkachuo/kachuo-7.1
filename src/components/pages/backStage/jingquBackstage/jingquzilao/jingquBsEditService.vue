<template>
  <div class="service-wrap">
    <Header
      style="margin-bottom: 46px;"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <p class="Preservation" @click="passMsg">保存</p>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
    ></quill-editor>
  </div>
</template>

<script>
    import Header from "@/components/common/Header";
    import {quillRedefine} from 'vue-quill-editor-upload'
    import {quillEditor} from "vue-quill-editor";
    import {JqBsAddDate} from "@/servers/api";

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "编辑服务项",
                    showLeftBack: true,
                    showRightMore: false
                },
                content: "",
                //图片上传地址
                uploadUrl: "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=util.uploader.uploadm",
                messages: [],
                // editorOption: {
                //     modules: {
                //         toolbar: [
                //             ["image"] // toggled buttons
                //         ]
                //     }
                // }
            }
        },
        computed: {},
        created() {
            //富文本配置内容
            this.editorOption = quillRedefine(
                {
                    // 图片上传的设置
                    uploadConfig: {
                        // 必填参数 图片上传地址
                        action: this.uploadUrl,
                        // 必选参数  res是一个函数，函数接收的response为上传成功时服务器返回的数据
                        // 你必须把返回的数据中所包含的图片地址 return 回去
                        res: (respnse) => {
                            //return图片url
                            console.log(respnse);
                            return respnse.data.files[0].url;
                        },
                        // 可选参数 图片上传方式  默认为post
                        methods: 'POST',
                        // 可选参数 如果需要token验证，假设你的token有存放在sessionStorage
                        token: localStorage.getItem("token"),
                        // 可选参数 文件的参数名 默认为img
                        name: 'file',
                        // 可选参数   图片限制大小，单位为Kb, 1M = 1024Kb
                        size: 500,
                        // 可选参数 可上传的图片格式
                        accept: 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon',
                        // start: function (){}
                        start: () => {
                        },  // 可选参数 接收一个函数 开始上传数据时会触发
                        end: () => {
                        },  // 可选参数 接收一个函数 上传数据完成（成功或者失败）时会触发
                        success: () => {
                            console.log("图片上传成功")
                        },  // 可选参数 接收一个函数 上传数据成功时会触发
                        error: () => {
                            console.log("图片上失败")
                        }  // 可选参数 接收一个函数 上传数据中断时会触发
                    },
                    // 以下所有设置都和vue-quill-editor本身所对应
                    placeholder: '请输入内容...',  // 可选参数 富文本框内的提示语
                    theme: '',  // 可选参数 富文本编辑器的风格
                    toolOptions: ["image"],  // 可选参数  选择工具栏的需要哪些功能  默认是全部
                    handlers: {
                        // 可选参数 重定义的事件，比如link等事件
                        // "Content-Type": "multipart/form-data",
                        // "Authorization": localStorage.getItem("token"),

                    }
                }
            )
            console.log(this.editorOption)
        },
        mounted() {
            //获取景区资料页信息
            this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.manage.scenicGetDate").then(({data}) => {
                console.log(data);
                //照片回显
                this.content = data.data.services;
            })
        },
        watch: {},
        methods: {
            onEditorBlur() {
                console.log("blur", this.messages);
            },

            onEditorFocus() {
                console.log("focus", this.messages);
            },

            onEditorReady() {
                console.log("ready", this.messages);
            },
            onEditorChange() {
                console.log(this.content, this.messages)
            }, // 内容改变事件
            //提交景区服务项
            passMsg() {
                JqBsAddDate({
                    services: this.content
                }).then(res => {
                    console.log(res)
                    if (res.result == 1) {
                        this.$vux.toast.text("修改成功");
                        sessionStorage.goback = "yes";
                        this.$router.goBack();
                    } else if (this.content == "") {
                        this.$vux.toast.text("请添加内容");
                    }

                })

            }

        },
        components: {
            Header,
            quillRedefine,
            quillEditor
        }
    };
</script>

<style scoped lang="css">
  .service-wrap {
    height: 100%;
    width: 100%;
    overflow: hidden scroll;
    position: relative;
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
</style>
<style lang="less" scoped>
  /deep/ .vux-header {
    box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.08);
  }

  /deep/ .ql-editor {
    min-height: 300px;
  }

  /deep/ .ql-container.ql-snow {
    border: none;
  }

  /deep/ .ql-toolbar {
    position: fixed;
    top: 8%;
    left: 78%;
    z-index: 100000;
    border: none;
  }

  /deep/ .ql-snow.ql-toolbar button,
  .ql-snow .ql-toolbar button {
    height: 50px;
  }

  /deep/ .ql-snow.ql-toolbar button svg,
  .ql-snow .ql-toolbar button svg {
    background: white;
    border-radius: 30%;
  }
</style>

