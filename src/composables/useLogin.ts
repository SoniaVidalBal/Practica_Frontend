import { Login } from "@/models/users";
import { computed } from "vue";
import { useStore } from "vuex";

const useLogin = () => {
  const store = useStore();

  return {
    // GETTERS
    token: computed(() => store.getters["logIn/getToken"]),
    user: computed(() => store.getters["logIn/getUser"]),

    // ACTIONS
    login: (login: Login) => store.dispatch("logIn/login", login),
    loadUser: () => store.dispatch('logIn/loadUser'),
    logout: () => store.dispatch('logIn/logOut'),

  };
};

export default useLogin;