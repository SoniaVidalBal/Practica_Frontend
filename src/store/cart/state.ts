import { Products } from "@/models/product";

export interface ICartState {
    products: Products[],
}

function state(): ICartState {
    return {
        products: [],
    }
}

export default state;