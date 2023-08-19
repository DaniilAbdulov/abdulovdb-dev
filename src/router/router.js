import { createRouter, createWebHistory } from "vue-router";
import GeneralPage from "@/pages/GeneralPage";
import AboutPage from "@/pages/AboutPage";
import BlogPage from "@/pages/BlogPage";
import ToDoPage from "@/pages/ToDoPage";
import PostIdPage from "@/pages/PostIdPage";
import GalleryPage from "@/pages/GalleryPage";
import AlbumPage from "@/pages/AlbumPage";

const routes = [
    {
        path: "/",
        component: GeneralPage,
    },
    {
        path: "/about",
        component: AboutPage,
    },
    {
        path: "/blog",
        component: BlogPage,
    },
    {
        path: "/todo",
        component: ToDoPage,
    },
    {
        path: "/post/:id/comments",
        component: PostIdPage,
    },
    {
        path: "/gallery",
        component: GalleryPage,
    },
    {
        path: "/gallery/:id",
        component: AlbumPage,
    },
];
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});

export default router;
