import { createRouter, createWebHistory } from 'vue-router';
import landingPage from "@/views/Landing.vue"
import ProductDetail from "@/views/ProductDetail.vue"
import Contact from "@/views/Contact.vue"
import Cart from "@/views/Cart.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior() {
    return { top: 0 };
  },

  routes: [
    {
      path:"/",
      name:"LandingPage",
      component: landingPage
    },
    {
      path:"/ProductDetail/:id",
      name:"ProductDetail",
      component: ProductDetail
    },
    {
      path:"/Cart",
      name:"Cart",
      component: Cart
    },
    {
      path:"/Contact",
      name:"Contact",
      component: Contact
    },
  
   ]
});

export default router;
