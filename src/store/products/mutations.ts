import { MutationTree } from "vuex";
import { IProductsState } from "./state";
import { Products } from "@/models/product";

const mutations: MutationTree<IProductsState> = {
    setProducts(state: IProductsState, products: Products[]) {
        state.products = products;
    },
    setIsLoading(state: IProductsState, value: boolean) {
        state.isLoading = value;
    }
}

export default mutations;