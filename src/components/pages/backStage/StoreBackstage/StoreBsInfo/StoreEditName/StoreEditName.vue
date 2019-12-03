<template>
  <div class="index-wrap">
    <Header
      style="margin-bottom: 0px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
  </div>
</template>

<script>
    import Header from "@/components/pages/backStage/StoreBackstage/BsHederWhite";
    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "编辑店铺名称",
                    showLeftBack: true,
                    showRightMore: false
                },
            }
        },
        computed: {},
        watch: {},
        methods: {

        },
        components: {
            Header,
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
</style>
