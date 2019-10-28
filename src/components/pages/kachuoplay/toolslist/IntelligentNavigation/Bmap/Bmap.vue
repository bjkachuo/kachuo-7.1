<template>
  <div class="amap-page-container">
    <Header :titleContent="TitleObjData.titleContent" :showLeftBack="TitleObjData.showLeftBack" :showRightMore="TitleObjData.showRightMore"></Header>
    <div class="custom-ctrl" >
      <div @click="goScenic">景点<br>列表</div>
    </div>
    <div id="container">

    </div>
    <Popup class="content-model" ref="videoWrap" :start="myPoint" :Bmap="Bmap"></Popup>
    <NavigationTab :dataList="tabList" v-on:changePath="showPath"></NavigationTab>
  </div>
</template>

<script>
  import Header from "@/components/common/Header"
  import NavigationTab from "@/components/common/NavigationTab"
  import Popup from "../popup";
  import staticMap from '../staticMap'
  import scenicSpot from '../scenicSpot'

  import { setTimeout } from "timers";
  import { AMapManager } from 'vue-amap'

  console.log(AMapManager)

  export default {

    name: "amap-page",

    data() {
      let self = this;
      return {

        AMapManager,
        mapimg:'',
        zoom: 16,
        center: [0,0],
        Bmap:{},
        myPoint:{},
        TitleObjData: {
          titleContent: "智慧导航",
          showLeftBack: true,
          showRightMore: true
        },
        navIndex:0,
        tabList: ["全景图", "登山图", "寻花图", "戏水图", "访仙图", "问佛图", "探古图"],
        scenicList: [
          {id: "22", name: "苍岩山", position: [114.145831, 37.831976]},
          {id: "23", name: "徽州古城", position: [118.434598, 29.867]},
          {id: "24", name: "蓬莱", position: [120.752564, 37.825461]},
          {id: "25", name: "少林", position: [112.941363,34.506982]},
          {id: "26", name: "神垕", position: [113.228142, 34.118356]},
          {id: "27", name: "云雾山", position: [114.214391, 31.12476]},
          {id: "35", name: "三孔", position: [116.989873, 35.590745]},
          {id: "66", name: "云冈石窟", position: [113.144103, 40.109236]}
        ],
        roadPath: [],
        path: [],
        SCENICSPOT: [],
        SCENICLINE: [],
      };
    },

    components: {
      Header,
      Popup,
      NavigationTab,
      staticMap,scenicSpot
    },

    methods: {

      initLocalData() {
        let scenicId = sessionStorage.getItem("currentScenic")
        for (let i = 0; i < this.scenicList.length; i++) {
          if (this.scenicList[i].id == scenicId) {
            this.center = this.scenicList[i].position;
          }
        }
      },

      goScenic(){
        this.$router.push('/intelligentnavigation/listShow')
      },

      domBindEvent(){
        // setTimeout(()=>{
        //   let dom  = document.getElementsByClassName('amap-overlay-text-container')
        //
        //   for(var i=0;i<dom.length;i++){
        //     dom[i].style.boxShadow = '2px 2px 2px #ddd'
        //     dom[i].style.padding = '5px 7px'
        //     dom[i].style.borderRadius = '6px'
        //     this.markers.forEach((item,index)=>{
        //       if(item.label == dom[i].innerText) dom[i].index = index
        //     })
        //
        //     dom[i].ontouchstart = (e) =>{
        //       let index = e.target.index
        //       this.showModel(this.SCENICLINE[index].label,this.SCENICLINE[index].position)
        //     }
        //   }
        // },800)
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
          this.markers.forEach((item,i)=>{
            this.addMarker(item,i)
          })
          this.Bmap.panTo(new BMap.Point(this.SCENICLINE[0].position[0],this.SCENICLINE[0].position[1]))
          this.domBindEvent()
        } else {
          this.$vux.toast.text("暂无相应景点", "middle")
          setTimeout(() => {
            this.$vux.toast.hide()
          }, 1000)
        }
      },
      //绘制路线

      showModel(name,position) {

        let clickPosition = {
          name:name,
          lat:position[1],
          lng:position[0]
        }
        this.$refs.videoWrap.getScenicDetails(clickPosition);
      },

      showPath(index) {
        this.markers = []
        this.navIndex = index;
        this.getMarkerList(index)
        // this.init(this.mapCenter, index)
      },

      getMarkerList(type){
        this.$http.get("https://core.kachuo.com/app/ewei_shopv2_app.php?i=5&c=site&a=entry&m=ewei_shopv2&do=mobile&r=scenic.site.site_list&type="+type)
          .then( datas  => {

            // this.mapimg = datas.data.mapimg
            let data = datas.data.data
            let arr = []
            if(data == ''){
              data = []
            }
            if(data.push){
              data.forEach(item=>{
                arr.push({position:[ item.longitude,item.latitude ],label:item.title,left:item.left,top:item.top})
              })

            }else{
               Object.values(data).forEach(item=>{
                 console.log(item);
                 item ? arr.push({position:[ item.longitude,item.latitude ],label:item.title,left:item.left,top:item.top}) : ''
               })
            }
            this.SCENICLINE = arr

            console.log(this.SCENICLINE);
            if(type == 0) this.initLocalData()
            else{
              this.center = arr.length ? arr[0].position : this.center
            }
            this.init();
          })
      },

      addMarker(data,index){
        console.log(data);
        let myIcon = new BMap.Icon(require("@/assets/images/amap-icon/scenic.png"), new BMap.Size(23, 25), {
          anchor: new BMap.Size(10, 25),
          imageOffset: new BMap.Size(0, 0)   // 设置图片偏移
        });
        let point = new BMap.Point(data.position[0],data.position[1])
        // 创建标注对象并添加到地图
        let marker = new BMap.Marker(point, {icon: myIcon});
        this.Bmap.addOverlay(marker);
        let label = new BMap.Label(data.label, {position:point,offset:new BMap.Size(0, -44)});  // 创建文本标注对象
        label.setStyle({
          color : "red",
          fontSize : "12px",
          height : "20px",
          lineHeight : "20px",
          fontFamily:"微软雅黑",
          transform: 'translateX(-50%)'
        });
        this.Bmap.addOverlay(label);
        marker.addEventListener("click", ()=>{
          this.showModel(data.label,data.position)
        })




      }

    },
    computed: {
      userInfo() {
        return this.$store.state.userLoginInfo;
      },
      setMapHeight() {
        return { height: document.documentElement.clientHeight - 90 + "px" }
      },
      showModelFlag: {
        get: function() {
          return this.$store.state.navigationDetails;
        },
        set: function() {}
      }
    },

    mounted() {
// 创建地图实例
      this.Bmap = new BMap.Map("container")
      let self = this

      let geolocation = new BMap.Geolocation({maximumAge:10});
      // setInterval(function () {
            geolocation.getCurrentPosition(function (r) {
              if (this.getStatus() == BMAP_STATUS_SUCCESS) {

                self.Bmap.getOverlays().forEach(item=>{
                  if(item.getTitle() == 'xiang'){
                    self.Bmap.removeOverlay(item)
                  }
                })

                // alert(JSON.stringify(r.point))
                self.myPoint = r.point

                let myIcon = new BMap.Icon(self.userInfo.avatar, new BMap.Size(30,30))
                let mk = new BMap.Marker(self.myPoint,{icon:myIcon,title:'xiang'});
                self.Bmap.addOverlay(mk);
                mk.Ac.style.borderRadius = '50%'
                mk.Ac.style.width = '30px'
                mk.Ac.style.height = '30px'
                mk.Ac.style.overflow = 'hidden'

                // self.Bmap.panTo(r.point);
                // alert('您的位置：'+r.point.lng+','+r.point.lat);
              } else {
                // alert('failed'+this.getStatus())
              }
            })
      // },5000)
      this.getMarkerList('')
    }
  };
</script>
<style scoped>

  .custom-ctrl{
    background: rgba(0,0,0,.5);
    color: #fff;
    position: absolute;
    right: 15px;
    z-index: 99999;
    /*width: 2em;*/
    padding: 10px 8px;
    top: 84px;
    border-radius: 4px;
  }


  #container {
    width: 100%;
    height: 100%;
    margin-top: 50px;
  }

  .amap-page-container {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .content-model {
    position: relative;
    z-index: 9999
  }
</style>
