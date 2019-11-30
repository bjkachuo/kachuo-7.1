<template>
  <div class="goodsOrder-wrap">
    <Header
      style="margin-bottom: 46px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
    ></Header>
    <div class="top">
      <div class="top-left"><img src="" alt=""></div>
      <div class="top-right">
        <div><p style="font-size: 16px;color: #222222;font-weight: bold;">运输中</p></div>
        <div style="margin-bottom: 20px;"><p style="font-size: 14px;color: #222222;">顺丰快递 3721809912181</p></div>
        <div><p style="font-size: 14px;color: #666666;font-weight: 300;">快递员 某某某</p></div>
      </div>
    </div>
    <div class="timeline-demo">
      <timeline>
<!--        <timeline-item>-->
<!--          <h4 class="recent">【广东】 广州市 已发出</h4>-->
<!--          <p class="recent"> 2016-04-17 12:00:00</p>-->
<!--        </timeline-item>-->
        <timeline-item>
          <h4> 申通快递员 广东广州 收件员 xxx 已揽件</h4>
          <p>2016-04-16 10:23:00</p>
        </timeline-item>
        <timeline-item>
          <h4> 商家正在通知快递公司揽件</h4>
          <p>2016-04-15 9:00:00</p>
        </timeline-item>
        <timeline-item>
          <h4> 商家正在通知快递公司揽件</h4>
          <p>2016-04-15 9:00:00</p>
        </timeline-item>
        <timeline-item>
          <h4> 商家正在通知快递公司揽件</h4>
          <p>2016-04-15 9:00:00</p>
        </timeline-item>
      </timeline>
    </div>
  </div>
</template>

<script>
    import Header from "@/components/common/Header";
    import {Timeline, TimelineItem} from 'vux'

    export default {
        data() {
            return {
                TitleObjData: {
                    titleContent: "查看物流",
                    showLeftBack: true,
                    showRightMore: false
                },

            }
        },
        mounted(){
            console.log(this.$route.query.id);
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=logistics.index.get_order_logistics&order_id=" + this.$route.query.id).then(({data}) => {
                console.log('物流信息:',data);
            });
        },
        components: {
            Header,
            Timeline,
            TimelineItem
        },

    }
</script>

<style scoped lang="css">
  .goodsOrder-wrap {
    height: 100%;
    width: 100%;
    background: #f5f5f5;
    overflow: hidden scroll;
  }

  .top {
    width: 92%;
    height: 120px;
    margin: 56px auto 10px;
    background: #FFFFFF;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
  }

  .top-left {
    width: 90px;
    height: 90px;
    margin-top: 15px;
    margin-left: 4.35%;
  }

  .top-left img {
    width: 100%;
  }

  .top-right {
    width: 230px;
    height: 90px;
    margin-top: 15px;

  }
</style>
<style lang="less" scoped>

  .timeline-demo {
    width: 92%;
    margin: 0 auto;
    background: #FFFFFF;

    p {
      color: #888;
      font-size: 0.8rem;
      text-indent: 4%;

    }

    h4 {
      color: #666;
      font-weight: normal;

    }

    .recent {
      color: rgb(4, 190, 2);
    }
  }

  /deep/ .vux-timeline-item-color {
    background-color: #E5E5E5;
  }

  /deep/ .vux-timeline-item-tail {
    background-color: #E5E5E5;
  }
  /deep/ .vux-timeline-item-content{
    padding: 0.1rem 0 3.5rem 2.2rem;
  }
</style>
