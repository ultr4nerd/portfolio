import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import RandomFact from '@/views/RandomFact.vue';
import RandomProject from '@/views/RandomProject.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/random-fact',
    name: 'randomFact',
    component: RandomFact,
  },
  {
    path: '/random-project',
    name: 'randomProject',
    component: RandomProject,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});


export default router;
