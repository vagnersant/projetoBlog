<script>
    export default {
        props: {
            titulo: String,
            corpoDoTexto: String,
            autor: String,
            imagem: String
        }
    }
</script>

<template>
    <div class="post">
        <img :src="imagem">
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