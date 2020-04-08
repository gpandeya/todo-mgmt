<template>
<div>
    Edit Existing To Do
    <h3>
        {{id}}
    </h3>
    <div>
        <button @click="saveChanges">Save Changes</button>
        <button @click="navigateToHome">Cancel</button>
    </div>
</div>
</template>

<script>
export default {
 data(){
        return{
            id: this.$route.params.id
        }
    },
    methods:{
        navigateToHome(){
            this.$router.push('/todos')
        },
        saveChanges(){
            var toDo = {}
            toDo.key = this.id
            toDo.value = "Edited To-do"+this.id
            this.$store.dispatch('updateToDo',toDo)
            this.navigateToHome()
        }
    }
}
</script>

<style>

</style>