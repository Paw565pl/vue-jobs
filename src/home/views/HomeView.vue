<script setup lang="ts">
import BaseHero from "@/core/components/base/BaseHero.vue"
import HomeCards from "@/home/components/HomeCards.vue"
import JobOffersGrid from "@/jobOffer/components/JobOffersGrid.vue"
import ShowAllJobsButton from "@/home/components/ShowAllJobsButton.vue"
</script>

<template>
  <main>
    <BaseHero title="Become a Vue Developer" subtitle="Find the Vue job that fits your skills and needs" />
    <HomeCards />
    <JobOffersGrid :limit="3" />
    <ShowAllJobsButton />
  </main>
</template>
