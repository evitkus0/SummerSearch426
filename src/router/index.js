import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Submit from "../views/Submit.vue";
import Contact from "../views/Contact.vue";
import Account from "../views/Account.vue";
import Search from "../views/Search.vue";
import AdminPortal from "../views/AdminPortal.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/topsecret",
    name: "adminportal",
    component: AdminPortal
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/submit",
    name: "submit",
    component: Submit
  },
  {
    path: "/search",
    name: "search",
    component: Search
  },
  {
    path: "/contact",
    name: "contact",
    component: Contact
  },
  {
    path: "/account",
    name: "account",
    component: Account
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
