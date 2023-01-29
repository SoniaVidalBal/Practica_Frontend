import { Products } from "@/models/product";
import { computed } from "vue";
import { useStore } from "vuex"

const useProducts = () => {
    const store = useStore();
    return {
        products: computed(() => store.getters['products/getProducts']),
        isLoading: computed(() => store.getters['products/getIsLoading']),
        product: computed(() => store.getters['products/getProduct']),

        loadProducts: () => store.dispatch('products/loadProducts'),
        loadProduct: (productId: number) =>
            store.dispatch('products/loadProduct', productId),
    }
};

export default useProducts;