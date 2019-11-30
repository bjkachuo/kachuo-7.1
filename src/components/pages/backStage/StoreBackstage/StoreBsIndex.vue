<template>
  <div class="index-wrap">
    <Header
      style="margin-bottom: 0px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <div class="content-one">
      <div class="line-one">
        <flexbox>
          <flexbox-item>
            <div class="flex-demo">
              <div class="img-wrap">
                <img src="./sj1.png" alt="">
              </div>
              <p>输码验证</p>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-demo">
              <div class="img-wrap">
                <img src="./sj2.png" alt="">
              </div>
              <p>扫码验证</p>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-demo">
              <div class="img-wrap">
                <img src="./sj3.png" alt="">
              </div>
              <p>历史记录</p>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="card">
        <div class="small-title">
          <div class="dian"></div>
          <div class="dian-two"><p>店铺管理</p></div>
        </div>
        <div class="line-two">
          <flexbox>
            <flexbox-item>
              <div class="flex-demoTwo">
                <div class="img-wrap-two">
                  <img src="./bs.png" alt="">
                </div>
                <p>店铺信息</p>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-demoTwo">
                <div class="img-wrap-two">
                  <img src="./bs.png" alt="">
                </div>
                <p>代金券</p>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-demoTwo">
                <div class="img-wrap-two">
                  <img src="./bs.png" alt="">
                </div>
                <p>推荐商品</p>
              </div>
            </flexbox-item>
            <flexbox-item>
              <div class="flex-demoTwo">
                <div class="img-wrap-two">
                  <img src="./bs.png" alt="">
                </div>
                <p>用户评价</p>
              </div>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
    import Header from "@/components/pages/backStage/StoreBackstage/BSheader";
    import {Flexbox, FlexboxItem} from 'vux'

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "商家管理后台",
                    showLeftBack: true,
                    showRightMore: false
                },

            }
        },
        computed: {},
        watch: {},
        methods: {},
        components: {
            Header,
            Flexbox,
            FlexboxItem
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

  .content-one {
    height: 176px;
    width: 100%;
    background: #3976FF;
    margin-top: 46px;
    position: relative;
    display: inline-block;
  }

  .line-one {
    width: 92%;
    height: 90px;
    margin: 25px auto 0;
  }

  .img-wrap {
    height: 64px;
    width: 64px;
    margin: 0 auto 8px;
  }

  .img-wrap img {
    width: 100%;
    background: none;

  }

  .card {
    width: 94%;
    height: 147px;
    margin: 0 auto;
    border-radius: 8px;
    background: #FFFFFF;
    position: absolute;
    bottom: -106px;
    left: 3%;
  }

  .small-title {
    width: 65.5px;
    height: 22px;
    margin: 12px 0 21px 6.9%;
  }

  .dian {
    height: 14px;
    width: 7px;
    background: #3976FF;
    float: left;
    margin-top: 4px;
    margin-right: 2px;
    border-radius: 3.5px;
  }

  .dian-two {
    float: left;
  }

  .dian-two p {
    font-size: 14px;
    color: #222222;
    font-weight: bold;
  }

  .line-two {
    width: 92%;
    height: 72px;
    margin: 0 auto;
    /*background: #0BB20C;*/
  }
  .img-wrap-two{
    height: 50px;
    width: 50px;
    margin: 0 auto 6px;
  }
  .img-wrap-two img{
    width: 100%;
  }
</style>
<style lang="less" scoped>
  @import '~vux/src/styles/1px.less';

  .flex-demo {
    text-align: center;
    color: #fff;
    /*background-color: #20b907;*/
    border-radius: 4px;
    background-clip: padding-box;
    margin: 0 auto;
  }

  .flex-demo p {
    text-align: center;
    font-size: 14px;
    color: #FFFFFF;
  }

  .flex-demoTwo {
    text-align: center;
    color: #fff;
    /*background: #1D72FF;*/
    border-radius: 4px;
    background-clip: padding-box;
  }
  .flex-demoTwo p{
    text-align: center;
    font-size: 12px;
    color: #222222;
  }
</style>
