import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home";
import About from "@/views/About";
import History from "@/views/History";
import Form from "@/views/Form";
import Compare from "@/views/Compare";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/history",
    name: "History",
    component: History,
  },
  {
    path: "/form",
    name: "Form",
    component: Form,
  },
  {
    path: "/compare",
    name: "Compare",
    component: Compare,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
