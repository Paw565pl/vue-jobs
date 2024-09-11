<script lang="ts" setup>
import jobOffersData from "@/data/jobOffers.json"
import { ref } from "vue"
import JobOffer from "@/jobOffer/components/JobOffer.vue"

interface JobOffersGrid {
  limit?: number
  showAllJobsButton?: boolean
}

const { limit, showAllJobsButton = false } = defineProps<JobOffersGrid>()

const jobOffers = ref(jobOffersData)
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
    </div>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <JobOffer
        v-for="jobOffer in jobOffers.slice(0, limit ?? jobOffers.length)"
        :key="jobOffer.id"
        :job-offer="jobOffer"
      />
    </div>
  </section>

  <section v-if="showAllJobsButton" class="m-auto my-10 max-w-lg px-6">
    <a href="jobs.html" class="block rounded-xl bg-black px-6 py-4 text-center text-white hover:bg-gray-700"
      >View All Jobs</a
    >
  </section>
</template>
