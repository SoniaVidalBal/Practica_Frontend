<template>
    <div class="about" v-if="user">
      <h2>Hola {{ user?.name }}</h2>
      <h4>Estos son tus datos:</h4>
      <img :src="user.avatar" alt="">
      <h5> Correo electrónico: {{ user.email }} </h5>
      <h5> Id: {{ user.id }} </h5>
    </div>
    <div v-else>
      Cargando...
    </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import useLogin from '@/composables/useLogin';

  export default defineComponent({
  
    setup() {
      const { user, loadUser } = useLogin();
      loadUser()
      return {
        loadUser,
        user,
      }
    }
  })
</script>