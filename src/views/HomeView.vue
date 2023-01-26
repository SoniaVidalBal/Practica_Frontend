<template>
  <div class="home">
    <img alt="Imagen de rawpixel.com</a> en Freepik" src="../assets/66879.jpg">
    <HelloWorld msg="Welcome to Soniapop"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
  },
});
</script>

<style scoped>
.home >img {
  width: 300px;
}
</style>
