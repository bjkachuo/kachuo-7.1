<template>
  <div>
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="normal-content" :style="conHei">
      <ul>
        <li v-for="item in list">
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
