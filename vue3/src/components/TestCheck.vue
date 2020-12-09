<template>
    <div class="row">
      <div class="col s6">
        <select-people v-bind:sources="users">
        </select-people>
      </div>
      <div class="col s6">
        <peoples v-bind:users="getChecked">
        </peoples>
      </div>
    </div>
</template>

<script>
import SelectPeople from './Selectors/SelectPeople.vue'
import Peoples from './Selectors/Peoples.vue'

export default {
  components: { SelectPeople, Peoples },
  name: 'TestCheck',
  computed: {
    getChecked: function(){
      return this.users.filter(x=>x.check);
    }
  },
  data: ()=>{
    let users = [
      {
        name: 'Petr I',
        country: 'Ros. Impires',
        position: 'King'
      },
      {
        name: 'Stalin',
        country: 'SSSR',
        position: 'Leader'
      },
      {
        name: 'Rurik',
        country: 'Ros\'',
        position: 'Prince'
      },
      {
        name: 'Putin',
        country: 'Russia',
        position: 'President'
      },
      {
        name: 'Suvorov',
        country: 'Ros. Impires',
        position: 'General'
      }
    ]
    users.forEach(x=>x.check = false)
    return {
      users
    };
  },
  methods: {

  }
}
</script>