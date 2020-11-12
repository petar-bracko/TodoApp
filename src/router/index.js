import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import CompletedTodos from "../views/CompletedTodos.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/CompletedTodos",
    name: "CompletedTodos",
    component: CompletedTodos,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
