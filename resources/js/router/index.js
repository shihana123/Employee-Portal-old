import { createRouter, createWebHistory } from "vue-router";
// import LoginComponent from '../components/auth/LoginComponent.vue';
// import RegisterComponent from '../components/auth/RegisterComponent.vue';

const routes = [
    { path: '/', name: 'Home', component: () => import('../components/auth/LoginComponent.vue')},
    { path: '/signup', name: 'About', component: () => import('../components/auth/RegisterComponent.vue') }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;