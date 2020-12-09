<template>
    <peoples v-bind:users="sources">

      <template v-slot:th-post>
        <th>Reserve</th>
      </template>

      <template v-slot:td-post='props'>
        <td> 
            <input type="checkbox"
                    class="filled-in"
                    v-model='props.model.reserve'
                />
        </td>
      </template>

    </peoples>
</template>

<script>
import Peoples from './../Selectors/Peoples'

export default {
  name: 'Resource',
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
    reserve: (model)=>{
      model.reserve != model.reserve;
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