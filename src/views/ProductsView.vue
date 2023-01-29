<template>
  <div class="search">
    <SearchBar @filter="filterByName"/>
  </div>

  <div class="products">
    <div v-if="isLoading">
    Cargando...
    </div>
    <div class="product-list" v-else>
      <ShowAllItems v-for="product in products" 
      :key="product.id" 
      :product="product" 
      @addProduct="addProduct"
      @goToDetail="goToDetail"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useProducts from '@/composables/useProducts'
import ShowAllItems from '@/components/ShowAllItems.vue';
import { useCart } from '@/composables/UseCart';
import { useRouter } from 'vue-router';
import { Products } from '@/models/product';
import SearchBar from '@/components/searchBar.vue';

  export default defineComponent({
    name: 'ProductsView', 
    components: { 
      ShowAllItems,
      SearchBar
     },
    setup() {
      const {products, isLoading, loadProducts} = useProducts()
      const {addProduct} = useCart();
      const router = useRouter();
      loadProducts();
      return {
        products, 
        isLoading, 
        addProduct, 
        goToDetail: (product: Products) => 
          router.push({name: 'detail', params: {id: product.id}}),
        filterByName(product: Products, filter: string){
          if(filter == product.title){
            loadProducts()
          } 
        }
      }
    },
  })
</script>

<style scoped>
.product-list{
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem 1rem;
}

</style>