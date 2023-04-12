import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import SecureLS from 'secure-ls'

const ls = new SecureLS({ isCompression: false });

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
    savePaqueton({commit}, pages){
      commit('paqueton',pages)
    }
  },
  modules: {
  },
  plugins:[createPersistedState({
    storage: {
      getItem: (key) => ls.get(key),
      setItem: (key, value) => ls.set(key, value),
      removeItem: (key) => ls.remove(key),
    },
  })]
})
