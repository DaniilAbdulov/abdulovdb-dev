import { createRouter, createWebHistory } from "vue-router";
import GeneralPage from "@/pages/GeneralPage";
import AboutPage from "@/pages/AboutPage";
import BlogPage from "@/pages/BlogPage";
import ToDoPage from "@/pages/ToDoPage";

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
];
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
});

export default router;
