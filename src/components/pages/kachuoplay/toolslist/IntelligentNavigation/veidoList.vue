<template>
  <div>
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
      <ul>
        <li v-for="item in list" @click="">
          <img  alt="" @click="goPlay" :src="item.scenic_image">
          <div class="content">
            <div class="title">{{item.scenic_name}}</div>
            <div class="jifen">免费观看</div>
            <div class="bottom"><span>0人点赞</span><span style="margin-left: 20px;">0人留言</span></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/common/Header"

  import { getScenicPointDetails } from "@/servers/api";

    export default {
        name: "veidoList",

        components:{ Header },

        data(){
          return{
            TitleObjData: {
              titleContent: "视频列表",
              showLeftBack: true,
              showRightMore: false
            },
            list:[]
          }
        },

        methods:{
          goVeidoList(){
            getScenicPointDetails({
              longitude: this.$route.query.longitude,
              latitude: this.$route.query.latitude
            }) .then(res => {
              if(!res.data.siteMsg.scenic_video){
                this.$vux.toast.text("暂无相应景点", "middle")
                setTimeout(() => {
                  this.$vux.toast.hide()
                }, 1000)
              }
              this.list = [res.data.siteMsg , ...res.data.videoMsg]
            })
              .catch(err => {
                console.log(err);
              });
          }
        },

        computed: {
          conHei() {
            return { height: document.documentElement.clientHeight - 45 + "px" };
          }
        },

        mounted(){
          this.$nextTick(()=>{
            this.goVeidoList()
          })
        }
    }
</script>

<style scoped lang="less">
  .normal-content{
    width: 100%;
    background: #F5F5F5;
    margin-top: 45px;
    overflow: hidden;
    overflow-y: scroll;
    box-sizing: border-box;
  }

  ul{
    overflow: hidden;
    li{
      margin-top: 10px;
      display: flex;
      width: 100%;
      background-color: #fff;
      box-shadow:0px 5px 10px 0px rgba(0,101,255,0.06);
      padding: 15px;
      border-radius: 8px;
      img{
        width: 90px;
        height: 90px;
        border-radius: 4px;
      }
      .content{
        flex: 1;
        margin-left: 10px;
        position: relative;
        .jifen{
          color: #FFA238;
          font-size: 12px;
        }
        .title{
          font-weight: bold;
          font-size: 16px;
          color: #222;
        }
        .bottom{
          position: absolute;
          bottom: 0;
          color: #666;
          font-size: 14px;
        }
      }
    }
  }
</style>
