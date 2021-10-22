import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Erkek from "../views/Erkek.vue";
import Kadın from "../views/Kadın.vue";
import Cocuk from "../views/Cocuk.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/erkek",
    name: "Erkek",
    component: Erkek
  },
  {
    path: "/kadın",
    name: "Kadın",
    component: Kadın
  },
  
  {
    path: "/cocuk",
    name: "Cocuk",
    component: Cocuk
  },  

]

const router = new VueRouter({
  routes
})

export default router
