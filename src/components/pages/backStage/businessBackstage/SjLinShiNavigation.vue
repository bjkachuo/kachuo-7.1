<template>
  <div>
    <div>
      <h1 style="font-size:24px;font-weight: bold;">商家临时分类页(后期需用状态判断进入商家种类)</h1>
    </div>
    <ul>
      <li @click="goEatDrink">吃喝类商家后台入口---></li>
      <li @click="goLive">住类商家后台入口---></li>
    </ul>
    <p style="font-size:20px;color:red;margin-left:80%;" @click="goback">返回</p>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    //返回
    goback() {
      this.$router.go(-1);
    },
    //吃吧喝吧后台
    goEatDrink() {
      this.$router.push("/EatOrDrinkBusinessBsIndex");
    },
    //住吧后台
    goLive() {
      this.$router.push("/LiveBusinessBsIndex");
    }
  },
  components: {}
};
</script>

<style scoped lang="css">
li {
  margin: 20px;
  font-size: 20px;
}
</style>
