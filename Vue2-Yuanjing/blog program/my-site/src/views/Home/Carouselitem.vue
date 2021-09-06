<template>
 <div class="carousel-item-container" ref="carouselContainer">
   <div class="carousel-img">
     <ImageLoader  @imgLoad="this.showWords" :src="carousel.bigImg" :placeholder="carousel.midImg" />
   </div>
   <div 
   class="title" ref="title">{{ carousel.title }}</div>
   <div class="desc" ref="desc">{{ carousel.description }}</div>
   <div class="textWidth">{{ textWidth }}</div>
 </div>
</template>

<script>
import ImageLoader from"@/components/ImageLoader"
export default {
  data(){
    return{
      textWidth:{},
      observe: false,
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
  mounted(){
     //get the value of title and description width.
     this.textWidth = {
      title:this.$refs.title.clientWidth,
      desc:this.$refs.desc.clientWidth
    };
    // this.showWords();
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
      console.log("======",self.isMatch)
      self.$refs.title.style.width = self.textWidth.title + "px";
      self.$refs.desc.style.width = self.textWidth.desc + "px";
    },1000)
    }
  }
};
</script>

<style lang="less" scoped>
  .carousel-item-container{
    position: relative;
    width: 100%;
    height: 100%;  
    .carousel-img{
    width: 150%;
    height: 150%;  
    position: absolute;
  
  }
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