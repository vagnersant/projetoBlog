<script>
    export default {
        name: "Login",
        data() {
            return {
                email: "",
                senha: ""
            }
        },
        methods: {
            // Método que emite um evento para o componente pai
            emitLogin() {
                // chama o método checkLogin do componente pai
                console.log("Email: " + this.email);
                this.$emit("login", this.email);
            },
        }
    }
</script>

<template>
    <div id="login">
        <h1>Login</h1>
        <form>
            <label for="email">E-mail:</label>
            <input v-model="email" placeholder="Enter your email" />
            <label for="senha">Senha:</label>
            <input v-model="senha" type="password" id="senha" name="senha">
            <button @click="emitLogin">Entrar</button>
        </form>
    </div>
</template>

<style scoped>
    h1{
        font-size: 70px;
    }

    h1, h2 {
        font-weight: bolder;
    }
</style>