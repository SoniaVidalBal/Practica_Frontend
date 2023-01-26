import { Products } from "@/models/product";

export interface IProductsState {
    products: Products[];
    isLoading: boolean;
    selectedProduct: Products | null;

}

function state(): IProductsState {
    return {
        products: [],
        isLoading: false,
        selectedProduct: null,
    }
}

export default state;