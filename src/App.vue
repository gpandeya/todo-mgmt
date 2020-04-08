<template>
  <div>
    <h1>My To Dos</h1>
    <hr>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'app',
  components:{
    AppHeader: Header
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>
div :first-child{
color:#888888;
}
body{
  font-family: Arial, Helvetica, sans-serif;
}
</style>
