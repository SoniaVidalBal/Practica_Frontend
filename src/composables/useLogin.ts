import { Login } from "@/models/users";
import { computed } from "vue";
import { useStore } from "vuex";

const useLogin = () => {
  const store = useStore();

  return {
    // GETTERS
    token: computed(() => store.getters["logIn/getToken"]),

    // ACTIONS
    login: (login: Login) => store.dispatch("logIn/login", login),
    logout: () => store.dispatch('logIn/logOut')
  };
};

export default useLogin;