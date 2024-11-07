<script>
    import { RouterLink } from 'vue-router';
    export default {
        props: {
            link: String,
            textoDoBotao: String
        }
    }
</script>

<template>
    <div>
        <RouterLink :to="link">{{textoDoBotao}}</RouterLink>
    </div>
</template>

<style scoped>
    div {
        padding: 10px;
        padding: 20px;
        float: left;
    }

    a {
        color: 000;
        padding: 10px 20px;
    }
    
    a:hover{
        color: white;
        background-color: green;
        padding: 10px 20px;
    }
</style>