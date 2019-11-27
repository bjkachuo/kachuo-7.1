<template>
  <div class="Audit-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <tab
      :line-width="1"
      custom-bar-width="32px"
      default-color="#222222"
      active-color="#3976FF"
      bar-active-color="#3976FF"
    >
      <tab-item @click.native="cur=0" :class="{active:cur==0}" selected>审核中</tab-item>
      <tab-item @click.native="cur=1" :class="{active:cur==1}">合格</tab-item>
      <tab-item @click.native="cur=2" :class="{active:cur==2}">不合格</tab-item>
    </tab>
    <div class="tab-content">
      <b v-show="cur==0">
        <div class="list" style="margin-top:10px;">
          <div class="line-one" v-for="(item,index) in List" :key="index">
            <div class="name-wrap">
              <div class="img-wrap">
                <img :src="item.head_image" alt/>
              </div>
              <div class="txt-wrap">
                <p>{{item.nickname}}</p>
              </div>
            </div>
            <div class="liuyan-wrap">
              <p>
                {{item.content}}
              </p>
            </div>
            <div class="bottom-wrap">
              <div class="no" @click="goNo(item.id)">
                <p>不合格</p>
              </div>
              <div class="yes" @click="goYes(item.id)">
                <p>合格</p>
              </div>
            </div>
          </div>
        </div>
      </b>
      <b v-show="cur==1">
        <div class="list" style="margin-top:10px;">
          <div class="line-one" v-for="(item,index) in ListYes" :key="index">
            <div class="name-wrap">
              <div class="img-wrap">
                <img :src="item.head_image" alt/>
              </div>
              <div class="txt-wrap">
                <p>{{item.nickname}}</p>
              </div>
            </div>
            <div class="liuyan-wrap">
              <p>
                {{item.content}}
              </p>
            </div>
            <!--            <div class="bottom-wrap">-->
            <!--              <div class="no">-->
            <!--                <p>不合格</p>-->
            <!--              </div>-->
            <!--              <div class="yes">-->
            <!--                <p>合格</p>-->
            <!--              </div>-->
            <!--            </div>-->
          </div>
        </div>

      </b>
      <b v-show="cur==2">
        <div class="list" style="margin-top:10px;">
          <div class="line-one" v-for="(item,index) in ListNo" :key="index">
            <div class="name-wrap">
              <div class="img-wrap">
                <img :src="item.head_image" alt/>
              </div>
              <div class="txt-wrap">
                <p>{{item.nickname}}</p>
              </div>
            </div>
            <div class="liuyan-wrap">
              <p>
                {{item.content}}
              </p>
            </div>
            <!--            <div class="bottom-wrap">-->
            <!--              <div class="no">-->
            <!--                <p>不合格</p>-->
            <!--              </div>-->
            <!--              <div class="yes">-->
            <!--                <p>合格</p>-->
            <!--              </div>-->
            <!--            </div>-->
          </div>
        </div>

      </b>
    </div>
  </div>
</template>

