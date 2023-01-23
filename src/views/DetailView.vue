<template>
    <div class="about">
      <h1>This is a detail page</h1>
    </div>
    <button @click="addProduct(product)" class="btn btn-primary">Añadir al carrito</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { AxiosResponse } from 'axios';
import soniapopApi from '../api/soniapopApi';
import { Products } from '../models/product'
import { useCart } from '@/composables/UseCart';

  export default defineComponent({
    props: {
      id: {
        type: Number,
        required: true,
      }
    },
    setup(props) {
      const { addProduct } = useCart();
      let product = ref<Products>();
      soniapopApi.get<unknown, AxiosResponse<Products[]>>(`/products/${props.id}`).then((resp) => {
        product.value = resp.data
      }); 
      return {
        product, 
        addProduct,
      };
    }
  })
</script>