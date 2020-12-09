<template>
    <peoples v-bind:users="sources">

      <template v-slot:th-before>
        <vth v-bind:title="Check">
        </vth>
      </template>

      <template v-slot:td-before='props'>
        <vtd v-bind:item='props'>
        </vtd>
      </template>

    </peoples>
</template>

<script>
import Peoples from './Peoples.vue'
import vth from './vth.vue'
import vtd from './vtd.vue'

export default {
  name: 'SelectPeople',
  components: {
    Peoples
    , vth
    , vtd
  },
  props: {
    sources: Array
  },
  data: ()=>{
    return {
    }
  },
  methods: {
    check: (model)=>{
      model.check != model.check;
    }
  }
}
</script>

<style scoped>
  input[type="checkbox"]{
    opacity: 1;
    pointer-events: auto;
    position: relative;
  }
</style>