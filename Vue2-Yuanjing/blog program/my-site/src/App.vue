<template>
  <div id="app">
    <Profile name="RUNJIE SUN" link="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/512px-LEGO_logo.svg.png"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <Avatar url='https://avatars.githubusercontent.com/u/54574452?v=4' :size="100" :percent="50"/>
    <HelloWorld msg="Amy Welcome to Your Vue.js App"
    say="I want say That this is the first step of Vue Odyssey"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Profile from './components/profile.vue'
import Avatar from './components/Avatar.vue'
export default {
  name: 'Appl',
  components: {
    HelloWorld,
    Profile,
    Avatar
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
