import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home";
import Menu from "@/views/Menu";
import Cart from "@/views/Cart";
import About from "@/views/About";
import Checkout from "@/views/Checkout";
import Contact from "@/views/Contact";
import ProductSingle from "@/views/ProductSingle";
import Services from "@/views/Services";
import Shop from "@/views/Shop";
import Blog from "@/views/blog/Blog";
import BlogSingle from "@/views/blog/BlogSingle";

import { initialize } from "@/plugins/externalInitializer";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    name: "Home",
    path: "/home",
    component: Home,
  },
  {
    name: "Menu",
    path: "/menu",
    component: Menu,
  },
  {
    name: "Cart",
    path: "/cart",
    component: Cart,
  },
  {
    name: "About",
    path: "/about",
    component: About,
  },
  {
    name: "Checkout",
    path: "/checkout",
    component: Checkout,
  },
  {
    name: "Contact",
    path: "/contact",
    component: Contact,
  },
  {
    name: "ProductSingle",
    path: "/product-single",
    component: ProductSingle,
  },
  {
    name: "Services",
    path: "/services",
    component: Services,
  },
  {
    name: "Shop",
    path: "/shop",
    component: Shop,
  },
  {
    name: "Blog",
    path: "/blog",
    component: Blog,
  },
  {
    name: "BlogSingle",
    path: "/blog-single",
    component: BlogSingle,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.afterEach(() => {
  initialize();
  window.scrollTo(0, 0);
});

export default router;
