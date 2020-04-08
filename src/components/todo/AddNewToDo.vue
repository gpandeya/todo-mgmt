<template>
<div>
    <h3>Add New To Do</h3>
    <div>
        <input type="text" id="description" v-model="todoDescription">
    </div>
    <div><button @click="save">Submit</button></div>
</div>
</template>

<script>
export default {
    methods:{
        data(){
            return{
                todoDescription:''
            }
        },
        save(){
            var newKey = this.$store.getters.getToDos.length+1
            var newToDo={
                    key:newKey,
                    value: this.todoDescription
                }
            this.$store.dispatch('addNewToDo',newToDo)
            this.$router.push('/todos')
        }
    }
}
</script>

<style>

</style>