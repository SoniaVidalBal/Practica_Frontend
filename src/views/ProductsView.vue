<template>
  <div class="products">
    <h3>This is a products page</h3>
    <div v-if="isLoading">
    Cargando...
    </div>
    <div class="product-list" v-else>
      <ShowAllItems v-for="product in products" :key="product.id" :product="product"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useProducts from '@/composables/useProducts'
import ShowAllItems from '@/components/ShowAllItems.vue';

  export default defineComponent({
    name: 'ProductsView', 
    components: { ShowAllItems },
    setup() {
      const {products, isLoading, loadProducts} = useProducts()
      loadProducts();
      return {products, isLoading}
    }
  })
</script>

<style scoped>
.product-list{
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  gap: 1rem 1rem;
}

</style>