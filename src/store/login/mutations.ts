import { User } from "@/models/users";
import { MutationTree } from "vuex";
import { IUsersState } from "./state";

const mutations: MutationTree<IUsersState> = {
  setToken(state: IUsersState, token: string) {
    state.token = token;
  },
  removeToken(state: IUsersState, token: string) {
    state.token = token
  },
  setUser(state: IUsersState, user: User) {
    state.user = user
  }
};

export default mutations;