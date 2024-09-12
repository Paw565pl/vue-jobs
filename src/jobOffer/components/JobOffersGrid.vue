<script lang="ts" setup>
import BaseLoadingIndicator from "@/core/components/base/BaseLoadingIndicator.vue"
import JobOfferCard from "@/jobOffer/components/JobOfferCard.vue"
import ShowAllJobsButton from "@/jobOffer/components/ShowAllJobsButton.vue"
import type { JobOffer } from "@/jobOffer/entities/jobOffer"
import axios from "axios"
import { onMounted, reactive } from "vue"

interface JobOffersGridProps {
  limit?: number
  displayShowAllJobsButton?: boolean
}

const { limit, displayShowAllJobsButton = false } = defineProps<JobOffersGridProps>()

const state = reactive({
  jobOffers: [] as JobOffer[],
  isLoading: true
})
onMounted(async () => {
  try {
    const { data } = await axios.get<JobOffer[]>("http://localhost:5000/job-offers")
    state.jobOffers = data
  } catch (error) {
    console.error(error)
  } finally {
    state.isLoading = false
  }
})
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
    </div>

    <BaseLoadingIndicator v-if="state.isLoading" />

    <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <JobOfferCard
        v-for="jobOffer in state.jobOffers.slice(0, limit ?? state.jobOffers.length)"
        :key="jobOffer.id"
        :job-offer="jobOffer"
      />
    </div>
  </section>

  <ShowAllJobsButton v-if="displayShowAllJobsButton" />
</template>
