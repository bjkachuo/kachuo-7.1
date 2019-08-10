<template>
  <Header :titleContent="titleContent"></Header>
</template>

<script>
  import Header from '@/admin/scenicSpot/components/header'
    export default {
        name: "information",

        components:{Header},

        data(){
          return{
            titleContent:'景区信息'
          }
        },
    }
</script>

<style scoped>

</style>
