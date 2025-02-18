import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import UserPage from "./pages/UserPage.vue";
import SessionPage from "./pages/SessionPage.vue";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '',
            component: HomePage
        },
        {
            path: '/user',
            component: UserPage
        },
        {
            path: '/session',
            component: SessionPage
        }
    ]
})

export default router