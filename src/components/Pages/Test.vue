<template>
    <div>
      <h2>Test</h2>
      <input type="button"
        value="Change"
        v-on:click="change()"
        />
      <input type="text" 
        v-model="val"/>
    </div>
</template>

<script>
export default {
  name: 'Test',
  data: ()=>{
    return {
      val: "1"
    }
  },
  methods: {
    change: function(){
      this.val += 1;
    }
  }
}
</script>