import Vue from 'vue';
import Router from 'vue-router';
// import Home from './views/Home.vue'
import authRoutes from '@/modules/auth/router';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [...authRoutes, { path: '', redirect: '/login' }]
})
