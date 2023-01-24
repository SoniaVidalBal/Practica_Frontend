import { Products } from "@/models/product";

export interface IProductsState {
    products: Products[];
    isLoading: boolean;

}

function state(): IProductsState {
    return {
        products: [],
        isLoading: false,
    }
}

export default state;