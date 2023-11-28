import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Signup from '../pages/Signup.vue';
import Login from '../pages/Login.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/signup', component: Signup },
    { path: '/login', component: Login },
  ],
});

export default router;