import { computed } from "vue";
import { useStore } from "vuex"

const useLogin = () => {
    const store = useStore();
    return {
        users: computed(() => store.getters['login/getUser']),
        isLoading: computed(() => store.getters['login/getIsLoading']),
        //email: computed(() => store.getters['logIn/getEmail']),
        //password: computed(() => store.getters['logIn/getPassword']),

        loadUsers: () => store.dispatch('login/prepareUsers'),
    }
};

export default useLogin;