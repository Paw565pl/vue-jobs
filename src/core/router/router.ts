import homeRoutes from "@/home/routes/homeRoutes"
import jobOfferRoutes from "@/jobOffer/routes/jobOfferRoutes"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...homeRoutes,
    ...jobOfferRoutes,
    {
      path: "/:catchAll(.*)*",
      name: "notFound",
      component: () => import("@/core/views/NotFoundView.vue")
    }
  ]
})

export default router
