<template>
    <div class="login">
        <h1 class="login-title">¡Bienvenido a Soniapop!</h1>
        <h5>Inicia sesión para poder acceder a todo el contenido</h5>
        <form class="form" @submit.prevent="sendLogIn">
            <label  class="form-label" for="email">Email:</label>
            <input v-model="email" class="form-input" type="email" id="email" required placeholder="hola@email.com">
            <label class="form-label" for="password">Password:</label>
            <input v-model="password" class="form-input" type="password" id="password" required placeholder="********">
            <button class="btn btn-primary" type="submit">Log In</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import useLogin from '@/composables/useLogin';
import router from '@/router';


export default defineComponent ({
    name: "LogIn",
    setup () {
    const { login } = useLogin()
    const email = ref<string>('');
    const password = ref<string>('');
    return {
      email, 
      password,
      async sendLogIn() {
        const userinfo = { email: email.value, password: password.value }
        await login(userinfo)
        router.push({name: 'products'})
      },
    }
    }
})
</script>

<style scoped>
.login {
  padding: 2rem;
}
.login-title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
}first-of-type {
    margin-top: 0rem;
}

.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
}:focus {
    outline: 0;
    border-color: #1ab188;
  }
button {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  transition: background 0.2s;
}

</style>