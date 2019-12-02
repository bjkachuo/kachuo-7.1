<template>
  <div class="index-wrap">
    <Header
      style="margin-bottom: 0px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <div class="line-one">
      <group>
        <cell title="店铺名称" value="山城麻辣串串香" is-link></cell>
        <cell title="店铺LOGO图" is-link>
          <img child="after-title" width="40" height="40" style="display:block;margin-right:5px;height: 40px;width: 40px" src="../bs.png">
        </cell>
        <cell title="店铺照片" value="未上传" is-link></cell>
      </group>

    </div>
    <div class="line-two">
      <group>
        <cell title="商家电话" value="17610879603" is-link></cell>
        <cell title="商家地址 " value="蓬莱市滨海区北京路..." is-link></cell>
      </group>
    </div>
    <div class="line-three">
      <cell title="主营分类" value="串串香/火锅" is-link></cell>
    </div>
    <div class="line-three">
      <cell title="店铺介绍" value="未填写" is-link></cell>
    </div>
  </div>
</template>

<script>
    import Header from "@/components/pages/backStage/StoreBackstage/BsHederWhite";
    import {Cell, CellBox, Group} from 'vux'

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "店铺信息",
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
            Cell,
            CellBox,
            Group
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

  .line-one {
    width: 100%;
    height: 165px;
    background: #FFFFFF;
    margin: 56px auto 10px;
  }

  .line-two {
    width: 100%;
    height: 110px;
    background: #FFFFFF;
    margin-bottom: 10px;
  }

  .line-three {
    width: 100%;
    height: 55px;
    background: #FFFFFF;
    margin-bottom: 10px;
  }
</style>
<style lang="less" scoped>
  /deep/ .weui-cell {
    height: 55px;
  }
</style>
