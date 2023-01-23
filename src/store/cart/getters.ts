import { GetterTree } from "vuex";
import { IState } from "..";
import { ICartState } from "./state";

const getters: GetterTree<ICartState, IState> = {
    getCartElements(state) {
        return state.products;
    }
}

export default getters;