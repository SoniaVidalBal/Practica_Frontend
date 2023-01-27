<template>
    <nav>
      <div class="title">
        <h2>{{ title }}</h2>
      </div>
      <span>{{ greeting }}</span>
      <ul>
          <li>
              <router-link :to="{name: 'home'}">Home</router-link>
          </li>
          <li>
              <router-link :to="{name: 'products'}">Products</router-link>
          </li>
          <li>
              <router-link :to="{name: 'user', params: {id : 1}}">User</router-link>
          </li>
      </ul>
      <div>
      <button @click="toggleCart" class="btn btn-secondary">Carrito</button>
      </div>
      <div>
      <button class="btn btn-secondary">Log out</button>
      </div>
    </nav>
</template>
  

<script lang="ts">
  import { defineComponent, computed } from "vue";
  import { useStore } from "vuex";
  import { useCart } from "@/composables/UseCart";
  
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
      return {
        greeting: computed(() => store.getters['saludo']),
        nuevoSaludo:() => {
          store.commit('cambioSaludo', "Hola, usuario")
        },
        toggleCart,
      }
    }
    });
</script>
  
<style scoped>
  nav {
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

ul {
  display: flex;
  justify-content: center;
  list-style: none;
}
  .title {
    padding: 20px;
  }
  nav a {
    font-weight: bold;
    color: white;
    padding: 10px;
  }
</style>