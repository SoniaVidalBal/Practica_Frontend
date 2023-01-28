import { GetterTree } from "vuex";
import { IState } from "..";
import { IUserState } from "./state";

const getters: GetterTree<IUserState, IState> = {
    getUser(state) {
        return state.users
    }, 
    getIsLoading(state) {
        return state.isLoading
    }, 
    //getEmail(state) {
       // return state.email
    //}, 
    //getPassword(state) {
    //    return state.password;
    //}
}
export default getters;