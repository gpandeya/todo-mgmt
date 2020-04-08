<template>
<div>
    Add New To Do
    <div><button @click="save">Submit</button></div>
</div>
</template>

<script>
export default {
    methods:{
        save(){
            var newKey = this.$store.getters.getToDos.length+1
            var newToDo={
                    key:newKey,
                    value:"to-do-"+newKey
                }
            this.$store.dispatch('addNewToDo',newToDo)
            this.$router.push('/todos')
        }
    }
}
</script>

<style>

</style>