<template>
  <div class="introduce-wrap">
    <Header
      style="margin-bottom: 46px;box-shadow:0px 10px 20px 0px rgba(0,101,255,0.08);"
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
      @change="onEditorChange($event)"
    ></quill-editor>
  </div>
</template>

<script>
    import Header from "@/components/common/Header";
    import {quillRedefine} from 'vue-quill-editor-upload'
    import {quillEditor} from "vue-quill-editor";
    import {saveJqData} from "@/servers/api";


    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "发布资讯",
                    showLeftBack: true,
                    showRightMore: false
                },
                //测试获取景区资料
                text: "",
                content: "",
                // 必须初始化为对象 init  to Object
                editorOption: {},
                //图片上传地址
                uploadUrl:"https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=util.uploader.uploadm",
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
                            return  respnse.data.files[0].url;
                        },
                        // 可选参数 图片上传方式  默认为post
                        methods: 'POST',
                        // 可选参数 如果需要token验证，假设你的token有存放在sessionStorage
                        token:localStorage.getItem("token"),
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
                console.log(this.content,this.messages)
            }, // 内容改变事件
            //提交
            passMsg() {
                saveJqData({
                    introduce: JSON.stringify(this.content)
                }).then(res => {
                    console.log(res)
                    //测试获取景区资料
                    this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.manage.scenicGetDate&introduce").then(({data}) => {
                        console.log(data)
                        this.text = data.data.introduce;
                        // this.text = this.delHtml(this.text);
                        console.log(this.delHtml(this.text))
                        //
                    })

                })
            },
            //富文本转译
            /*
                        delHtml(origStr){
                            var delStr = "";
                            if(origStr.length == 0) return "";
                            // 只针对以上富文本内容做了匹配替换处理，当然你也可以根据具体的内容再加处理逻辑。
                            // g表示替换所有的&lt;
                            // gi表示忽略大小写替换所有的&lt;
                            // 只有&lt的话，表示只替换第一个&lt;
                            delStr = origStr.replace(/&lt;/g,"<");
                            delStr = delStr.replace(/&gt;/g,">");
                            delStr = delStr.replace(/&quot;/g,"'");
                            return delStr;
                        },
            */
        },
        components: {
            Header,
            quillRedefine,
            quillEditor

        }
    };
</script>

<style scoped lang="css">
  .introduce-wrap {
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
<style scoped lang="less">
  /deep/ .vux-header {
    box-shadow: 0px 10px 20px 0px rgba(0, 101, 255, 0.08);
  }

  // /deep/ .weui-textarea {
  //   min-height: 600px;
  // }
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
