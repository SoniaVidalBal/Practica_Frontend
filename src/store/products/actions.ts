import soniapopApi from "@/api/soniapopApi";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IProductsState } from "./state";
import { AxiosResponse } from 'axios';
import { Products } from '@/models/product'

const actions: ActionTree<IProductsState, IState> = {
    async loadProducts({commit}) {
        commit('setIsLoading', true);
        const {data} = await soniapopApi.get<unknown, AxiosResponse<Products[]>>('/products');
        commit('setIsLoading', false);

        commit('setProducts', data)
    }
}

export default actions;