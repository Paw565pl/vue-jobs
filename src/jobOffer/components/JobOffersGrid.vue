<script lang="ts" setup>
import data from "@/data/jobOffers.json"
import JobOfferCard from "@/jobOffer/components/JobOfferCard.vue"
import ShowAllJobsButton from "@/jobOffer/components/ShowAllJobsButton.vue"
import { ref } from "vue"

interface JobOffersGrid {
  limit?: number
  displayShowAllJobsButton?: boolean
}

const { limit, displayShowAllJobsButton = false } = defineProps<JobOffersGrid>()

const jobOffers = ref(data["job-offers"])
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
    </div>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
      <JobOfferCard
        v-for="jobOffer in jobOffers.slice(0, limit ?? jobOffers.length)"
        :key="jobOffer.id"
        :job-offer="jobOffer"
      />
    </div>
  </section>

  <ShowAllJobsButton v-if="displayShowAllJobsButton" />
</template>
