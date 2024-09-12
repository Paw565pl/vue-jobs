import type { RouteRecordRaw } from "vue-router"

const homeRoutes: readonly RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/home/views/HomeView.vue")
  }
]

export default homeRoutes
