import type { RouteRecordRaw } from "vue-router"

const jobOfferRoutes: readonly RouteRecordRaw[] = [
  {
    path: "/job-offers",
    name: "jobOffers",
    component: () => import("@/jobOffer/views/JobOffersView.vue")
  }
]

export default jobOfferRoutes
