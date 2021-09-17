<template>
 <div class="carousel-item-container" 
  ref="carouselContainer" 
  @mousemove="handleMouseMove($event)" 
  @mouseleave="handleMouseLeave">
   <div class="carousel-img" ref="carouselImg"
  :style="imagePosition"
   >
     <ImageLoader  @imgLoad="this.showWords" :src="carousel.bigImg" :placeholder="carousel.midImg" />
   </div>
   <div 
   class="title" ref="title">{{ carousel.title }}</div>
   <div class="desc" ref="desc">{{ carousel.description }}</div>
   <div class="textWidth">{{ textWidth }} {{ mouseX }} {{ mouseY }}</div>
  
 </div>
</template>

<script>
import ImageLoader from"@/components/ImageLoader"
export default {
  data(){
    return{
      textWidth:{
        title:0,
        desc:0,
      },
      containerSize:null,
      innerSize:null,
      mouseX:0,
      mouseY:0,
        }
  },
  props:{
    carousel:{
      type:Object,
      require:true
    },
  },
  components:{
    ImageLoader,
  },
  computed:{
    imagePosition() {
      //get the ratio between extraWidth and carouselContainer.width
      if (!this.innerSize || !this.containerSize) {
        //innerSize no value before mounted.
        return;
      }
      const extraWidth = this.innerSize.width - this.containerSize.width;
      const extraHeight = this.innerSize.height - this.containerSize.height;
     
      const left = (-extraWidth * this.mouseX) / this.containerSize.width;
      const top =  (-extraHeight* this.mouseY) / this.containerSize.height;
      return {
      transform:`translate(${left}px,${top}px)`
      }
    },
    //optimize mouse init position---at the centre of container.
    mouseCenter(){
      return{
        x:this.containerSize.width / 2,
        y:this.containerSize.height / 2,
      }
    }
  },
  mounted(){
     //get the value of title and description width.
      this.textWidth = {
      title:this.$refs.title.clientWidth,
      desc:this.$refs.desc.clientWidth
    };
    this.setSize();
    window.addEventListener("resize",this.setSize)

    // this.showWords();
  },
  destroyed(){
    window.removeEventListener("resize",this.setSize)
  },
  methods:{
    showWords(){
      //display title and description
    this.$refs.title.style.opacity = 1;
    this.$refs.title.style.width = 0;
    this.$refs.desc.style.opacity =1;
    this.$refs.desc.style.width = 0;
    const self = this;
    setTimeout(function(){
      self.$refs.title.style.width = self.textWidth.title + "px";
      self.$refs.desc.style.width = self.textWidth.desc + "px";
    },1000)
    },
    setSize(){
    this.containerSize = {
      width: this.$refs.carouselContainer.clientWidth,
      height:this.$refs.carouselContainer.clientHeight,
    };
    this.innerSize = {
      width:this.$refs.carouselImg.clientWidth,
      height:this.$refs.carouselImg.clientHeight,
    };
    
    },
    handleMouseMove(e){
      const rect = this.$refs.carouselContainer.getBoundingClientRect();
      
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
     
    },
    handleMouseLeave(e){
      this.mouseX = this.mouseCenter.x;
      this.mouseY = this.mouseCenter.y;
    }
  }
};
</script>

<style lang="less" scoped>
  .carousel-item-container{
    position: relative;
    width: 100%;
    height: 100%;  
    overflow: hidden;
    .carousel-img{
    width: 110%;
    height: 110%;  
    position: absolute;
  
  }
  //temp for test
//  .carousel-item-container{
//     position: relative;
//     width: 30%;
//     height: 30%;  
//     left: 30%;
//     top: 30%;
   
    
//     .carousel-img{
//     transition: .3S;
//     width: 120%;
//     height: 120%;  
//     position: absolute;
//   }


  .title, .desc{
    position: absolute;
    color: aliceblue;
    left: 30px;
    letter-spacing: 3px;
    white-space: nowrap;
    overflow: hidden;
    text-shadow: -1px 0 0 rgba(0,0,0,.5),1px 0 0 rgba(0,0,0,.5),0 1px 0 rgba(0,0,0,.5),0 -1px 0 rgba(0,0,0,.5);
    opacity: 0;
  }
  .title{
    transition: 3s;
    top: calc(50% - 40px);
    font-size: 2em;
  }
  .desc{
    transition: 3s 1s;
    font-size: 1.2em;
    top: calc(50% + 20px);
  }
  .textWidth{
    position: absolute;
    color: aliceblue;
    top: 20px;
  }
  }
 
</style>