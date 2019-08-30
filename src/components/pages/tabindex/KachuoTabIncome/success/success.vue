<template>
    <div>
      <Header style="margin-bottom: 46px" :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    </div>
</template>

<script>
    import Header from "@/components/common/Header";
    export default {
        name: "success",

        components:{ Header },

        data(){

        }
    }
</script>

<style scoped>

</style>
