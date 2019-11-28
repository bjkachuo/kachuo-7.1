<template>
  <div class="introduce-wrap">
    <Header
      style="margin-bottom: 46px;box-shadow:0px 10px 20px 0px rgba(0,101,255,0.08);"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <p class="Preservation" @click="passMsg">保存</p>
    <x-input placeholder="请输入资讯标题..." placeholder-align="left" v-model="title"></x-input>
    <div style="width: 92%;height: 1px;background: #E5E5E5;margin: 10px auto 10px;"></div>
    <div class="up-avata">
      <p>
        <span class="blod">上传资讯封面图片</span>
      </p>
      <UploadImgOne v-on:getHeaderImgUrl="getImgVal" :plus="true" ref="upimg">
        <div slot="bg">
          <div class="up-avata-bg" v-if="!coverImg">
            <div class="camera"></div>
          </div>
        </div>
      </UploadImgOne>
    </div>
    <div style="width: 92%;height: 1px;background: #E5E5E5;margin: 10px auto 10px;"></div>
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @change="onEditorChange($event)"
    ></quill-editor>
  </div>

</template>

<script>
    import Header from "@/components/common/Header";
    import {quillRedefine} from 'vue-quill-editor-upload';
    import {quillEditor} from "vue-quill-editor";
    import {JqBsAddInfo} from "@/servers/api";
    import {XInput} from 'vux'
    import UploadImgOne from "@/components/common/UploadImgOne/UploadImgOne";

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "编辑资讯",
                    showLeftBack: true,
                    showRightMore: false
                },
                //测试获取景区资料
                text: "",
                //资讯标题
                title: "",
                //资讯封面
                coverImg: "",
                //富文本内容
                content: "",
                // 必须初始化为对象 init  to Object
                editorOption: {},
                //图片上传地址
                uploadUrl: "https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=util.uploader.uploadm",
                messages: [],
                //测试
                test: "",
                //
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
            console.log(this.$route.query.id)
            //获取景区资讯详情页
            //获取景区资讯列表页
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.msg.scenicInformationMsg&id="+this.$route.query.id).then(({data}) => {
                console.log(data)
                this.title = data.data.title;
                this.content = data.data.content;
                this.coverImg = data.data.image;
                this.$refs.upimg.imgUrl = data.data.image;
            })

        },
        watch: {},
        methods: {
            //上传封面图
            getImgVal(val) {
                this.coverImg = val;
            },
            //获取富文本的文字内容纯文本字符串
            editor() {
                return this.$refs.myQuillEditor.getContents()
            },
            //富文本内容改变时触发
            onEditorChange(editor) {
                console.log(this.content)
                // console.log(this.messages)
                console.log(editor)
                // this.test =  this.$refs.myQuillEditor
                // this.test = this.$refs["edit"].getContents()

                // console.log(this.test)
                // this.test = quill.getContents()
                // console.log(this.test)
            }, // 内容改变事件
            //提交
            passMsg() {
                JqBsAddInfo({
                    //id
                    id:this.$route.query.id,
                    //标题
                    title: this.title,
                    //封面图
                    image: this.coverImg,
                    //富文本内容
                    content: this.content
                }).then(res => {
                    console.log(res)
                    if (res.result == 1) {
                        this.$vux.toast.text("修改成功");
                        sessionStorage.goback = "yes";
                        this.$router.goBack();
                    } else if (this.title == "") {
                        this.$vux.toast.text("请添加标题");
                    }else if(this.coverImg == ""){
                        this.$vux.toast.text("请添加封面图片");
                    }else if(this.content == ""){
                        this.$vux.toast.text("请添加内容");
                    }

                })
            },

        },
        components: {
            Header,
            quillRedefine,
            quillEditor,
            XInput,
            UploadImgOne
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
    top: 38%;
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

  //上传图片样式
  .up-avata {
    padding-bottom: 16px;
    background-color: #fff;
    width: 92%;
    /*box-shadow: 0px 5px 10px 0px rgba(0, 101, 255, 0.06);*/
    border-radius: 8px;
    margin: 10px auto 10px;

    p {
      line-height: 45px;
      padding: 0 0px;

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
