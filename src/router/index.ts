import { createRouter, createWebHistory } from 'vue-router';
import TodoView from '../views/TodoView.vue';
import AuthView from '../views/AuthView.vue';
import { isAuthenticated } from '../utils/token';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AuthView
        },
        {
            path: '/auth',
            name: 'auth',
            component: AuthView
        },
        {
            path: '/todos',
            name: 'todos',
            component: TodoView
        }
    ]
});

router.beforeEach((to) => {
    if (isAuthenticated() && to.name !== 'todos') {
        return { name: 'todos' };
    }

    if (!isAuthenticated() && to.name !== 'auth') {
        return { name: 'auth' };
    }
});

export default router;
