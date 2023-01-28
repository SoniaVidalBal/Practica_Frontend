import { MutationTree } from "vuex";
import { IUserState } from "./state";
import { User } from "@/models/users";

const mutations: MutationTree<IUserState> = {
    setUsers(state: IUserState, users: User[]) {
        state.users = users;
    },
    setIsLoading(state: IUserState, value: boolean) {
        state.isLoading = value;
    },
    //setEmail(state: IUserState, value: string) {
    //    state.email = value;
    //},
    //setPassword(state, value: string) {
    //    state.password = value;
   // },
}

export default mutations;