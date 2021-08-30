<template>
  <div class="home-container" ref="container">
    <h1>Home</h1>
    <button @click="handleClick">Click</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      // console.log(this.$refs.container);
      this.$showMessage({
        content: "submit successed",
        type: "success",
        duration: 2000,
        container: this.$refs.container,
        callback: function () {
          console.log("showMessage Completed");
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  width: 600px;
  height: 500px;
  background-color: aqua;
  border: 1px solid;
  margin: 50px auto;
}
</style>>
