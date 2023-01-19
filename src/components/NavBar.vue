<template>
    <nav>
      <div class="title">
        <h2>{{ title }}</h2>
      </div>
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
    </nav>
</template>
  

<script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "NavBar",
    props: {
        title: {
            type: String, 
            required: true,
        }
    },
    setup() {
        return {}
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