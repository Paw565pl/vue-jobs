import "@/core/assets/globals.css"
import "vue-toastification/dist/index.css"

import { VueQueryPlugin } from "@tanstack/vue-query"
import { createPinia } from "pinia"
import { createApp } from "vue"
import Toast from "vue-toastification"

import App from "@/App.vue"
import router from "@/core/router"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueQueryPlugin, {
  enableDevtoolsV6Plugin: true
})
app.use(Toast)

app.mount("#app")
