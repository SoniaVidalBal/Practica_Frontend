import { Login } from "@/models/users";
import { computed } from "vue";
import { useStore } from "vuex";

const useLogin = () => {
  const store = useStore();

  return {
    // GETTERS
    token: computed(() => store.getters["login/getToken"]),

    // ACTIONS
    login: (login: Login) => store.dispatch("logIn/signin", login),
  };
};

export default useLogin;