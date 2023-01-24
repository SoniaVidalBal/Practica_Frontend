import { Products } from "@/models/product";

export interface ICartState {
    products: Products[],
    isOpen: boolean
}

function state(): ICartState {
    return {
        products: [],
        isOpen: false
    }
}

export default state;