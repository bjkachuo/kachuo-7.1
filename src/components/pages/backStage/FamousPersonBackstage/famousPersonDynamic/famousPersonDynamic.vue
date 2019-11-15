<template>
  <div class="personMsg-wrap">
    <Header
      style="margin-bottom: 56px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <p class="Preservation" @click="submit">发布</p>
    <div class="dynamic-wrap">
      <div class="img-warp"><img src=""></div>
      <div class="content">
        <div class="title"><p>钟明善书法晋京展汇报展举办成... </p></div>
        <div class="time">2018.10.22 15:20</div>
        <div class="bottom">
          <div class="bottom-left">
            <div>101赞</div>
            <div>0评论</div>
          </div>
          <div class="bottom-right" style="width:30px;height:15px;"><img src="../moremore.png" style="width: 100%">
          </div>
        </div>
      </div>
    </div>
    <div class="dynamic-wrap">
      <div class="img-warp"><img src=""></div>
      <div class="content">
        <div class="title"><p>钟明善书法晋京展汇报展举办成... </p></div>
        <div class="time">2018.10.22 15:20</div>
        <div class="bottom">
          <div class="bottom-left">
            <div>101赞</div>
            <div>0评论</div>
          </div>
          <div class="bottom-right" style="width:30px;height:15px;"><img src="../moremore.png" style="width: 100%">
          </div>
        </div>
      </div>
    </div>
    <div class="dynamic-wrap">
      <div class="img-warp"><img src=""></div>
      <div class="content">
        <div class="title"><p>钟明善书法晋京展汇报展举办成... </p></div>
        <div class="time">2018.10.22 15:20</div>
        <div class="bottom">
          <div class="bottom-left">
            <div>101赞</div>
            <div>0评论</div>
          </div>
          <div class="bottom-right" style="width:30px;height:15px;"><img src="../moremore.png" style="width: 100%">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "@/components/common/Header";

    export default {
        data() {
            return {
                TitleObjData: {
                    titleContent: "名家动态",
                    showLeftBack: true,
                    showRightMore: false
                },

            };
        },
        computed: {},
        created() {
        },
        mounted() {
        },
        watch: {},
        methods: {
            //点击发布
            submit() {
                console.log('我点了 发布')
                this.$router.push("/famousPersonRelease")
            },

            //提示框
            showTip(conttentTip) {
                this.$vux.toast.text(conttentTip, "middle");
                setTimeout(() => {
                    this.$vux.toast.hide();
                }, 1000);
            },

        },
        components: {
            Header,
        }

    }

</script>

<style scoped lang="css">
  .personMsg-wrap {
    background: #f0f1f5;
    position: relative;
    overflow: hidden scroll;
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

  .dynamic-wrap {
    width: 100%;
    height: 120px;
    margin-top: 0px;
    margin-bottom: 10px;
    background: #FFFFFF;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    justify-content: space-around;

  }
  .img-warp {
    width: 90px;
    height: 90px;
    margin: 15px 10px 15px 15px;
  }

  .content {
    width: 244px;
    height: 90px;
    /*background: #25a5f7;*/
    margin-top: 15px;
    margin-right: 15px;
  }

  .title {
    color: #222222;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .time {
    color: #999999;
    font-size: 14px;
    margin-bottom: 18px;
  }

  .bottom {
    height: 15px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .bottom-left {
    display: flex;
    justify-content: space-between;
    color: #666666;
    font-size: 14px;
    min-width: 100px;
  }
</style>
