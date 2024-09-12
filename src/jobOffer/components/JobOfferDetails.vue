<script lang="ts" setup>
import type { JobOffer } from "@/jobOffer/entities/jobOffer"
import axios from "axios"
import { onMounted, reactive } from "vue"
import { RouterLink, useRoute } from "vue-router"
import { Icon } from "@iconify/vue"

const {
  params: { id: jobOfferId }
} = useRoute()

const state = reactive({
  jobOffer: {} as JobOffer,
  isLoading: true
})
onMounted(async () => {
  try {
    const { data } = await axios.get<JobOffer>(`http://localhost:5000/job-offers/${jobOfferId}`)
    state.jobOffer = data
  } catch (error) {
    console.error(error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section class="bg-green-50">
    <BaseLoadingIndicator v-if="state.isLoading" />

    <div v-else class="container m-auto px-6 py-10">
      <div class="md:grid-cols-70/30 grid w-full grid-cols-1 gap-6">
        <main>
          <div class="rounded-lg bg-white p-6 text-center shadow-md md:text-left">
            <div class="mb-4 text-gray-500">{{ state.jobOffer.type }}</div>
            <h1 class="mb-4 text-3xl font-bold">{{ state.jobOffer.title }}</h1>
            <div class="mb-3 text-orange-700 flex items-center gap-1">
              <Icon icon="prime:map-marker" class="text-orange-700" />
              {{ state.jobOffer.location }}
            </div>
          </div>

          <div class="mt-6 rounded-lg bg-white p-6 shadow-md">
            <h3 class="mb-6 text-lg font-bold text-green-800">Job Description</h3>

            <p class="mb-4">
              {{ state.jobOffer.description }}
            </p>

            <h3 class="mb-2 text-lg font-bold text-green-800">Salary</h3>

            <p class="mb-4">{{ state.jobOffer.salary }} / Year</p>
          </div>
        </main>

        <!-- Sidebar -->
        <aside>
          <!-- Company Info -->
          <div class="rounded-lg bg-white p-6 shadow-md">
            <h3 class="mb-6 text-xl font-bold">Company Info</h3>

            <h2 class="text-2xl">{{ state.jobOffer.company.name }}</h2>

            <p class="my-2">
              {{ state.jobOffer.company.description }}
            </p>

            <hr class="my-4" />

            <h3 class="text-xl">Contact Email:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">{{ state.jobOffer.company.contactEmail }}</p>

            <h3 class="text-xl">Contact Phone:</h3>

            <p class="my-2 bg-green-100 p-2 font-bold">{{ state.jobOffer.company.contactPhone }}</p>
          </div>

          <!-- Manage -->
          <div class="mt-6 rounded-lg bg-white p-6 shadow-md">
            <h3 class="mb-6 text-xl font-bold">Manage Job</h3>
            <RouterLink
              :to="`/job-offers/${state.jobOffer.id}/edit`"
              class="focus:shadow-outline mt-4 block w-full rounded-full bg-green-500 px-4 py-2 text-center font-bold text-white hover:bg-green-600 focus:outline-none"
              >Edit Job</RouterLink
            >
            <button
              class="focus:shadow-outline mt-4 block w-full rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600 focus:outline-none"
            >
              Delete Job
            </button>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
