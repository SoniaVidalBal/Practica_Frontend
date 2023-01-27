<template>
  <div class="home">
    <!--<img alt="Imagen de rawpixel.com</a> en Freepik" src="../assets/66879.jpg">
    HelloWorld msg="Welcome to Soniapop"/-->
    <logIn/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import HelloWorld from '@/components/HelloWorld.vue';
import logIn from '@/components/logIn.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    //HelloWorld,
    logIn,
  },
});
</script>

<style scoped>
.home >img {
  width: 300px;
}
</style>
