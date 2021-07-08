<template>
  <div>
       <Avatar url='https://avatars.githubusercontent.com/u/54574452?v=4' :size="100" :percent="50"/>
  </div>
</template>

<script>
import Avatar from './index.vue'
export default {
    name: 'avatar',
    components: {
    Avatar, 
  }
}
</script>

<style>

</style>