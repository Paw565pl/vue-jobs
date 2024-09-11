import type { RouteRecordRaw } from "vue-router"

const jobOfferRoutes: readonly RouteRecordRaw[] = [
  {
    path: "/job-offers",
    name: "job-offers",
    component: () => import("@/jobOffer/views/JobOffersView.vue")
  }
]

export default jobOfferRoutes
