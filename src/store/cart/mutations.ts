import { Products } from "@/models/product";
import { MutationTree } from "vuex";
import { ICartState } from "./state";

const mutation: MutationTree<ICartState> = {
    addProduct(state, element: Products) {
        state.products.push(element);
    },
    removeProduct(state, element: Products) {
        const tmp = state.products.filter((prod) => prod.id !== element.id);
        state.products = tmp
    },
    toggleCart(state) {
        state.isOpen = !state.isOpen;
    }
}

export default mutation;