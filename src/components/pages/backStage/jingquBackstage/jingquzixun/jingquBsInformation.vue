<template>
  <div class="information-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <p class="Preservation" @click="goRelease">发布</p>
<!--    <x-icon type="ios-search-strong" size="25" class="search-icon" @click="jumpSearch"></x-icon>-->
    <div style="height:40px;">
      <search
        cancel-text
        placeholder="请输入标题进行搜索"
        @result-click="resultClick"
        @on-change="getResult"
        :results="results"
        v-model="value"
        position="absolute"
        auto-scroll-to-top
        top="46px"
        @on-focus="onFocus"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
        ref="search">
      </search>

    </div>
    <div style="margin-bottom: 10px;">
      <div class="line-one" v-for="(item,index) in List" :key="index">
        <p class="operation" @click="show(item)">...</p>
        <div class="title">{{item.title}}</div>
        <div class="img-list">
          <img :src="item.image" alt/>
        </div>
      </div>
    </div>
    <actionsheet
      v-model="isactionsheet"
      :menus="menus1"
      :close-on-clicking-mask="true"
      show-cancel
      @on-click-menu="click"
    ></actionsheet>
    <confirm
      class="confirm-dialog"
      v-model="isconfirm"
      title="确定要删除吗？"
      theme="ios"
      @on-confirm="onConfirm()"
    ></confirm>

  </div>
</template>

