import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from '../components/auth/LoginComponent.vue';
import RegisterComponent from '../components/auth/RegisterComponent.vue';

const routes = [
    {
        path: '/',
        component: LoginComponent
    },
    {
        path: '/signup',
        component: RegisterComponent
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;