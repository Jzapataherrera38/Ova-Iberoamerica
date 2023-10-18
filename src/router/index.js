import Vue from 'vue'
import VueRouter from 'vue-router'
import inicio from '../components/InicioPage.vue';

Vue.use(VueRouter)

const routes = [
  {
     path: '/',
     name: 'InicioPage',
     component: inicio
  },


]

const router = new VueRouter({
 mode: "history",
base: process.env.BASE_URL,
 routes
})

export default router