import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue';
import UserList from '../views/UserList.vue';
import UserDetails from '../views/UserDetails.vue';


const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  
  {
    path: '/userlist',
    name: 'userlist',
    component: UserList,
  },
  {
    path: '/userdetails',
    name: 'UserDetails',
    component: UserDetails,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
