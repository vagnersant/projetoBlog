import { createRouter, createWebHistory } from 'vue-router'
import AreaPostagem from '@/components/AreaPostagem.vue'
import Sobre from '@/components/Sobre.vue'
import Login from '@/components/Login.vue'

const routes = [
    {
        path:'/',
        name: 'Login',
        component: Login
    },
    {
        path:'/sobre',
        name: 'Sobre',
        component: Sobre
    },
    {
        path: '/areapostagem',
        name: 'AreaPostagem',
        component: AreaPostagem
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;