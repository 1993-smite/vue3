<template>
    <div>
      <h2>Test1</h2>
      <input type="button"
        value="Change"
        v-on:click="test.change()"
        />
      <input type="text" 
        v-model="test.Val.value"/>
    </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
  name: 'Test1',

  setup(){
    const val = ref("test1");
    function change(){
      Val.value = `${Val.value}...test---`;
    }
    const Val = computed({
      get: () => val.value,
      set: value => val.value = value
    });
    
    return {
      test: {
        val
        , change,
        Val
      }
    }
  }
}
</script>