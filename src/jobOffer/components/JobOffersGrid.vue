<script lang="ts" setup>
import BaseLoadingIndicator from "@/core/components/base/BaseLoadingIndicator.vue"
import JobOfferCard from "@/jobOffer/components/JobOfferCard.vue"
import ShowAllJobsButton from "@/jobOffer/components/ShowAllJobsButton.vue"
import useFetchJobOffers from "@/jobOffer/composables/useFetchJobOffers"

interface JobOffersGridProps {
  limit?: number
  displayShowAllJobsButton?: boolean
}

const { limit, displayShowAllJobsButton = false } = defineProps<JobOffersGridProps>()

const { data: jobOffers, isLoading } = useFetchJobOffers()
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
    </div>

    <BaseLoadingIndicator v-if="isLoading" />

    <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-7xl mx-auto">
      <JobOfferCard
        v-for="jobOffer in jobOffers?.slice(0, limit ?? jobOffers.length)"
        :key="jobOffer.id"
        :job-offer="jobOffer"
      />
    </div>
  </section>

  <ShowAllJobsButton v-if="displayShowAllJobsButton" />
</template>
