import { Products } from "@/models/product";
import { computed } from "vue";
import { useStore } from "vuex";

export const useCart = () => {
    const store = useStore();
    return {
        cartElements: computed(()=> store.getters['cart/getCartElements']),
        addProduct: (product: Products) => store.commit ('cart/addProduct', product),
    }
}