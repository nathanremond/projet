import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import UserPage from "./pages/UserPage.vue";
import SessionPage from "./pages/SessionPage.vue";
import ChiefPage from "./pages/ChiefPage.vue";
import DetailPage from "./pages/DetailPage.vue";
import CartPage from "./pages/CartPage.vue";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/user',
            component: UserPage
        },
        {
            path: '/session',
            component: SessionPage
        },
        {
            path: '/chiefs',
            component: ChiefPage
        },
        {
            path: '/chiefs/:id',
            component: DetailPage
        },
        {
            path: '/cart',
            component: CartPage
        }
    ]
})

export default router