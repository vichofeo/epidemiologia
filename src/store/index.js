import { createStore } from 'vuex'

export default createStore({
  state: {    
    pages:[]
  },
  getters: {
  },
  mutations: {
    paqueton (state, pages){
      state.pages = pages
    }
  },
  actions: {
  },
  modules: {
  }
})
