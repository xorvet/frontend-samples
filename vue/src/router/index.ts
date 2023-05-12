import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import CalcView from '../views/CalcView.vue';
import ChatView from '../views/ChatView.vue';
import LandingView from '../views/LandingView.vue';
import SignupView from '../views/SignupView.vue';
import ToDoView from '../views/ToDoView.vue';
import WeatherView from '../views/WeatherView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/calc',
      name: 'calc',
      component: CalcView
    },
    {
      path: '/chat',
      name: 'Chat',
      component: ChatView
    },
    {
      path: '/landing',
      name: 'Landing',
      component: LandingView
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupView
    },
    {
      path: '/todo',
      name: 'ToDo',
      component: ToDoView
    },
    {
      path: '/weather',
      name: 'Weather',
      component: WeatherView
    },
  ]
})

export default router
