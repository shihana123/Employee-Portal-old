import { createRouter, createWebHistory } from "vue-router";
// import LoginComponent from '../components/auth/LoginComponent.vue';
// import RegisterComponent from '../components/auth/RegisterComponent.vue';

const routes = [
    { path: '/', name: 'Home', component: () => import('../components/auth/LoginComponent.vue')},
    { path: '/signup', name: 'About', component: () => import('../components/auth/RegisterComponent.vue') },

    //admin 
    { path: '/dashboardAdmin', name: 'AdminDashboard', component: () => import('../components/admin/DashboardComponent.vue'), meta: { requiresAuth: true, roles: ['1'] }, },

    //employee
    { path: '/dashboardEmployee', name: 'employer-dashboard', component: () => import('../components/employee/DashboardComponent.vue'), meta: { requiresAuth: true, roles: ['2'] }, }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
    const userRole = getUserRoleFromToken() // Implement a function to get the user's role
    
    if (requiresAuth && !userRole) {
      next('/');
    } 
    else if (requiresAuth && !hasPermission(userRole, to.meta.roles)) {
      next('/unauthorized');
    } else {
      next();
    }
  });

  function hasPermission(userRole, role)
  {
    const haspermission = role.includes(userRole) ? true : null;
    return haspermission;
  }
  function getUserRoleFromToken() {
  
    // For example, if you're using JWT, you can decode it and return the 'role' claim
    const token = localStorage.getItem('user_type'); // Retrieve the authentication token from local storage
    
    if (token) {
      return token;
    }
    return null; // Return null if no valid token is found
  }
export default router;