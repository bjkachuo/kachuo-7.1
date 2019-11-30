<template>
  <div class="index-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <div class="content-one">
      <div class="line-one">
        <flexbox>
          <flexbox-item>
            <div class="flex-demo">输码验证</div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-demo">扫码验证</div>
          </flexbox-item>
          <flexbox-item>
            <div class="flex-demo">历史记录</div>
          </flexbox-item>
        </flexbox>

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
  }
  .line-one{
    width: 92%;
    height: 90px;
    margin: 0 auto;
  }
</style>
<style lang="less">
  @import '~vux/src/styles/1px.less';
  .flex-demo {
    text-align: center;
    color: #fff;
    background-color: #20b907;
    border-radius: 4px;
    background-clip: padding-box;
  }
</style>
