<template>
    <v-app>
        <router-link to="/">Home </router-link> 
        <router-link to="/test">Test </router-link> 
        <router-link to="/test1">Test1</router-link>
        <router-link to="/test-check">Resource</router-link>

        <router-view></router-view>
    </v-app>
</template>

<script>
export default {
  name: 'Layout',
  props: {
  },
  setup(){
      console.log("fghg");
  }
}
</script>

<style scoped>

</style>