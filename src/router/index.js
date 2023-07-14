import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue';
import Photo_Page from '../views/Photo_Page.vue';
import Favorites from '../views/Favorites.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/',
        name: 'photo_page',
        component: Photo_Page
    },
    {
        path: '/',
        name: 'favorites',
        component: Favorites
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;