<template>
  <div id="app">
    
    <router-view></router-view>
    
    
  </div>
</template>

<script>
import Register from './components/Register.vue'

export default {
  name: 'app',
  components: {
    Register
  }
}
</script>

<style>

</style>
