<template>
    <td> 
        <input type="checkbox"
                class="filled-in"
                v-model='model.check'
                v-on:click='check(model)'
                value="fff"
            />
    </td>
</template>

<script>
export default {
  name: 'vtd',
  props: {
    item: Object
  },
  data: function(){
    let model = this.item;
    return {
      ...model
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