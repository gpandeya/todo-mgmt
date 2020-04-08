<template>
<div>
    <h3>
        Manage To Dos       
    </h3>
    <hr>
    Index page for to-dos.
    It is not the app Home page. 
    {{getToDos.length}}
    <hr>
    <router-view></router-view>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    computed:{
        ...mapGetters(['getToDos'])
    }
}
</script>

<style>

</style>