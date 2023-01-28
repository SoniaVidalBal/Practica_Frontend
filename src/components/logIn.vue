<template>
    <div class="login">
        <h1 class="login-title">Log In</h1>
        <form class="form">
            <label  class="form-label" for="email">Email:</label>
            <input class="form-input" type="email" id="email" required placeholder="hola@email.com">
            <label class="form-label" for="password">Password:</label>
            <input class="form-input" type="password" id="password" required placeholder="********">
            <button class="btn btn-primary" type="submit">Log In</button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent ({
    name: "LogIn",
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