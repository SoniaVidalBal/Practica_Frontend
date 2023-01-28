<template>
  <NavBar
    title= "Soniapop">
  </NavBar>
  <router-view/>
  <ShoppingCart v-show="isCartOpen"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import  NavBar from "../src/components/NavBar.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import { useCart } from "./composables/UseCart";

export default defineComponent({
  name: "AppComponent",
  components: {
    NavBar,
    ShoppingCart,
  }, 
  setup() {
    const { isCartOpen } = useCart();
    return {
      isCartOpen,
    };
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
