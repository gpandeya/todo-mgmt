<template>
<div>
    <ul>
        <span v-for="todo in todoList" >
            <router-link :to="'/todos/'+todo.key+'/details'" tag="li">{{todo.value}}</router-link>
        </span>
        <!--
            <router-link to="/todos/1/details" tag="li">To Do 1</router-link>
            <router-link to="/todos/2/details" tag="li">To Do 2</router-link>
            <router-link to="/todos/3/details" tag="li">To Do 3</router-link>
        -->
    </ul>
    <div>
        <router-link tag="button" to="/todos/add">Add New To Do</router-link>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters['getToDos']
    },
    data(){
        return{
            todoList: this.$store.getters.getToDos
        }
    }
}
</script>

<style>

</style>