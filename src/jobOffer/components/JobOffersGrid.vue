<script lang="ts" setup>
import BaseLoadingIndicator from "@/core/components/base/BaseLoadingIndicator.vue"
import JobOfferCard from "@/jobOffer/components/JobOfferCard.vue"
import useFetchJobOffers from "@/jobOffer/composables/useFetchJobOffers"

interface JobOffersGridProps {
  limit?: number
}

const { limit } = defineProps<JobOffersGridProps>()

const { data: jobOffers, isLoading } = useFetchJobOffers()
</script>

<template>
  <section class="bg-blue-50 px-4 py-10">
    <div class="container-xl lg:container m-auto">
      <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">Browse Jobs</h2>
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-7xl mx-auto">
      <BaseLoadingIndicator v-if="isLoading" />

      <JobOfferCard
        v-else
        v-for="jobOffer in jobOffers?.slice(0, limit ?? jobOffers.length)"
        :key="jobOffer.id"
        :job-offer="jobOffer"
      />
    </div>
  </section>
</template>
