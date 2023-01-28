import soniapopApi from "@/api/soniapopApi";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IUserState } from "./state";
import { AxiosResponse } from 'axios';
import { User } from '@/models/users'

const actions: ActionTree<IUserState, IState> = {
    async prepareUsers({commit}) {
        commit('setIsLoading', true);
        const {data} = await soniapopApi.get<unknown, AxiosResponse<User[]>>('/users');
        commit('setIsLoading', false);
        commit('setUsers', data);
    },
};

export default actions;