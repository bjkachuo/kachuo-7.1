<template>
    <div style="background-color: rgba(245,245,245,1)">
      <Header style="margin-bottom: 56px"
        :titleContent="TitleObjData.titleContent"
        :showLeftBack="TitleObjData.showLeftBack"
        :showRightMore="TitleObjData.showRightMore"
      ></Header>

      <div class="list-box">
        <div class="title">蓬莱阁旅游景区，是国家级5A级风景区位于 山东省蓬莱市，小城在海边</div>
        <ul>
          <li @click="go"></li>
          <li @click="go"></li>
          <li @click="go"></li>
        </ul>
<!--        <VideoPlayer :isControls="true"></VideoPlayer>-->
        <div>
          <span class="name">蓬莱阁景区</span>
          <span class="comment">29评论</span>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from "@/components/common/Header";
  import VideoPlayer from "@/components/common/VideoPlayer";
    export default {
        name: "dynamic",

        components:{Header,VideoPlayer},

        data(){
          return{
            TitleObjData: {
              titleContent: "景区动态",
              showLeftBack: true,
              showRightMore: false
            },
          }
        },

        methods:{
          go(){
            this.$router.push('/scencerelease/dynamic/DynamicDetails')
          }
        }
    }
</script>

<style scoped lang="less">
    .list-box{
      padding: 20px 15px;
      background-color: #fff;
      font-size: 18px;
      box-shadow:0px 10px 20px 0px rgba(0,101,255,0.06);
      border-radius:8px;
      margin: 10px 0;
      ul{
        display: flex;
        margin: 5px 0;
        li{
          flex: 1;
          padding-top: 21.3%;
          background:linear-gradient(90deg,rgba(172,212,240,1) 0%,rgba(173,225,247,1) 100%);
          border-radius:8px;
          margin-left:3px;
          :first-of-type{
            margin-left: 3px;
          }
        }
      }
      span{
        font-size: 14px;
      }
      .comment{
        color: #999;
        float: right;
        line-height: 28px;
      }

    }

</style>
