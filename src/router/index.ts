import { createRouter, createWebHistory } from "vue-router";
import index from "../pages/Home.vue";
import CreateTemplate from "../pages/CreateTemplate.vue";

const routes = [
  { path: "/", component: index },
  { path: "/create-template", component: CreateTemplate },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
