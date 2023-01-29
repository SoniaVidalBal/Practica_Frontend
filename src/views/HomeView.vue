<template>
  <div class="home">
    <LogIn/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LogIn from '@/components/logIn.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    LogIn,
  },
});
</script>

<style scoped>
.home >img {
  width: 300px;
}
</style>
