import "@/core/assets/globals.css"
import "vue-toastification/dist/index.css"

import { createPinia } from "pinia"
import { createApp } from "vue"
import Toast from "vue-toastification"

import App from "./App.vue"
import router from "./core/router"

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Toast)

app.mount("#app")
