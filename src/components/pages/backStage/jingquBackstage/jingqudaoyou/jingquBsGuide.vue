<template>
  <div class="guide-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <p class="Preservation" @click="addGuide">添加</p>
    <tab
      :line-width="1"
      custom-bar-width="32px"
      default-color="#222222"
      active-color="#3976FF"
      bar-active-color="#3976FF"
    >
      <tab-item @click.native="cur=0" :class="{active:cur==0}" selected>全部</tab-item>
      <tab-item @click.native="cur=1" :class="{active:cur==1}">空闲</tab-item>
      <tab-item @click.native="cur=2" :class="{active:cur==2}">期满</tab-item>
      <tab-item @click.native="cur=3" :class="{active:cur==3}">休息</tab-item>
    </tab>
    <div class="tab-content">
      <b v-show="cur==0">
          <div class="list-one" v-for="(item,index) in TList" :key="index">
            <div class="img-wrap">
              <img :src="item.tour_path" alt/>
              <!--            <div class="state" style="background:#6B97FF">空闲</div>-->
              <div :class="'g-tag-'+item.status" v-if="item.status=='0'">空闲</div>
              <div :class="'g-tag-'+item.status" v-if="item.status=='1'">期满</div>
              <div :class="'g-tag-'+item.status" v-if="item.status=='2'">休息</div>
            </div>
            <div class="name-star-wrap">
              <p>{{item.name}}</p>
              <div class="star-wrap">
                <rater v-model="item.score" active-color="#FF9900" :font-size="10" disabled></rater>
                <span>({{item.score}})</span>
              </div>
            </div>
            <div class="more-wrap" @click="show(item)">
              <img src="../moremore.png" alt/>
            </div>
          </div>
      </b>
      <b v-show="cur==1">
        <div class="list-one" v-for="(item,index) in KList" :key="index">
          <div class="img-wrap">
            <img :src="item.tour_path" alt/>
            <div :class="'g-tag-'+0">空闲</div>
          </div>
          <div class="name-star-wrap">
            <p>{{item.name}}</p>
            <div class="star-wrap">
              <rater v-model="item.score" active-color="#FF9900" :font-size="10" disabled></rater>
              <span>({{item.score}})</span>
            </div>
          </div>
          <div class="more-wrap" @click="show(item)">
            <img src="../moremore.png" alt/>
          </div>
        </div>
      </b>
      <b v-show="cur==2">
        <div class="list-one" v-for="(item,index) in QList" :key="index">
          <div class="img-wrap">
            <img :src="item.tour_path" alt/>
            <div :class="'g-tag-'+1">期满</div>
          </div>
          <div class="name-star-wrap">
            <p>{{item.name}}</p>
            <div class="star-wrap">
              <rater v-model="item.score" active-color="#FF9900" :font-size="10" disabled></rater>
              <span>({{item.score}})</span>
            </div>
          </div>
          <div class="more-wrap" @click="show(item)">
            <img src="../moremore.png" alt/>
          </div>
        </div>
      </b>
      <b v-show="cur==3" v-for="(item,index) in XList" :key="index">
        <div class="list-one">
          <div class="img-wrap">
            <img :src="item.tour_path" alt/>
            <div :class="'g-tag-'+2">休息</div>
          </div>
          <div class="name-star-wrap">
            <p>{{item.name}}</p>
            <div class="star-wrap">
              <rater v-model="item.score" active-color="#FF9900" :font-size="10" disabled></rater>
              <span>({{item.score}})</span>
            </div>
          </div>
          <div class="more-wrap" @click="show(item)">
            <img src="../moremore.png" alt/>
          </div>
        </div>
      </b>
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
      @on-cancel="onCancel()"
      @on-confirm="onConfirm()"
    ></confirm>
  </div>
</template>

