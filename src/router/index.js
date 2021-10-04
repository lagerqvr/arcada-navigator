import Vue from "vue";
import VueRouter from "vue-router";
import CategoryMenu from "../views/CategoryMenu.vue";
import Directions from "../views/Directions.vue";
import Hsl from "../views/Hsl.vue";
import Info from "../views/Info.vue";
import Help from "../views/Help.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CategoryMenu",
    component: CategoryMenu,
  },
  {
    path: "/directions",
    name: "Directions",
    component: Directions,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/Directions.vue')
  },
  {
    path: "/hsl",
    name: "Hsl",
    component: Hsl,
  },
  {
    path: "/Info",
    name: "Info",
    component: Info,
  },
  {
    path: "/Help",
    name: "Help",
    component: Help,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
