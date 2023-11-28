import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Signup from '../pages/Signup.vue';
import Login from '../pages/Login.vue';
import App from '../App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, name:"Home" },
    { path: '/signup', component: Signup },
    { path: '/login', component: Login },
  ],
});

export default router;