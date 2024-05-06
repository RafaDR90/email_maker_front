import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from './components/LoginForm.vue';
import DashboardLayout from './components/DashboardLayout.vue';
import store from '../store.js';



//hago un console.log de store.state cuando cambie
const routes = [
  { 
    path: '/', 
    component: DashboardLayout,
    beforeEnter: (to, from, next) => {
      if (!store.state.AuthUser) {
        next('/login');
      } else {
        next();
      }
    }
  },
  { path: '/login', component: LoginForm,
    beforeEnter: (to, from, next) => {
      if (store.state.AuthUser) {
        next('/');
      } else {
        next();
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})




export default router