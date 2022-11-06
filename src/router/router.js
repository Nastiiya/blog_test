import Main from "@/pages/Main";
import {createRouter, createWebHistory} from "vue-router/dist/vue-router";
import PostsPage from "@/pages/PostsPage";
import About from "@/pages/About";
import PostIdPage from "@/pages/PostIdPage";
import PostsWithStore from "@/pages/PostsWithStore";

const routes = [
    {
        path: '/',
        component: Main
    },

    {
        path: '/Posts',
        component: PostsPage
    },

    {
        path: '/About',
        component: About
    },

    {
        path: '/Posts/:id',
        component: PostIdPage
    },

    // {
    //     path: '/store',
    //     component: PostsWithStore
    // }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;