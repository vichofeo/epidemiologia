import { createStore } from 'vuex'

export default createStore({
  state: {    
    pages:[],
    frmSelect:{}
  },
  getters: {
  },
  mutations: {
    paqueton (state, pages){
      state.pages = pages
    },
    setFrm(state, data){
      state.frmSelect = data
    }
  },
  actions: {
  },
  modules: {
  }
})
