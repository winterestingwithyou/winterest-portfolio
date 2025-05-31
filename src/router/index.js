import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Projects from '../pages/Projects.vue'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About },
    { path: '/projects', name: 'projects', component: Projects },
]

export default createRouter({
    history: createWebHistory(),
    routes,
})