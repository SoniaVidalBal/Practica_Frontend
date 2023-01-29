<template>
  <div v-if="!isLoading" class="item">
    <h1 class="title">{{ product.title }}</h1>
    <div class="container">    
      <div class="slides" v-for="image in product.images" 
        :key="image"
        :image="image">
        <img :src="image"  class="image" alt="" />
      </div>
    </div>
    <div class="description">
        {{ product.description }}
      </div>
    <div class="container-buy">
      <h2>{{ product.price }}€</h2>
      <button @click="addProduct(product)" class="btn btn-success">
      Añadir al Carrito
      </button>
    </div>
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
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.container-buy{
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.slides {
  margin: 10px;
}

.image {
  width: 30vw;
}

.title{
  margin: 10px;
}
</style>