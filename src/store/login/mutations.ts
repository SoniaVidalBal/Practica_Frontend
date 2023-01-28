
import { MutationTree } from "vuex";
import { IUsersState } from "./state";

const mutations: MutationTree<IUsersState> = {
  setToken(state: IUsersState, token: string) {
    state.token = token;
  },
};

export default mutations;