<template>
<div>
    Detail of a selected To Do
    <div>
        you are seeing deatils of: {{id}}
    </div>
    <div>
        <!--<router-link tag="button" :to="'/todos/'+id+'/edit'">Edit </router-link> -->
        <router-link tag="button" :to="{name :'todoEdit', params:{id: id} }">Edit </router-link>
        
        <!--<button @click="NavigateToEdit()">Edit</button> -->
    </div>
</div>

</template>

<script>
export default {
    created(){
        console.log('Inside To Do Details page and id is : ' , this.id)
    },
    data(){
        return{
            id: this.$route.params.id
        }
    },
    methods:{
        NavigateToEdit(){
            this.$router.push('/todos/'+this.id+'/edit')
        }
    }

}
</script>

<style>

</style>