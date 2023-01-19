<template>
    <div class="about" v-if="user">
      <h2>Hola {{ user.name }}</h2>
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
import { defineComponent, ref } from 'vue';
import { AxiosResponse } from 'axios';
import soniapopApi from '../api/soniapopApi';
import { User } from '../models/users'

  export default defineComponent({
    props: {
      id: {
        type: Number,
        required: true,
      }
    },
    setup(props) {
      let user = ref<User>();
    
      soniapopApi.get<unknown, AxiosResponse<User>>(`/users/1`)
        .then((resp) => (user.value = resp.data)); 
      return {user};
    }
  })
</script>