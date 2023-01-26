import { Products } from "@/models/product";
import { computed } from "vue";
import { useStore } from "vuex";

export const useCart = () => {
    const store = useStore();
    return {
        cartElements: computed(()=> store.getters['cart/getCartElements']),
        isCartOpen: computed(()=> store.getters['cart/getIsOpen']),

        addProduct: (product: Products) => store.commit ('cart/addProduct', product),
        removeProduct: (product: Products) => store.commit ('cart/removeProduct', product),
        toggleCart: () => store.commit('cart/toggleCart')
    }
}