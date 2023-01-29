import { GetterTree } from "vuex";
import { IState } from "..";
import { IUsersState } from "./state";

const getters: GetterTree<IUsersState, IState> = {
  getToken(state) {
    return state.token;
  },
  getUser(state) {
    return state.user;
  }
}
export default getters;