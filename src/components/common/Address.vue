<template>
  <x-address @on-hide="logHide" @on-show="logShow" :title="title" v-model="value" raw-value="true" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址" inline-desc :show.sync="showAddress"></x-address>
</template>

<script>
import {
  XAddress,
  ChinaAddressV4Data,
  Value2nameFilter as value2name
} from "vux";

export default {
  components: {
    XAddress
  },
  data() {
    return {
      title: "所在位置",
      value: [],
      addressData: ChinaAddressV4Data,
      showAddress: false,
      isShow: true,
      valueData:""
    };
  },
  methods: {
    onShadowChange(ids, names) {
      this.valueData = names.join(",");
    },
    getName(value) {
      return value2name(value, ChinaAddressV4Data);
    },
    logHide(str) {
      this.$emit("selectAddress", this.valueData);
    },
    logShow(str) {
      this.isShow = true;
    }
  },
  updated() {}
};
</script>
