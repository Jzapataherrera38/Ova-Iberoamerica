import Vue from 'vue';
import VueRouter from 'vue-router';
import inicio_pag from '../components/inicio_pag';
import entrada_pag from '../components/entrada_pag';
import contenido_pag from '../components/contenido_pag';
import actividades_pag from '../components/actividades_pag';
import evaluacion_pag from '../components/evaluacion_pag';
import creditos_pag from '../components/creditos_pag';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'inicio_pag',
    component: inicio_pag,
  },
  {
    path: '/entrada_pag',
    name: 'entrada_pag',
    component: entrada_pag,
    children: [
      {
        path: 'contenido_pag', // Eliminamos la barra diagonal para hacerla relativa
        name: 'contenido_pag',
        component: contenido_pag,
      },
      {
        path: 'actividades_pag', // Eliminamos la barra diagonal para hacerla relativa
        name: 'actividades_pag',
        component: actividades_pag,
      },
      {
        path: 'evaluacion_pag', // Eliminamos la barra diagonal para hacerla relativa
        name: 'evaluacion_pag',
        component: evaluacion_pag,
      },
      {
        path: 'creditos_pag', // Eliminamos la barra diagonal para hacerla relativa
        name: 'creditos_pag',
        component: creditos_pag,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
