<template>
  <div>
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
      <ul>
        <li v-for="item in list" @click="goVeidoList(item)">
          <img  alt="" @click="goPlay" :src="item.scenic_image">
          <div class="content">
            <div class="title">{{item.scenic_name}}</div>
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
          goVeidoList(obj){
            getScenicPointDetails({
              longitude: obj.lng,
              latitude: obj.lat
            }) .then(res => {
              if(!res.data.siteMsg.scenic_video){
                this.$vux.toast.text("暂无相应景点", "middle")
                setTimeout(() => {
                  this.$vux.toast.hide()
                }, 1000)
                return
              }
              console.log(res);
              if (res.result === 1) {

                if (res.data) {
                  this.$store.commit("changeNavigationDetailsState", true);
                  this.descDetails = res.data;
                }
              } else {

                this.$vux.toast.show({
                  type: "text",
                  text: "暂无介绍",
                  time: 1000
                })
              }
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

          })
        }
    }
</script>

<style scoped lang="less">

</style>
