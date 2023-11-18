import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import store from '@/store';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: { layout: 'main', auth: true },
    },
    {
        path: '/help',
        name: 'help',
        component: () => import('@/views/Help.vue'),
        meta: { layout: 'main', auth: true },
    },
    {
        path: '/request/:id',
        name: 'request',
        component: () => import('@/views/Request.vue'),
        meta: { layout: 'main', auth: true },
    },
    {
        path: '/message',
        name: 'message',
        component: () => import('@/views/Message.vue'),
        meta: { layout: 'main', auth: true },
    },
    {
        path: '/auth',
        name: 'auth',
        component: () => import('@/views/Auth.vue'),
        meta: { layout: 'auth', auth: false },
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('@/views/Home.vue'),
        meta: { layout: 'main', auth: true },
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
});

router.beforeEach((to, from, next) => {
    if (to.meta.auth && store.getters['auth/isAuthenticated']) {
        next();
    }
    else if (to.meta.auth && !store.getters['auth/isAuthenticated']) {
        next({name: 'auth', query: {message: 'auth'}})
    }
    else {
        next();
    }
})

export default router;