<script>
    import Header from "@/components/common/Header";
    import {Tab, TabItem, Rater, Actionsheet, Confirm} from "vux";

    export default {
        props: {},
        data() {
            return {
                data42: "3",
                cur: 0, //默认选中第一个tab
                TitleObjData: {
                    titleContent: "景区导游",
                    showLeftBack: true,
                    showRightMore: false
                },
                isconfirm: false,
                isactionsheet: false,
                show4: false,
                menus1: {
                    menu1: "置顶",
                    menu2: "编辑",
                    menu3: "删除"
                },
                scenic_id: "",
                //全部导演列表
                TList: "",
                //空闲导游列表
                KList:"",
                //休息导游列表
                XList:"",
                //期满导游
                QList:"",
                //点击显示actionsheet时保存的item
                guideItem: ""
            };
        },
        computed: {},
        created() {
        },
        mounted() {
            //获取景区id
            this.scenic_id = JSON.parse(sessionStorage.getItem("currentScenic"));
            console.log(this.scenic_id)
            //获取景区后台导游全部列表
            this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.guide").then(({data}) => {
                console.log(data);
                this.TList = data.data;
                console.log('默认导游列表无状态全部导游',this.TList)
            })
            //期满导游列表
            this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.guide&status="+1).then(({data}) => {
                console.log('期满导游：',data);
                this.QList = data.data;
            })
            //休息导游列表
            this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.guide&status="+2).then(({data}) => {
                console.log('休息导游：',data);
                this.XList =data.data;
            })
            //空闲导游列表
            this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.guide&status="+0).then(({data}) => {
                console.log('空闲导游：',data);
                this.KList = data.data;

            })

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

            //点击显示confirm
            show(item) {
                this.isactionsheet = !this.isactionsheet;
                this.guideItem = item;
                console.log(this.guideItem);
            },
            addGuide() {
                this.$router.push("/jingquBsAddguide");
            },
            // 点击Actionsheet事件
            click(key, item) {
                console.log(key, item)
                if (key == "menu3") {
                    //如果点了删除调用删除confirm
                    this.onDel();
                } else if (key == "menu1") {
                    //点击导游置顶操作
                      this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.guide.guideTop&type="+1+"&id="+this.guideItem.id).then(({data})=>{
                          console.log(data);
                          this.Refresh();
                          this.showTip("置顶成功");
                      })
                }else if(key == "menu2" ){
                    this.$router.push("/jingquBsEditguide?id="+this.guideItem.id)
                }
            },
            //删除弹窗，方法
            onDel(id) {
                this.isconfirm = !this.isconfirm;
            },
            //点击取消事件
            onCancel() {
                console.log("我点了取消");

            },
            //点击确认事件
            onConfirm() {
                console.log("我点了确认");
                //删除导游
                this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=tourguide.index.del&id=" + this.guideItem.id).then(({data}) => {
                    console.log(data)
                    this.Refresh();
                    this.showTip("删除成功");
                })

            },
            //刷新列表方法
            Refresh() {
                //获取景区后台导游列表
                this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.guide").then(({data}) => {
                    this.TList = data.data;
                    console.log("我刷新了全部列表")
                });
                //期满导游列表
                this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.guide&status="+1).then(({data}) => {
                    console.log('刷新期满导游：',data);
                    this.QList = data.data;
                })
                //休息导游列表
                this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.guide&status="+2).then(({data}) => {
                    console.log('刷新休息导游：',data);
                    this.XList =data.data;
                })
                //空闲导游列表
                this.$http.post("http://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.guide&status="+0).then(({data}) => {
                    console.log('刷新空闲导游：',data);
                    this.KList = data.data;

                })


            }
        },
        components: {
            Header,
            Tab,
            TabItem,
            Rater,
            Actionsheet,
            Confirm
        },
        watch:{
            '$route':function (to) {
                if(sessionStorage.goback == "yes"){
                    sessionStorage.goback = ''
                    this.Refresh();
                }
            }

        }
    };
</script>

<style scoped lang="css">
  .guide-wrap {
    height: 100%;
    width: 100%;
    background: #f5f5f5;
    overflow: hidden;
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

  .tab-content {
    width: 100%;
    height: 85%;
    overflow: hidden scroll;
  }

  .tab-content b {
    font-weight: normal;
    display: block;
    width: 100%;
  }

  .list-one {
    width: 100%;
    height: 120px;
    background: #ffffff;
    margin-bottom: 10px;
    border-radius: 8px;
  }

  .img-wrap {
    width: 90px;
    height: 90px;
    float: left;
    margin: 15px 4% 0 4%;
    border-radius: 8px;
    position: relative;
  }

  .img-wrap img {
    width: 100%;
  }

  .img-wrap .state {
    width: 45px;
    height: 25px;
    /*background: #6b97ff;*/
    color: #ffffff;
    font-size: 12px;
    line-height: 25px;
    border-radius: 8px 0 20px 0;
    text-align: center;
    position: absolute;
    top: 0px;
    left: 0px;
  }

  .name-star-wrap {
    width: 110px;
    height: 40px;
    float: left;
    margin: 20px 0 0 0;
  }

  .name-star-wrap p {
    font-size: 18px;
    color: #222222;
  }

  .star-wrap span {
    font-size: 12px;
    color: #999999;
    margin-left: 4px;
  }

  .more-wrap {
    width: 30px;
    height: 15px;
    float: right;
    margin: 15px 4% 0 0;
  }

  .more-wrap img {
    width: 100%;
  }

  .g-tag-0 {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    border-bottom-right-radius: 25px;
    color: #ffffff;
    font-size: 12px;
    width: 40px;
    height: 25px;
    line-height: 25px;
    box-sizing: border-box;
    padding-right: 10px;
    background-color: #6b97ff;
  }

  .g-tag-1 {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    border-bottom-right-radius: 25px;
    color: #ffffff;
    font-size: 12px;
    width: 40px;
    height: 25px;
    line-height: 25px;
    box-sizing: border-box;
    padding-right: 10px;

    background-color: #ff4d4d;
  }

  .g-tag-2 {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    border-bottom-right-radius: 25px;
    color: #ffffff;
    font-size: 12px;
    width: 50px;
    height: 25px;
    line-height: 25px;
    box-sizing: border-box;
    padding-right: 10px;

    background-color: #999;
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
  /deep/ .vux-tab-wrap {
    margin-bottom: 10px;
  }

  /deep/ .vux-tab .vux-tab-item {
    font-size: 16px;
    font-weight: bold;
  }
</style>

