<template>
  <div v-if="!isLoading" class="item">
    <h1>{{ product.title }}</h1>
    <h2>{{ product.price }}€</h2>
    <img :src="product.images" alt="" />
    <div class="description">
      {{ product.description }}
    </div>
    
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

<style scoped>
.description{
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;

}
</style>