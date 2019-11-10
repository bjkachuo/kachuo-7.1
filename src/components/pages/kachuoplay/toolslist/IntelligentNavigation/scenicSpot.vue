<template>
    <div>
      <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
      <div class="normal-content" :style="conHei">
        <ul>
          <li v-for="item in list">
            <img :src="item.scenic_image"  @click="goPlayList(item)">
            <div class="content">
              <div class="title">{{item.scenic_name}}</div>
              <div class="bottom">景点视频1个</div>
              <div class="btn" @click="goChuangZuo">我要创作</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  import Header from "@/components/common/Header"
    export default {
        name: "scenicSpot",

        components:{ Header },

        data(){
          return{
            TitleObjData: {
              titleContent: "景点列表",
              showLeftBack: true,
              showRightMore: false
            },
            list:[]
          }
        },

        computed: {
          conHei() {
            return { height: document.documentElement.clientHeight - 45 + "px" };
          }
        },

        mounted(){
          this.$nextTick(()=>{
            this.getMarkerList()
          })
        },

        methods:{
          getMarkerList(){
            this.$http.get("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.site.site_list")
              .then(({ data }) => {
                this.list = data.data
              })
          },

          goChuangZuo(){
            this.$router.push('/releasevideo?branch=9')
          },
          goPlayList(item){
            this.$router.push('/intelligentnavigation/veidoList?longitude='+item.longitude+'&latitude='+item.latitude)
          }

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
        .title{
          font-weight: bold;
          font-size: 16px;
          color: #222;
        }
        .btn{
          background-color: #3976FF;
          line-height: 28px;
          font-size: 12px;
          padding: 0 8px;
          color: #fff;
          border-radius: 12px;
          position: absolute;
          right: 10px;
          bottom: 0;
        }
        .bottom{
          position: absolute;
          bottom: 0;
          color: #666;
        }
      }
    }
  }
</style>
