import homeRoutes from "@/home/routes/homeRoutes"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...homeRoutes]
})

export default router
