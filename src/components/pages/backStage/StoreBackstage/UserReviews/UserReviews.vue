<template>
  <div class="index-wrap">
    <Header
      style="margin-bottom: 0px"
      :titleContent="TitleObjData.titleContent"
      :showLeftBack="TitleObjData.showLeftBack"
      :showRightMore="TitleObjData.showRightMore"
      :hideApp="1"
    ></Header>
    <div class="list-wrap">
      <div class="card" v-for="(item,index) in List" :key="index">
        <div class="line-one">
          <div class="line-one-left">
            <div class="img-wrap"><img :src="item.avatar" alt=""></div>
            <div class="name-wrap">
              <p>{{item.nickname}}</p>
              <span><rater v-model="List.score" :margin="6" :font-size="8"></rater></span>
            </div>
          </div>
          <div class="line-one-right">
            <p>{{item.create_time}}</p>
          </div>
        </div>
        <div class="line-two">
          <p>{{item.content}}</p>
        </div>
        <div style="height: 1px;width: 92%;margin: 0 auto 10px;background:#E5E5E5"></div>
        <div style="width: 65px;height: 30px;border: 1px solid #CCCCCC;border-radius: 15px; float: right"><p style="font-size: 14px;color: #999999;text-align: center;line-height: 30px;">回复</p></div>
      </div>
    </div>
  </div>
</template>

<script>
    import Header from "@/components/pages/backStage/StoreBackstage/BsHederWhite";
    import { Rater } from 'vux'

    export default {
        props: {},
        data() {
            return {
                TitleObjData: {
                    titleContent: "用户评价",
                    showLeftBack: true,
                    showRightMore: false
                },
                //星星数
                star:"5",
                //评论列表
                List:[]
            }
        },
        computed: {},
        mounted(){
            //获取评论列表
            this.$http.post("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=entry&m=ewei_shopv2&do=mobile&r=business.index.comment").then(({data})=>{
                // console.log(data);
                this.List = data.data.data;
                console.log('this.list:',this.List)
            })
        },
        watch: {},
        methods: {},
        components: {
            Header,
            Rater
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

  .list-wrap {
    margin-top: 56px;
  }

  .card {
    width: 100%;
    height: 170px;
    background: #FFFFFF;
    margin-bottom: 10px;
    padding: 4%;
  }

  .line-one {
    height: 35px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 13.5px;
  }
  .line-one-left{
    height: 35px;
    width: 44%;
    /*background: #0BB20C;*/
  }
  .img-wrap{
    height: 35px;
    width: 35px;
    border-radius: 50%;
    float: left;
  }
  .img-wrap img{
    width: 100%;
    border-radius: 50%;
  }
  .name-wrap{
    float: left;
    margin-left: 2.4%;
  }
  .name-wrap p{
    font-size: 14px;
    color: #333333;
    font-weight: bold;
    line-height: 16px;
  }
  .line-one-right{
    height: 35px;
    width: 46%;
    /*background: #1D72FF;*/
  }
  .line-one-right p{
    line-height: 35px;
    font-size: 10px;
    color: #666666;
    font-weight: 300;
    text-align: right;
  }
  .line-two{
    width: 100%;
    height: 36.5px;
    margin-bottom: 20px;
  }
  .line-two p{
    font-size: 14px;
    color: #333333;
    font-weight: 400;
    line-height: 18px;
  }
</style>
