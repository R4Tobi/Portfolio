import { createRouter, createWebHistory } from 'vue-router';

import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Projects from "../views/Projects.vue";
import Skills from "../views/Skills.vue";
import Socials from "../views/Socials.vue";
import AGB from "../views/AGB.vue";
import Impressum from "../views/Impressum.vue";
import Privacy from "../views/Privacy.vue";
import PageNotFound from "../views/PageNotFound.vue"

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
    path: "/impressum",
    name: "Impressum",
    component: Impressum
  },
  {
    path: "/privacy",
    name: "Privacy",
    component: Privacy
  },
  {
    path: "/agb",
    name: "AGB",
    component: AGB
  },
  {
    path: "/404",
    component: PageNotFound
  },
  {
    path: "/pages/:catchAll(.*)",
    redirect: (to) => {
      return { path: to.path };
    }
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404"
  },
  {
    path: "/home",
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