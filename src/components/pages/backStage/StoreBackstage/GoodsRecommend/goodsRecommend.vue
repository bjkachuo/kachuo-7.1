<template>
  <div class="index-wrap">
    <Header
      style="margin-bottom: 0px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <div class="add-button">
      <div class="button-wrap">
        <div class="img-wrap"><img src="./add.png" alt=""></div>
        <div class="text-wrap"><p>添加推荐</p></div>
      </div>
    </div>
    <div class="card">
      <div class="left">
        <div style="width: 74px;height:74px;border-radius:8px;margin-right:4%;"><img src="" alt="" style="width:100%;border-radius:8px;height: 100%;"></div>
        <div style="width: 56%;"><p style="font-size: 14px;color: #222222;">麻辣牛肉串</p></div>
      </div>
      <div class="right"
           style="width: 80px;height: 30px;border-radius: 15px;border:1px solid #CCCCCC;background: #FFFFFF;margin: 64px 4% 0 0;"><p
        style="font-size: 14px;color: #999999;text-align: center;line-height: 28px;">删除</p></div>
    </div>
    <div class="card">
      <div class="left">
        <div style="width: 74px;height:74px;border-radius:8px;margin-right:4%;"><img src="" alt="" style="width:100%;border-radius:8px;height: 100%;"></div>
        <div style="width: 56%;"><p style="font-size: 14px;color: #222222;">麻辣牛肉串</p></div>
      </div>
      <div class="right"
           style="width: 80px;height: 30px;border-radius: 15px;border:1px solid #CCCCCC;background: #FFFFFF;margin: 64px 4% 0 0;"><p
        style="font-size: 14px;color: #999999;text-align: center;line-height: 28px;">删除</p></div>
    </div>
    <div class="card">
      <div class="left">
        <div style="width: 74px;height:74px;border-radius:8px;margin-right:4%;"><img src="" alt="" style="width:100%;border-radius:8px;height: 100%;"></div>
        <div style="width: 56%;"><p style="font-size: 14px;color: #222222;">麻辣牛肉串</p></div>
      </div>
      <div class="right"
           style="width: 80px;height: 30px;border-radius: 15px;border:1px solid #CCCCCC;background: #FFFFFF;margin: 64px 4% 0 0;"><p
        style="font-size: 14px;color: #999999;text-align: center;line-height: 28px;">删除</p></div>
    </div>
    <div class="card">
      <div class="left">
        <div style="width: 74px;height:74px;border-radius:8px;margin-right:4%;"><img src="" alt="" style="width:100%;border-radius:8px;height: 100%;"></div>
        <div style="width: 56%;"><p style="font-size: 14px;color: #222222;">麻辣牛肉串</p></div>
      </div>
      <div class="right"
           style="width: 80px;height: 30px;border-radius: 15px;border:1px solid #CCCCCC;background: #FFFFFF;margin: 64px 4% 0 0;"><p
        style="font-size: 14px;color: #999999;text-align: center;line-height: 28px;">删除</p></div>
    </div>
  </div>
</template>

<script>
    import Header from "@/components/pages/backStage/StoreBackstage/BsHederWhite";

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "商家推荐",
                    showLeftBack: true,
                    showRightMore: false
                },

            }
        },
        computed: {},
        watch: {},
        methods: {},
        components: {
            Header
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

  .add-button {
    width: 92%;
    height: 45px;
    background: #3976FF;
    margin: 56px auto 10px;
    border-radius: 8px;
    overflow: hidden;
  }

  .button-wrap {
    display: flex;
    margin: 9px auto 0;
    width: 29%;
  }

  .img-wrap {
    width: 16.5px;
    height: 16.5px;
    margin-right: 6px;
  }

  .img-wrap img {
    width: 100%;
  }

  .text-wrap {
    margin-top: 1.4px;
  }

  .text-wrap p {
    color: #FFFFFF;
    font-size: 14px;

  }

  .card {
    width: 92%;
    height: 104px;
    background: #FFFFFF;
    margin: 0 auto 10px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
  }

  .left {
    display: flex;
    justify-content: flex-start;
    width: 230px;
    margin: 15px 0 0 4.35%;
  }
</style>
