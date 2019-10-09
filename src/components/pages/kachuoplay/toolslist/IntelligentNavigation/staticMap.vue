<template>
  <div class="wrap">
    <div class="normal-content" :style="conHei" @touchstart="start($event)">
      <div class="relative" style="width: 833px">
        <img :src="mapimg" alt=""  style="width: 833px;background:transparent;height: 1000px;"  v-touch:scaleTouch = "{func: scalePic, param: ''}" class="static-map">
        <div  v-for="item in markers" v-if="item.left != '0.00'">
          <div class="title" :style="{top: item.top+'%',left: item.left+'%',marginLeft: 'calc('+ -item.label.length / 2 +'em' +  ' - '+ (10+'px') +')' }" @click="showModel(item.label,item.position)">{{item.label}}</div>
          <div class="icon" :style="{top: item.top+'%',left: item.left+'%'}" @click="showModel(item.label,item.position)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['markers','mapimg'],
    data() {
      return {
        marks:[
          {title:'黄渤海分界线', left:'32.75%', top:'11.19%'},
          {title:'八仙礁', left:'46.83%', top:'14.8%'},
        ],
        baseLeft : 0,
        baseTop: 0,
        bodyWidth: document.body.clientWidth,
        ele: null, // 不能在这里设置， dom还没有生成
        scalc:1,
      };
    },
    methods:{
      start(e){
        console.log(e);
      },
      showModel(label,position){
        this.$parent.showModel(label,position)
      },
      scalePic(param, is_endScale){
          // alert(1)
          this.ele =document.getElementsByClassName('static-map')[0]; // 这个应该在图片显示的时候设置
          this.ele2 = document.getElementsByClassName('relative')[0]
          // let nodeStyle = this.ele.style.transform;

          if(is_endScale){
            // 缩放图片结束，要重新计算定位
            // this.setMaxdisp(changeSize,parseInt(this.ele.style.marginLeft), parseInt(this.ele.style.marginTop), 'scale')
            return
          }
          // let a = 0
          // alert(param)
          // param > 0 ? a = 1 : a=-1
          // if(nodeStyle){
            // 如果存在的话，就说明已经设置了，scale已经改变了
        let old = this.scalc
            this.scalc = this.scalc + param
        // alert(this.scalc)
          this.scalc > 3 ? this.scalc = 3 : null
          this.scalc < 1 ? this.scalc = 1 : null

            this.ele.style.width = 833*this.scalc+'px'
            this.ele2.style.width = 833*this.scalc+'px'
            this.ele.style.height = 1000*this.scalc+'px'
            this.ele2.style.height = 1000*this.scalc+'px'

            this.setMaxdisp(this.scalc - old,param.x, param.y, 'move')
            // this.ele.style.transform = 'translate(-50%, -50%) scale('+currScaleSize+','+currScaleSize+')';
      },
      setMaxdisp:function(changeSize, changeX, changeY, type){
        // 计算最大位移
        // naturalWidth ： 是图片原始的宽度，通过比例可以计算出当前图片在页面的高度
        let box = document.getElementsByClassName('normal-content')[0]

        let currentLeft = box.scrollLeft
        let currentTop = box.scrollLeft

        let picHeight =  this.bodyWidth  / (this.ele.naturalWidth / this.ele.naturalHeight);
        let maxTop = ( picHeight * changeSize - window.innerHeight) /2
        let maxLeft = this.bodyWidth / 2 * (changeSize - 1)

        box.scrollTo(currentLeft + changeSize*833/2,currentTop+changeSize*1000/2)

        // 如果图片当前尺寸大于屏幕尺寸，可以移动
        // if(maxTop > 0){
        //   if(changeY >= maxTop){
        //     this.ele.style.marginTop = maxTop + 'px';
        //   }else if(changeY < -maxTop){
        //     this.ele.style.marginTop = -maxTop + 'px'
        //   }else if(type==='move'){
        //     this.ele.style.marginTop = changeY+'px';
        //   }
        // }else if(type==='move'){
        //   this.ele.style.marginTop = 0 +'px';
        // }
      }
    },

    computed: {
      conHei() {
        return {
          height: document.documentElement.clientHeight - 45 + "px",
          overflow:'auto'
        };
      }
    },
  };
</script>
<style lang='css' scoped>
  .normal-content{
    margin-top: 46px;
  }
  .relative{
    position: relative;
  }
  .icon{
    margin-top: -24px;
    margin-left: -12px;
    width: 24px;
    height: 24px;
    background-image: url("./icon.png");
    background-size: 100% 100%;
    position: absolute;
  }
  .title{
    color: #fff;
    padding: 0 10px;
    position: absolute;
    border-radius: 4px;
    background-color:#000;
    line-height: 24px;
    margin-top: -50px;
  }
  img{
    height: auto;
  }
</style>
