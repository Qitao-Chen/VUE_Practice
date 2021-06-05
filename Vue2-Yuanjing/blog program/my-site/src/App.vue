<template>
  <div id="app">
    <profile name="RUNJIE SUN" link="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/512px-LEGO_logo.svg.png"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Amy Welcome to Your Vue.js App"
    say="I want say That this is the first step of Vue Odyssey"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import profile from './components/profile.vue'
export default {
  name: 'Appl',
  components: {
    HelloWorld,
    profile
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
