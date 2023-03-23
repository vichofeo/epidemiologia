import { createRouter, createWebHistory } from 'vue-router'
import Store from '@/store/index'


const pages= Store.state.pages
const routes = pages.map(obj=>{
  return {
    path:obj.path_browser,
    component: () => import(`@/Layouts/${obj.name_layout}.vue`),
    children: obj.children.map(o=>{
      return{
        path: o.path_browser,
        name: o.name_controller,
        component: () =>import(`@/views/frm/${o.name_controller}.vue`)
      }
    })
  }
})


routes.push({
  path: '/about',
  name: 'about',    
  component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
})

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
