<template>
  <div id="app">
    <h2>{{ fullName }}</h2>
    <h2>{{ fullName }}</h2>
    <h2>{{ fullName }}</h2>
    <h2>{{ fullName }}</h2>
    <h3>{{ getFullName() }}</h3>
    <h3>{{ getFullName() }}</h3>
    <h3>{{ getFullName() }}</h3>
    <Icon iconType="home"/>
    <Icon iconType= "warn" />
    <button @click="fullName='ERIC CHEN'">click me to change the fullName</button>
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
import Icon from './components/Icon.vue'
export default {
  name: 'Appl',
  components: {
    HelloWorld,
    Profile,
    Avatar,
    Icon
  },
  data(){
    return {
      firstName: "Qitao",
      lastName:"Chen"
    }
  },
  computed:{
    fullName:{
      // console.log("full name called");
      // return this.firstName + " " + this.lastName
      get(){
      console.log("full name called");
      return this.firstName + " " + this.lastName
      },
      set(val){
        console.log("setting the full name...")
        this.firstName = val.substr(0,val.indexOf(" "));
        this.lastName = val.substr(val.indexOf(" ")); 
      }
    } 
  },
  methods:{
    getFullName(){
      console.log("method-full name called");
      return this.firstName + " " + this.lastName
    }
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
