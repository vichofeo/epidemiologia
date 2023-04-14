import { createRouter, createWebHistory } from "vue-router";
/*
const pages = [
  {
    name_module: "Configuracion",
    path_browser: "/frm",
    name_layout: "LayoutFrm",
    children: [
      {
        path_browser: "config",
        name_module: "Grupo Formulario",
        name_controller: "GFrmView",
      },
      {
        path_browser: "asignar",
        name_module: "Asignar Formulario",
        name_controller: "AsignGFrmView",
      },
      {
        path_browser: "report",
        name_module: "Reporte Gral",
        name_controller: "ReportGralView",
      },
      {
        path_browser: "tmp",
        name_module: "Temporal",
        name_controller: "AdminModulePages",
      },
    ],
  },
  {
    name_module: "Formularios",
    path_browser: "/input",
    name_layout: "LayoutFrmInput",
    children: [
      {
        path_browser: "frm",
        name_module: "Chikungunya",
        name_controller: "ESaludView",
      },
      {
        path_browser: "frm/:idx",
        name_module: "FormsUsers",
        name_controller: "FichaEpiInsert",
      },
      {
        path_browser: "report",
        name_module: "report",
        name_controller: "ReportFrmView",
      },
    ],
  },

  {
    name_module: "Usuarios",
    path_browser: "/usr",
    name_layout: "LayoutFrm",
    children: [
      {
        path_browser: "p1",
        name_module: "Crear usuario",
        name_controller: "Tmp",
      },
      {
        path_browser: "p2",
        name_module: "usuarios Hospital",
        name_controller: "AboutView",
      },
    ],
  },
];
const routes = pages.map((obj) => {
  return {
    path: obj.path_browser,
    component: () => import(`@/Layouts/${obj.name_layout}.vue`),
    children: obj.children.map((o) => {
      return {
        path: o.path_browser,
        name: o.name_controller,
        component: () => import(`@/views/frm/${o.name_controller}.vue`),
      };
    }),
  };
});*/

routes.push({
  path: "/",
  name: "Login",
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/pagina/Login.vue"),
});

routes.push({
  path: "/about",
  name: "about",
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
});

routes.push({
  path: "/about",
  name: "about",
  alias: "/que",
  component: () =>
    import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
});

//llena con las otras rutas

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//adiciona rutas desde base de datos


function getComponent(folder, name_file){
  let component = null
  switch (folder) {
    case 'frm':
      component = import(`@/views/frm/${name_file}.vue`)
      break;
  case 'pageAdmin':
    component = import(`@/views/pageAdmin/${name_file}.vue`)
    break;
    default:
      break;
  }
  return component
}


path: obj.path_browser,
    component: () => import(`@/Layouts/${obj.name_layout}.vue`),
    children: obj.children.map((o) => {
      return {
        path: o.path_browser,
        name: o.name_controller,
        component: () => import(`@/views/frm/${o.name_controller}.vue`),
      };
    })

axios
  .get(`localhost:3000/datamore`)
  .then((r) => r.data)
  .then((routes) => {
    routes.forEach((e) => {
      router.addRoutes([
        {
          path: `/${e.slug}`,
          component: getComponent(e.template),

        },
      ]);
    });
  });


export default router;