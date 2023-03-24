import { createStore } from 'vuex'

export default createStore({
  state: {    
    pages: [{
      name_module: "Formularios",
      path_browser: '/',
      name_layout: 'LayoutFrm',
      children: [
        {
          path_browser: "/",
          name_module: "Grupo Formulario",
          name_controller: "GFrmView"
        },
        {
          path_browser: "asignar",
          name_module: "Asignar Formulario",
          name_controller: "AsignGFrmView"
        },
        {
          path_browser: "tmp",
          name_module: "Temporal",
          name_controller: "Tmp"
        }
      ]
    }, 
   ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
