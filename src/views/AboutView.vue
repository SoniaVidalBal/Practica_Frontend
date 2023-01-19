<template>
  <div class="about">
    <h3>This is a products page</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { AxiosResponse } from 'axios';
import soniapopApi from '../api/soniapopApi';
import { Products } from '../models/product'

  export default defineComponent({
    props: {
      id: {
        type: Number,
        required: true,
      }
    },
    setup(props) {
      soniapopApi.get<unknown, AxiosResponse<Products[]>>('/products/').then((resp) => {
        console.log(resp.data)
      }); 
      return {};
    }
  })
</script>