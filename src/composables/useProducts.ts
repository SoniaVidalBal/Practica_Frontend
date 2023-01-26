import { computed } from "vue";
import { useStore } from "vuex"

const useProducts = () => {
    const store = useStore();
    return {
        products: computed(() => store.getters['products/getProducts']),
        isLoading: computed(() => store.getters['products/getIsLoading']),

        loadProducts: () => store.dispatch('products/loadProducts')
    }
}

export default useProducts;