<template>
  <div class="about">
    <h3>This is a products page</h3>
  </div>
  <div v-for="product in products"
  :key="product">
  <h4>
  {{ product }}
  </h4>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { AxiosResponse } from 'axios';
import soniapopApi from '../api/soniapopApi';
import { Products } from '../models/product'

  export default defineComponent({
    setup(props) {
      let products = ref<Products>();
      soniapopApi.get<unknown, AxiosResponse<Products>>('/products')
        .then((resp) => (products.value = resp.data)); 
      return {products};
    }
  })
</script>