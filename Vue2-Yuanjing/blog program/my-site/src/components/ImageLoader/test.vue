<template>
  <div class="test-container">
    <ImageLoader
      src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
      placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
      :duration='5000'
      @imgLoad="handleLoaded"
    />
  </div>
</template>

<script>
import ImageLoader from "./index.vue";
export default {
  name: "imageLoader",
  components: {
    ImageLoader,
  },
  methods: {
    handleLoaded() {
        console.log("image loader 組件加載完成")
    },
  },
};
</script>

<style scoped>
    .test-container{
       
        width: 500px;
        height: 400px;
        border: 5px solid grey;
        margin: 0 auto;
        
    }
</style>