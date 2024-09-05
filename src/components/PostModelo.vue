<script>
    export default {
        props: {
            titulo: String,
            corpoDoTexto: String,
            autor: String
        }
    }
</script>

<template>
    <div class="post">
        <img src="../assets/logo.svg">
        <h2>{{titulo}}</h2>
        <p>
          {{corpoDoTexto}}
        </p>
        <p class="autor">
          por {{autor}}
        </p>
      </div>
</template>

<style>

</style>