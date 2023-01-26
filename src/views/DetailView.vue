<template>
    <div class="about">
      <h1>This is a detail page</h1>
    </div>
    <div v-if="!isLoading">
    <h1>{{ product.title }}</h1>
    <h2>{{ product.price }}</h2>
    <img :src="product.images[0]" alt="" />

    <button @click="addProduct(product)" class="btn btn-success">
      Añadir al Carrito
    </button>
  </div>
  <div v-else>Cargando...</div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import { useCart } from '@/composables/UseCart';
import  useProducts from '@/composables/useProducts'

export default defineComponent({
  props: {
    id: {
      type: Number,
      required: true,
    }
  },
  setup(props) {
    const { addProduct } = useCart();
    const {product, loadProduct, isLoading } = useProducts();

    loadProduct(props.id);
    return {
      product, 
      addProduct,
      isLoading,
    };
  },
})
</script>