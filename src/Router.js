import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from './components/LoginForm.vue';
import DashboardLayout from './components/DashboardLayout.vue';

const routes = [
  { path: '/', component: DashboardLayout },
  { path: '/login', component: LoginForm }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router