import { createRouter, createWebHistory } from 'vue-router';

import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Projects from "../views/Projects.vue";
import Skills from "../views/Skills.vue";
import Socials from "../views/Socials.vue";

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: About
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills
  },
  {
    path: "/socials",
    name: "Socials",
    component: Socials
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/skills",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;