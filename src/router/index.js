import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

function estaAutenticado() {
  let resul =  localStorage.getItem('auth') === 'true';
  console.log("estaAutenticado: " + resul);
  return resul;
}

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
      requiereAutenticacion: true // aqui decimos que esta ruta requiere autenticación
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiereAutenticacion) {
    //si no esta autenticado. 
    if (!estaAutenticado()) {
      next('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
