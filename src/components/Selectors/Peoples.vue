<template>
    <table>
        <thead>
            <tr>
                <slot name="th-before">
                </slot>

                <th>Name</th>
                <th>Country</th>
                <th>Position</th>
                
                <slot name="th-post">
                </slot>
            </tr>
        </thead>
        <slot></slot>
        <tbody>
            <tr 
                v-for="(user, index) in users"
                v-bind:key="index">

                <slot name="td-before" v-bind:model='user'>
                </slot>  

                <td>{{user.name}}</td>
                <td>{{user.country}}</td>
                <td>{{user.position}}</td>

                <slot name="td-post" v-bind:model='user'>
                </slot>  
            </tr>
        </tbody>
      </table>
</template>

<script>
export default {
    props: {
        users: Array
    },
    name: 'Peoples',
    data: ()=>{
      return {};
    },
    methods: {

    }
}
</script>