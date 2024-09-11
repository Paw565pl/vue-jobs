import HomeView from "@/home/views/HomeView.vue"
import type { RouteRecordRaw } from "vue-router"

const homeRoutes: readonly RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: HomeView
  }
]

export default homeRoutes
