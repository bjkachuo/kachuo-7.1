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
        <cell title="店铺名称" :value="storeName" is-link @click.native="goName"></cell>
        <cell title="店铺LOGO图" is-link @click.native="goLogo">
          <img child="after-title" width="40" height="40"
               style="display:block;margin-right:5px;height: 40px;width: 40px" :src="storeLogo">
        </cell>
        <cell title="店铺照片" :value="storePhoto" is-link @click.native="goPhoto"></cell>
      </group>

    </div>
    <div class="line-two">
      <group>
        <cell title="商家电话" :value="storePhone" is-link @click.native="goPhone"></cell>
        <cell title="商家地址 " :value="storeAddress" is-link @click.native="goAdress"></cell>
      </group>
    </div>
    <div class="line-three">
      <cell title="主营分类" :value="storeMain" is-link @click.native="goMain"></cell>
    </div>
    <div class="line-three">
      <cell title="店铺介绍" :value="storeIntroduce" is-link @click.native="goIntroduce"></cell>
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
                //店铺名称
                storeName: "山城麻辣串串香",
                //店铺LOGO
                storeLogo: "",
                //店铺照片
                storePhoto: "未上传",
                //店铺电话
                storePhone: "17610879603",
                //店铺地址(入驻时有直接获取)
                storeAddress: "蓬莱市滨海区北京路...",
                //店铺主营
                storeMain: "串串香/火锅",
                //店铺介绍
                storeIntroduce: "未填写"
            }
        },
        computed: {},
        watch: {},
        methods: {
            //跳转店铺编辑名称
            goName() {
                this.$router.push('/StoreEditName')
            },
            //跳转店铺编辑logo
            goLogo() {
                this.$router.push('/StoreEditLogo')
            },
            //跳转店铺照片
            goPhoto() {
                this.$router.push('/StoreEditPhoto')
            },
            //跳转店铺电话
            goPhone() {
                this.$router.push('/StoreEditPhone')
            },
            //跳转店铺地址(入驻时有直接获取)
            goAdress() {
                console.log("入驻时有直接获取")
                // this.$router.push('/StoreEditAddress')
            },
            //跳转店铺主营分类
            goMain() {
                this.$router.push('/StoreEditMain')
            },
            //跳转店铺介绍
            goIntroduce() {
                this.$router.push('/StoreEditIntroduce')
            }



        },
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