<script>
    import Header from "@/components/common/Header";
    // import Search from "@/components/common/Search";
    import {Actionsheet, Confirm, Search} from "vux";

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "景区资讯",
                    showLeftBack: true,
                    showRightMore: false
                },
                //是否显示actionsheet
                isactionsheet: false,
                //是否显示删除弹框
                isconfirm: false,
                //点击显示actionsheet时保存的item
                ActiveItem: "",
                //景区资讯列表
                List: [],
                menus1: {
                    menu1: "置顶",
                    menu2: "编辑",
                    menu3: "删除"
                },
                //搜索相关
                results: [],
                //搜索相关
                value: "",

            };
        },
        computed: {},
        created() {
        },
        mounted() {
            //获取景区资讯列表页
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.msg.scenicInformationList").then(({data}) => {
                console.log(data)
                this.List = data.data;
            })
        },
        methods: {
            //提示框
            showTip(conttentTip) {
                this.$vux.toast.text(conttentTip, "middle");
                setTimeout(() => {
                    this.$vux.toast.hide();
                }, 1000);
            },

            //跳转景区资讯发布页
            goRelease() {
                this.$router.push("/jingquBSInfoRelease");
            },
            //跳转搜索
            // jumpSearch() {
            //     this.$router.push("/jingquBsSearch");
            // },
            //actionsheet显示或隐藏
            show(item) {
                this.isactionsheet = !this.isactionsheet;
                this.ActiveItem = item;
                console.log(this.ActiveItem)
            },
            //点击删除显示或隐藏
            onDel() {
                this.isconfirm = !this.isconfirm;
            },
            // 点击Actionsheet事件
            click(key, item) {
                console.log(key, item)
                if (key == "menu3") {
                    //如果点了删除调用删除confirm
                    this.onDel();
                } else if (key == "menu1") {
                    //点击资讯置顶操作
                    this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.msg.scenicInformationTop&type=" + 1 + "&id=" + this.ActiveItem.id).then(({data}) => {
                        console.log(data);
                        this.showTip("置顶成功");
                        this.Refresh();
                    })
                } else if (key == "menu2") {
                    this.$router.push("/jingquBSInfoEdit?id=" + this.ActiveItem.id)
                }
            },
            //点击确认事件
            onConfirm() {
                console.log("我点了确认");
                //删除资讯
                this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.msg.delScenicInformation&id=" + this.ActiveItem.id).then(({data}) => {
                    console.log(data)
                    this.Refresh();
                    this.showTip("删除成功");
                })

            },
            //以下搜索相关事件
            //点击搜索结果弹出（事件）
            resultClick(item) {
                window.alert('you click the result item: ' + JSON.stringify(item))
                //下面加跳转的页面跳转的方法（带这id去编辑发布编辑详情）
                this.$router.push()
            },
            //进行搜索下方出现的搜索框
            getResult(val) {
                this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.msg.scenicInformationList&search=" + this.value).then(({data}) => {
                    console.log(data);
                    this.List = data.data
                })
                console.log('on-change', val)
                this.results = val ? getResult(this.value) : []
            },
            //点击回车时的弹框
            onSubmit() {
                this.$refs.search.setBlur();
                this.$vux.toast.show({
                    type: 'text',
                    position: 'top',
                    text: 'on submit'
                })
            },

            //点击搜索框聚焦时
            onFocus() {
                console.log("点击了搜索");
            },
            //点击搜索右侧取消时
            onCancel() {
                console.log("点击了搜索框取消");
            },

            //刷新景区资讯列表方法
            Refresh() {
                this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.msg.scenicInformationList").then(({data}) => {
                    this.List = data.data;
                    console.log("刷新了景区资讯列表", this.List)
                })

            }
        },
        components: {
            Header,
            Actionsheet,
            Confirm,
            Search
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

    //搜索方法
    function getResult(val) {
        // let rs = [];
        // for (let i = 0; i < 20; i++) {
        //     rs.push({
        //         title: `${val}`,
        //         other: i
        //     });
        // }
        // return rs;
    }

</script>

<style scoped lang="css">
  .information-wrap {
    height: 100%;
    width: 100%;
    background: #f5f5f5;
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

  .line-one {
    width: 100%;
    height: 150px;
    background: #ffffff;
    margin-top: 10px;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
  }

  .line-one:nth-child(1) {
    /*margin-top: 56px;*/
  }

  .operation {
    display: block;
    width: 30px;
    height: 15px;
    background: #f5f5f5;
    color: #222222;
    font-size: 24px;
    text-align: center;
    line-height: 1px;
    border-radius: 8px;
    position: absolute;
    right: 5%;
    top: 12px;
  }

  .title {
    width: 250px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    margin: 26px 0 12px 2%;
    font-size: 18px;
    color: #333333;
    height: 89px;
    word-wrap: break-word;
    word-break: break-all;
    overflow: hidden;
  }

  .img-list {
    width: 90px;
    height: 90px;
    margin: 36px 8% 0 0;
  }

  .img-wrap {
    width: 32%;
    height: 72px;
    float: left;
    margin: 0 0.66%;
  }

  .img-list img {
    width: 100%;
  }

  /* confirm弹窗样式 */
  .confirm-dialog /deep/ .weui-skin_android .weui-dialog__ft {
    text-align: center;
    padding: 0 15px 15px 15px;
  }

  .confirm-dialog /deep/ .weui-dialog__btn {
    width: 110px;
    height: 35px;
    line-height: 35px;
    border: 1px solid #3976ff;
    border-radius: #3976ff;
    text-align: center;
    color: #3976ff;
    font-size: 15px;
    border-radius: 35px;
    margin: 0 5px;
  }

  .confirm-dialog /deep/ .weui-dialog__btn:active {
    background-color: transparent;
  }

  .confirm-dialog /deep/ .weui-dialog__btn_primary,
  .confirm-dialog /deep/ .weui-dialog__btn_primary:active {
    background-color: #3976ff;
    color: #ffffff;
  }

  .confirm-dialog /deep/ .weui-skin_android .weui-dialog__title {
    font-size: 18px;
  }

  .confirm-dialog /deep/ .weui-dialog__hd {
    text-align: center;
    padding: 30px 15px;
  }

  .confirm-dialog /deep/ .weui-skin_android .weui-dialog__bd {
    padding: 5px 15px 0 15px;
    min-height: 10px;
  }
</style>
<style lang="less" scoped>
  /deep/ .search-icon {
    position: absolute;
    z-index: 9999;
    top: 10px;
    right: 16%;
  }

  /deep/ .vux-search-fixed {
    position: static;
  }
</style>

