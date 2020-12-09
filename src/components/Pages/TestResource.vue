<template>
    <h1>
        Резерв
    </h1>
    <div class="row">
      <div class="col s6">
        <Resource v-bind:sources="users">
        </Resource>
      </div>
      <div class="col s6">
        <peoples v-bind:users="getReserved">
        </peoples>
      </div>
    </div>
</template>

<script>
import Resource from './../Resources/Resource'
import Peoples from './../Selectors/Peoples.vue'

export default {
  components: { Resource, Peoples },
  name: 'TestResource',
  computed: {
    getReserved: function(){
      return this.users.filter(x=>x.reserve);
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
    users.forEach(x=>x.reserve = false)
    return {
      users
    };
  },
  methods: {

  }
}
</script>