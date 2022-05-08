import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../views/home/HomePage.vue';
import BasicPage from '../views/basic/BasicPage.vue';
import AdvancePage from '../views/advance/AdvancePage.vue';

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/basic',
        name: 'basic',
        component: BasicPage,
    },
    {
        path: '/advance',
        name: 'advance',
        component: AdvancePage,
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;