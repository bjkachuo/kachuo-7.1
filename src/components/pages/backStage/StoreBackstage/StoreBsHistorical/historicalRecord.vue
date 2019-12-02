<template>
  <div class="index-wrap">
    <Header
      style="margin-bottom: 0px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <div style="margin-top: 56px">
      <div class="card">
        <div class="card-left">
          <div style="margin: 14px 0px 0px 4.51%;">
            <div class="line-one" style="margin-bottom: 1.12%;"><p>四川辣味火锅100元代金券×1</p></div>
            <div class="line-two" style="margin-bottom: 3.6%;"><p>核销时间：2019-12-30 14:00</p></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-left">
          <div style="margin: 14px 0px 0px 4.51%;">
            <div class="line-one" style="margin-bottom: 1.12%;"><p>四川辣味火锅100元代金券×1</p></div>
            <div class="line-two" style="margin-bottom: 3.6%;"><p>核销时间：2019-12-30 14:00</p></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-left">
          <div style="margin: 14px 0px 0px 4.51%;">
            <div class="line-one" style="margin-bottom: 1.12%;"><p>四川辣味火锅100元代金券×1</p></div>
            <div class="line-two" style="margin-bottom: 3.6%;"><p>核销时间：2019-12-30 14:00</p></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-left">
          <div style="margin: 14px 0px 0px 4.51%;">
            <div class="line-one" style="margin-bottom: 1.12%;"><p>四川辣味火锅100元代金券×1</p></div>
            <div class="line-two" style="margin-bottom: 3.6%;"><p>核销时间：2019-12-30 14:00</p></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-left">
          <div style="margin: 14px 0px 0px 4.51%;">
            <div class="line-one" style="margin-bottom: 1.12%;"><p>四川辣味火锅100元代金券×1</p></div>
            <div class="line-two" style="margin-bottom: 3.6%;"><p>核销时间：2019-12-30 14:00</p></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-left">
          <div style="margin: 14px 0px 0px 4.51%;">
            <div class="line-one" style="margin-bottom: 1.12%;"><p>四川辣味火锅100元代金券×1</p></div>
            <div class="line-two" style="margin-bottom: 3.6%;"><p>核销时间：2019-12-30 14:00</p></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-left">
          <div style="margin: 14px 0px 0px 4.51%;">
            <div class="line-one" style="margin-bottom: 1.12%;"><p>四川辣味火锅100元代金券×1</p></div>
            <div class="line-two" style="margin-bottom: 3.6%;"><p>核销时间：2019-12-30 14:00</p></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-left">
          <div style="margin: 14px 0px 0px 4.51%;">
            <div class="line-one" style="margin-bottom: 1.12%;"><p>四川辣味火锅100元代金券×1</p></div>
            <div class="line-two" style="margin-bottom: 3.6%;"><p>核销时间：2019-12-30 14:00</p></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-left">
          <div style="margin: 14px 0px 0px 4.51%;">
            <div class="line-one" style="margin-bottom: 1.12%;"><p>四川辣味火锅100元代金券×1</p></div>
            <div class="line-two" style="margin-bottom: 3.6%;"><p>核销时间：2019-12-30 14:00</p></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-left">
          <div style="margin: 14px 0px 0px 4.51%;">
            <div class="line-one" style="margin-bottom: 1.12%;"><p>四川辣味火锅100元代金券×1</p></div>
            <div class="line-two" style="margin-bottom: 3.6%;"><p>核销时间：2019-12-30 14:00</p></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-left">
          <div style="margin: 14px 0px 0px 4.51%;">
            <div class="line-one" style="margin-bottom: 1.12%;"><p>四川辣味火锅100元代金券×1</p></div>
            <div class="line-two" style="margin-bottom: 3.6%;"><p>核销时间：2019-12-30 14:00</p></div>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-left">
          <div style="margin: 14px 0px 0px 4.51%;">
            <div class="line-one" style="margin-bottom: 1.12%;"><p>四川辣味火锅100元代金券×1</p></div>
            <div class="line-two" style="margin-bottom: 3.6%;"><p>核销时间：2019-12-30 14:00</p></div>
          </div>
        </div>
      </div>

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
                    titleContent: "历史记录",
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
  .card {
    width: 94%;
    height: 72px;
    margin: 0 auto 10px;
    background: #ffffff;
    /*margin-top: 56px;*/
    border-radius: 8px;
    overflow: hidden;
  }

  .card-left {
    height: 100%;
    width: 100%;
    border-radius: 8px 0 0 8px;
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

</style>
