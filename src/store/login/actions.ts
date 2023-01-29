import soniapopApi from "@/api/soniapopApi";
import { Login } from "@/models/users";
import { ActionTree } from "vuex";
import { IState } from "..";
import { IUsersState } from "./state";

const actions: ActionTree<IUsersState, IState> = {
    async login ({ commit }, login: Login) {
      const {data} = await soniapopApi.post('/auth/login/', login)
      localStorage.setItem('token', data.access_token)
      commit('setToken', data.access_token)
    },
    async loadUser({commit}) {
      const profile = await soniapopApi.get('/auth/profile');
      console.log(profile.data)
      commit('setUser', profile.data)
    },
    async logOut( {commit}) {
      localStorage.getItem('token')
      localStorage.removeItem('token')
      commit('removeToken')
    },

};

export default actions;