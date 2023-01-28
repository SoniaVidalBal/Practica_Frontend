import { User } from '@/models/users';
import { createStore } from 'vuex';
import cartModule from './cart/index';
import productsModule from './products';
import logInModule from './login';

export interface IState {
  authUser: User | null;
  greeting: string
}

export default createStore<IState>({
  state: {
    authUser: null,
    greeting: "Hola a todos!"
  },
  getters: {
    saludo(state){
      return state.greeting
    }
  },
  mutations: {
    cambioSaludo(state, saludo: string){
      state.greeting = saludo
    }
  },
  actions: {
    
  },
  modules: {
    cart: cartModule,
    products: productsModule,
    logIn: logInModule,
  }
})
