import soniapopApi from "@/api/soniapopApi";
import { Login } from "@/models/users";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IUsersState } from "./state";

const actions: ActionTree<IUsersState, IState> = {
    async signin ({ commit }, login: Login) {
        const {data} = await soniapopApi.post('/auth/login/', login)
        localStorage.setItem('token', data.access_token)
        commit('setToken', data.access_token)
    },
};

export default actions;