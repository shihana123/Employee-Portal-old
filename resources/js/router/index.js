import { createRouter, createWebHistory } from "vue-router";
// import LoginComponent from '../components/auth/LoginComponent.vue';
// import RegisterComponent from '../components/auth/RegisterComponent.vue';

const routes = [
    { path: '/', name: 'Home', component: () => import('../components/auth/LoginComponent.vue')},
    { path: '/signup', name: 'About', component: () => import('../components/auth/RegisterComponent.vue') },

    { path: '/dashboardAdmin', name: 'AdminDashboard', component: () => import('../components/admin/DashboardComponent.vue'), meta: { requiresAuth: true, roles: ['1'] }, },
    { path: '/dashboardEmployee', name: 'employer-dashboard', component: () => import('../components/employee/DashboardComponent.vue'), meta: { requiresAuth: true, roles: ['2'] }, }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const userRole = getUserRoleFromToken() // Implement a function to get the user's role
    console.log(userRole);
    if (requiresAuth && !userRole) {
        console.log('fff');
      next('/');
    } else if (requiresAuth && !hasPermission(userRole, to.meta.roles)) {
      next('/unauthorized');
    } else {
      next();
    }
  });
  function getUserRoleFromToken() {
  
    // For example, if you're using JWT, you can decode it and return the 'role' claim
    const token = localStorage.getItem('auth'); // Retrieve the authentication token from local storage
    return token
    // if (token) {
    //   const tokenData = JSON.parse(atob(token.split('.')[1])); // Decode the token
    //   return tokenData.role; // Assuming 'role' is a property in the token payload
    // }
    // return null; // Return null if no valid token is found
  }
export default router;