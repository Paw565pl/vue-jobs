import type { RouteRecordRaw } from "vue-router"

const jobOfferRoutes: readonly RouteRecordRaw[] = [
  {
    path: "/job-offers",
    name: "jobOffers",
    component: () => import("@/jobOffer/views/JobOffersView.vue")
  },
  {
    path: "/job-offers/add",
    name: "addJobOffer",
    component: () => import("@/jobOffer/views/AddJobOfferView.vue")
  },
  {
    path: "/job-offers/:id",
    name: "jobOffer",
    component: () => import("@/jobOffer/views/JobOfferView.vue")
  }
]

export default jobOfferRoutes
