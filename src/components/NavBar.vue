<template>
  <nav class="init">
      <div class="title">
        <h2>{{ title }}</h2>
      </div>
        <span>{{ greeting }}</span>
      <div>
        <button @click="toggleCart" class="btn btn-secondary">Carrito</button>
      </div>
      <div @click="logOut">
        <button class="btn btn-secondary">Log out</button>
      </div>
  </nav>
  <nav class="navbar">
    <li>
        <router-link :to="{name: 'home'}">Home</router-link>
    </li>
    <li>
        <router-link :to="{name: 'products'}">Products</router-link>
    </li>
    <li>
        <router-link :to="{name: 'user'}">User</router-link>
    </li>
  </nav>
</template>
  

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { useStore } from "vuex";
  import { useCart } from "@/composables/UseCart";
  import  useLogin  from "@/composables/useLogin"
  import router from "@/router";
  
  export default defineComponent({
    name: "NavBar",
    props: {
        title: {
            type: String, 
            required: true,
        }
    },
   
    setup() {
      const store = useStore();
      const { toggleCart } = useCart();
      const { logout } = useLogin();
      return {
        greeting: computed(() => store.getters['saludo']),
        nuevoSaludo:() => {
          store.commit('cambioSaludo', "Hola, usuario")
        },
        toggleCart,
        logOut(){
          logout(), 
          router.push({name: 'home'})
        }
      }
    }
    });
</script>
  
<style scoped>
.init {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2c3e50;
  color: white;
}
h4 {
  color: white;
}
.navbar{
  width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #415161;
    color: white;
}

.title {
  padding: 20px;
}
nav a {
  font-weight: bold;
  color: white;
  padding: 10px;
}
  
li {
  display: flex;
  justify-content: center;
  list-style: none;
}
</style>