<script>
    import Header from "@/components/common/Header";
    import {Tab, TabItem} from "vux";

    export default {
        props: {},
        data() {
            return {
                cur: 0, //默认选中第一个tab
                TitleObjData: {
                    titleContent: "留言审核",
                    showLeftBack: true,
                    showRightMore: false
                },
                //评论列表未审核
                List: [],
                //已通过列表
                ListYes: [],
                //未通过列表
                ListNo: []
            };
        },
        computed: {},
        created() {
        },
        mounted() {
            //景区后台留言列表
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.sceniccomment.scenicCommByOwner").then(({data}) => {
                console.log(data);
                this.List = data.data;
                console.log(this.List)
            })
            //通过列表
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.sceniccomment.scenicCommByOwner&status=" + 1).then(({data}) => {
                console.log("通过列表", data);
                this.ListYes = data.data;
            })
            //未通过列表
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.sceniccomment.scenicCommByOwner&status=" + 2).then(({data}) => {
                console.log("未通过列表", data);
                this.ListNo = data.data;
            })
        },
        watch: {},
        methods: {
            //合格操作
            goYes(id) {
                this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.sceniccomment.scenicCommOwnerCheck&status=" + 1 + "&id=" + id).then(({data}) => {
                    console.log("点击合格返回", data)
                    this.Refresh();
                    this.RefreshYes();
                    this.$vux.toast.text("操作成功");
                })
            },
            //不合格操作
            goNo(id) {
                this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.sceniccomment.scenicCommOwnerCheck&status=" + 2 + "&id=" + id).then(({data}) => {
                    console.log("点击不合格返回", data)
                    this.Refresh();
                    this.RefreshNo();
                    this.$vux.toast.text("操作成功");
                })
            },
            //刷新未审核列表
            Refresh() {
                this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.sceniccomment.scenicCommByOwner").then(({data}) => {
                    this.List = data.data;
                    console.log("未审核刷新方法", this.List)
                })
            },
            //刷新合格列表
            RefreshYes() {
                this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.sceniccomment.scenicCommByOwner&status=" + 1).then(({data}) => {
                    this.ListYes = data.data;
                    console.log("合格刷新方法", this.List)
                })
            },
            //刷新不合格列表
            RefreshNo() {
                this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=scenic.sceniccomment.scenicCommByOwner&status=" + 2).then(({data}) => {
                    this.ListNo = data.data;
                    console.log("不合格刷新方法", this.List)
                })
            },
        },
        components: {
            Header,
            Tab,
            TabItem
        }
    };
</script>

<style scoped lang="css">
  .Audit-wrap {
    background: #f5f5f5;
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

  .line-one {
    width: 100%;
    min-height: 130px;
    background: #ffffff;
    border-radius: 8px;
    margin: 0 auto 10px;
    overflow: hidden;
    border-radius: 12px;
  }

  .name-wrap {
    height: 35px;
    width: 92%;
    margin-top: 20px;
    margin: 20px auto 10px;
  }

  .img-wrap {
    width: 35px;
    height: 35px;
    float: left;
    margin-right: 4%;
  }

  .img-wrap img {
    width: 100%;
    border-radius: 50%;
  }

  .txt-wrap {
    height: 35px;
    width: 47%;
    float: left;
  }

  .txt-wrap p {
    line-height: 35px;
  }

  /* .tong-wrap {
    width: 24px;
    height: 24px;
    float: right;
    margin-top: 3px;
  }
  .tong-wrap img {
    width: 100%;
  } */
  .liuyan-wrap {
    width: 92%;
    height: 40px;
    margin: 0 auto 15px;
    height: 48px;
  }

  .liuyan-wrap p {
    font-size: 16px;
    color: #333333;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .img-list {
    height: 71px;
    width: 92%;
    margin: 0 auto 15px;
  }

  .images-wrap {
    height: 100%;
    width: 113px;
    float: left;
    margin-right: 3px;
  }

  .images-wrap img {
    width: 100%;
  }

  .bottom-wrap {
    height: 35px;
    width: 100%;
    margin-bottom: 10px;
  }

  .no {
    float: left;
    width: 24%;
    height: 35px;
    background: #ffffff;
    border: 1px solid #ff8585;
    border-radius: 16px;
    margin: 0 10px 0 40%;
  }

  .no p {
    line-height: 35px;
    color: #ff8585;
    text-align: center;
    font-size: 14px;
  }

  .yes {
    float: left;
    width: 28%;
    height: 35px;
    background: #3976ff;
    border-radius: 16px;
  }

  .yes p {
    line-height: 35px;
    color: #ffffff;
    text-align: center;
    font-size: 14px;
  }
</style>
<style lang="less" scoped>
  /deep/ .vux-tab .vux-tab-item {
    font-size: 16px;
    font-weight: bold;
  }
</style>
