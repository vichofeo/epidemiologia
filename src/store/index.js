import { createStore } from 'vuex'

export default createStore({
  state: {    
    pages:[],
    frms:[],
    frmSelect:{},
    usr:{}
  },
  getters: {
  },
  mutations: {
    paqueton (state, pages){
      state.pages = pages
    },
    seteoFrms(state, frms){
      state.frms = frms
    },

    setFrm(state, data){
      state.frmSelect = data
    },
    setUsr(state, data){
      state.usr = data
    }
  },
  actions: {
  },
  modules: {
  }
})
