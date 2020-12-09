<template>
    <div>
      <peoples v-bind:users="sources">

        <template v-slot:th-before>
          <th>Check</th>
        </template>

        <template v-slot:td-before='props'>
          <td> 
            <input type="checkbox"
                  class="filled-in"
                  v-model='props.model.check'
                  v-on:click='check(props.model)'
                  value="fff"
              />
          </td>
        </template>

      </peoples>
    </div>
</template>

<script>
import Peoples from './Peoples.vue'

export default {
  name: 'SelectPeople',
  components: {
    Peoples
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