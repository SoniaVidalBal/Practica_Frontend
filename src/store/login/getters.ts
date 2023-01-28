import { GetterTree } from "vuex";
import { IState } from "..";
import { IUsersState } from "./state";

const getters: GetterTree<IUsersState, IState> = {
  getToken(state) {
    return state.token;
  },
}
export default getters;