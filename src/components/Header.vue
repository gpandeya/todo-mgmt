<template>
<div>
    <span><router-link to="/" active-class="active" exact>Home</router-link></span>
    <span><router-link to="/todos" active-class="active">Manage To Dos</router-link></span>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

.active{
    border-bottom: green 2px solid;
    padding-bottom: 5px;
}
</style>