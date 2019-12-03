<template>
  <div class="index-wrap">
    <Header
      style="margin-bottom: 0px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <div class="card">
      <div class="card-left">
        <div style="margin: 20px 0 0 4.51%">
          <div class="line-one" style="margin-bottom: 1.12%;"><p>四川辣味火锅100元代金券×1</p></div>
          <div class="line-two" style="margin-bottom: 3.6%;"><p>有限期至2019-12-30</p></div>
          <div class="line-three"><p>周一至周五全天使用</p></div>
        </div>
      </div>
      <div class="card-right">
        <div class="price"><span>90<span>元</span></span></div>
      </div>
    </div>
    <div class="done" @click="done">立即核销</div>
  </div>
</template>

<script>
    import Header from "@/components/pages/backStage/StoreBackstage/BsHederWhite";

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "查询结果",
                    showLeftBack: true,
                    showRightMore: false
                },
            }
        },
        computed: {},
        watch: {},
        methods: {
            done(){
                alert("核销！！")
            }
        },
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

  .card {
    width: 94%;
    height: 104px;
    margin: 0 auto;
    background: #ffffff;
    margin-top: 56px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
  }

  .card-left {
    height: 100%;
    width: 80%;
    border-radius: 8px 0 0 8px;
  }

  .card-right {
    height: 104px;
    width: 20%;
    border-radius: 0px 8px 8px 0px;
    border-left: 1px dashed #F5F5F5;
  }

  .line-one p {
    color: #222222;
    font-size: 14px;
    font-weight: bold;
  }

  .line-two p {
    color: #999999;
    font-size: 10px;
    font-weight: normal;

  }

  .line-three p {
    color: #222222;
    font-size: 10px;
    font-weight: normal;
  }
  .price {
    margin: 34.5px 0 0 20%;
    width: 64%;
  }
  .price span {
    font-size: 20px;
    color: #222222;
    font-weight: bold;
  }

  .price span span {
    font-size: 12px;
    color: #222222;
    font-weight: bold;
  }
  .done{
    width: 92%;
    height: 44px;
    background: #3976FF;
    color: #FFFFFF;
    font-size: 14px;
    text-align: center;
    line-height: 44px;
    position: fixed;
    bottom: 10px;
    left: 4%;
    border-radius: 8px;
  }
</style>
