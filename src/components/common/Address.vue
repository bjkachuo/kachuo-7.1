<template>
  <x-address @on-hide="logHide" @on-show="logShow" :title="title" v-model="value" :raw-value="1 == 1" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址" inline-desc :show.sync="showAddress"></x-address>
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
    },
    showAxiosData(data){
      let arr = []
      console.log(data);
      for(var i=0;i<ChinaAddressV4Data.length;i++){
        if(data.province == ChinaAddressV4Data[i].name){
          console.log(0);
          arr[0] = ChinaAddressV4Data[i].value
        }
        if(data.city == ChinaAddressV4Data[i].name){
          console.log(1);
          arr[1] = ChinaAddressV4Data[i].value
        }
        if(data.area == ChinaAddressV4Data[i].name){
          console.log(2);
          arr[2] = ChinaAddressV4Data[i].value
        }
      }
      console.log(arr);
      this.value = arr
    }
  },
  updated() {}
};
</script>
