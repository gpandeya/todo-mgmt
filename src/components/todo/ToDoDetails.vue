<template>
<div>
    Detail of a selected To Do
    <div>
        you are seeing deatils of: {{id}} | {{selectedToDo.value}} 

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
            id: this.$route.params.id,
            selectedToDo:{
                key:'',
                value:''
            }
        }
    },
    mounted(){
        let allToDos = this.$store.getters.getToDos
        let found  = allToDos.filter(obj=>obj.key==this.id)
        console.log('found : ' , JSON.stringify(found))
        if(found)
            Object.assign(this.selectedToDo,found[0])
        console.log('this.selectedToDo : ', this.selectedToDo)
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