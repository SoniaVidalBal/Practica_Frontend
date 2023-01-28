<template>
  <div class="home">
    <!--<img alt="Imagen de rawpixel.com</a> en Freepik" src="../assets/66879.jpg">
    HelloWorld msg="Welcome to Soniapop"/-->
    <LogIn/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import HelloWorld from '@/components/HelloWorld.vue';
import LogIn from '@/components/logIn.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    //HelloWorld,
    LogIn,
  },
});
</script>

<style scoped>
.home >img {
  width: 300px;
}
</style>
