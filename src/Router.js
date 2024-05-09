import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from './components/LoginForm.vue';
import DashboardLayout from './components/DashboardLayout.vue';
import store from '../store.js';
import RegisterForm from './components/register/RegisterView.vue';
import NewMail from './components/NewMail.vue';



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
  },
  { path: '/register', component: RegisterForm,
    beforeEnter: (to, from, next) => {
      if (store.state.AuthUser) {
        next('/');
      } else {
        next();
      }
    }
  },
  {
    path: '/nuevo', component: NewMail,
    beforeEnter: (to, from, next) => {
      if (!store.state.AuthUser) {
        next('/login');
      } else {
        next();
      }
    }
  },
  { path: '/products', component: LoginForm,
    beforeEnter: (to, from, next) => {
      if (store.state.AuthUser) {
        next('/');
      } else {
        next();
      }
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})




export default router