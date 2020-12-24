<template>
  <Layout/>
</template>

<script>
import Layout from './components/Layout.vue'
import M from 'materialize-css'

export default {
  name: 'App',
  components: {
    Layout
  },
  mounted (){
    M.AutoInit()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
