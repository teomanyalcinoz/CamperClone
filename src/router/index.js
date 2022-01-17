import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Post from '../views/Post.vue'
import UrunDetay from '../views/UrunDetay.vue'
import Urundty from '../views/Urundty.vue'
import Erkek from "../views/Erkek.vue";
import Kadın from "../views/Kadın.vue";
import Cocuk from "../views/Cocuk.vue";

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: "/erkek",
        name: "Erkek",
        component: () =>
            import ('@/views/Erkek.vue'),
    },
    {
        path: "/post/:id",
        name: "Post",
        component: Post
    },
    {
        path: "/gift",
        name: "Gift",
        component: () =>
            import ('@/views/Gift.vue'),
    },
    {
        path: "/magaza",
        name: "Magaza",
        component: () =>
            import ('@/views/Magaza.vue'),

    },
    {
        path: "/kadın",
        name: "Kadın",
        component: () =>
            import ('@/views/Kadın.vue'),
    },
    {
        path: "/cocuk",
        name: "Cocuk",
        component: () =>
            import ('@/views/Cocuk.vue'),
    },
    {
        path: "/search",
        name: "Search",
        component: () =>
            import ('@/views/SearchPage.vue'),
    },
    {
        path: "/tws",
        name: "tws",
        component: () =>
            import ('@/views/Tws.vue'),
    },
    {
        path: "/signin",
        name: "signin",
        component: () =>
            import ('@/views/Signin.vue'),
    },
    {
        path: "/register",
        name: "register",
        component: () =>
            import ('@/views/Register.vue'),
    },
    {
        path: "/urundetay/:id",
        name: "urundetay",
        component: UrunDetay

    },
    {
        path: "/urundty/:id",
        name: "urundty",
        component: Urundty

    },
    {
        path: "/sepet",
        name: "sepet",
        component: () =>
            import ('@/views/Sepet.vue'),
    },

]

const router = new VueRouter({
    routes
})

export default router