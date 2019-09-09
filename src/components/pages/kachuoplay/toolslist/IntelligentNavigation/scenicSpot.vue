<template>
    <div>
      <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
      <div class="normal-content" :style="conHei">
        <ul>
          <li>
            <img  alt="" @click="goPlay">
            <div class="content">
              <div class="title"></div>
              <div class="bottom">景点视频1个</div>
              <div class="btn">我要创作</div>
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
            SCENICLINE:[],
            markers:[]
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
                let datas = data.data

                let arr = []
                if(datas == ''){
                  datas = []
                }
                datas.forEach(item=>{
                  arr.push({position:[ item.longitude,item.latitude ],label:item.title,left:item.left,top:item.top})
                })
                this.SCENICLINE = arr
                console.log(this.SCENICLINE);

                this.init();
              })
          },
          init() {

            if (this.SCENICLINE.length) {
              this.markers = []

              this.SCENICLINE.forEach((item, index) => {
                this.markers.push({
                  position:[item.position[0], item.position[1]],
                  left:item.left,
                  top:item.top,
                  label:item.label,
                })
              })
              this.domBindEvent()
            } else {
              this.$vux.toast.text("暂无相应景点", "middle")
              setTimeout(() => {
                this.$vux.toast.hide()
              }, 1000)
            }
          },
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
