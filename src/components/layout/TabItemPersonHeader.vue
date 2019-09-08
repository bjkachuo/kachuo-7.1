<template>
  <div class="tab-item-person-header-wrap">
    <!-- <span class="tab-item-person-header-set font-weight-36px" @click="setting">设置</span> -->
    <div class="setUp-wrap" @click="setting">
      <div class="setUp-img">
        <img src="../../assets/images/设置@2x.png" alt />
      </div>
      <span>设置</span>
    </div>
    <customerService style="float: right;margin: 15px;" ref="service"></customerService>
    <div class="msg-wrap" style="float: right" @click="message">
      <div class="setUp-img">
        <img src="../../assets/images/通知@2x.png" alt />
      </div>
      <span>消息</span>
    </div>

  </div>
</template>

<script>
  import customerService from '@/components/common/customerService/customerService'
export default {
  name: "",

  data() {
    return {};
  },

  components: {customerService},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    setting() {
      this.$router.push("/Seting");
    },
    message() {
      this.$router.push("/appmessage");
    }
  },

  watch: {}
};
</script>
<style lang='css' scoped>
.tab-item-person-header-wrap {
  width: 100%;
  height: 50px;
  /* padding: 0 15px; */
  padding-left: 20px;

  /* box-sizing: border-box; */
  background: #f5f5f5;
  /* display: flex; */
  /* flex-direction: row; */
  /* justify-content: flex-end;
  align-items: center; */
  overflow: hidden;
}
.tab-item-person-header-set {
  color: #333333;
}
.setUp-wrap {
  width: 24px;
  height: 38px;
  margin-top: 11px;
  /* background: chartreuse; */
  float: left;
}
.msg-wrap {
  width: 24px;
  height: 38px;
  margin-top: 11px;
  /* background: chartreuse; */
  float: left;
}
.setUp-img {
  width: 18px;
  height: 18px;
  /* margin: 0 auto; */
  margin-left: 1px;
}
.setUp-img img {
  width: 100%;
  background: none;
}
.setUp-wrap span {
  font-size: 10px;
}
.msg-wrap span {
  font-size: 10px;
}
.help-wrap span {
  font-size: 10px;
}
</style>
