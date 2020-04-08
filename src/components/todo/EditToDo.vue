<template>
<div>
    <h3>
        You are editing to do : {{id}}
    </h3>
    <div>
        <input type="text" id="description" v-model="updatedDescription">
    </div>
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
            id: this.$route.params.id,
            updatedDescription: ''
        }
    },
    methods:{
        navigateToHome(){
            this.$router.push('/todos')
        },
        saveChanges(){
            var toDo = {}
            toDo.key = this.id
            toDo.value = this.updatedDescription
            this.$store.dispatch('updateToDo',toDo)
            this.navigateToHome()
        }
    }
}
</script>

<style>

</style>