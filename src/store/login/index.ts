import { Module } from "vuex";
import { IState } from "..";
import state, { IUserState } from "./state"
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

const usersModule: Module<IUserState, IState> = {
    namespaced: true, 
    state,
    getters,
    mutations,
    actions
}

export default usersModule