import { createStore } from 'vuex'

export default createStore({
  state: {
    authUser: {
      id: 5, 
      email: 'hola@mail.com',
      nome: 'Sonia'
    },
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
  }
})
