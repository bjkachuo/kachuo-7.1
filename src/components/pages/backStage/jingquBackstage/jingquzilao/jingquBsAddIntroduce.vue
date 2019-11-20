<template>
  <div class="introduce-wrap">
    <Header
      style="margin-bottom: 46px;box-shadow:0px 10px 20px 0px rgba(0,101,255,0.08);"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <p class="Preservation" @click="passMsg">保存</p>
    <!-- <x-textarea placeholder="请输入内容..." :show-counter="false" :rows="1" autosize></x-textarea> -->
    <quill-editor
      v-model="content"
      ref="myQuillEditor"
      :options="editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
      @change="onEditorChange($event)"
    ></quill-editor>
    <div v-html="this.text"></div>
    {{this.content}}
  </div>
</template>

<script>
    import Header from "@/components/common/Header";
    // import { XTextarea } from "vux";
    import {quillEditor} from "vue-quill-editor";
    import {saveJqData} from "@/servers/api";


    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "景区介绍",
                    showLeftBack: true,
                    showRightMore: false
                },
                //测试获取景区资料
                text: "",
                content: "",
                messages: [],
                editorOption: {
                    modules: {
                        toolbar: [
                            ["image"] // toggled buttons
                        ]
                    }
                }
            };
        },
        computed: {},
        created() {
        },
        mounted() {
            // //测试获取景区资料
            // this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.manage.scenicGetDate&introduce").then(({data})=>{
            //     console.log(data)
            //     this.text=data.data.introduce;
            //
            // })
        },
        watch: {

        },
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
            onEditorChange(){
                console.log(this.content)
            }, // 内容改变事件
            passMsg() {
                saveJqData({
                    introduce: JSON.stringify(this.content)
                }).then(res => {
                    console.log(res)
                    //测试获取景区资料
                    this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.manage.scenicGetDate&introduce").then(({data})=>{
                        console.log(data)
                        this.text=data.data.introduce;

                    })

                })
            }
        },
        components: {
            Header,

            // XTextarea
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
