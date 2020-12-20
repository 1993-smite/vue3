<template>
    <div>

        <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo right">Logo</a>
            <ul id="nav-mobile" class="left hide-on-med-and-down">
                <li><router-link to="/">Home </router-link> </li>
                <li><router-link to="/test">Test </router-link></li>
                <li><router-link to="/test1">Test1</router-link></li>
                <li><a href="/test-check">Select</a></li>
                <li><a href="/test-reserve">Resource</a></li>
                <li><a href="/test-crud">CRUD</a></li>
            </ul>
            </div>
        </nav>

        <router-view></router-view>
    </div>
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