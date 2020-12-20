<template>
    <div class="row">
        <div class="row" 
            v-for="(it, index) in data"
            v-bind:key="index"
            >
            <div class="input-field col s3">
                {{it.Id}}
            </div>
            <div class="input-field col s6">
                <input 
                    id="last_name"
                    type="text" 
                    class="validate"
                    v-model="it.Name"
                    />
                <label 
                    for="last_name"
                    >Name</label>
            </div>
            <div class="input-field col s3">
                <a class="waves-effect waves-light btn"
                    v-on:click="remove(x=>x.Id == it.Id)"
                    >Remove</a>
            </div>
        </div>
    </div>
</template>

<script>
import CRUD from './../../scripts/crud'
import { reactive } from 'vue'

export default {
    name: 'TestCRUD',
    setup(){
        let data = [];
        
        for(let index = 0; index < 5;){
            data.push({
                Id: ++index,
                Name: `Test${index}`,
            });
        }

        const dt = reactive(data);

        let crud = new CRUD(data);
        console.log(crud);
        //let update = crud.update;
        // let read = crud.read;
        let remove = crud.remove;

        return {
            data: dt,
            // read,
            // update,
            remove
        }

    }
}
</script>

