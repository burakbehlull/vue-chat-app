import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/Home.vue';
import Signup from '../pages/Signup.vue';
import Login from '../pages/Login.vue';
import Chatroom from '../pages/Chatroom.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home, name:"Home" },
    { path: '/signup', component: Signup, name:"Signup" },
    { path: '/login', component: Login, name:"login" },
    { path: '/chatroom', component: Chatroom, name:"Chatroom" },
  ],
});

export default router;