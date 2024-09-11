<script setup lang="ts">
import BaseHero from "@/core/components/base/BaseHero.vue"
import HomeCards from "@/home/components/HomeCards.vue"
import JobOffersGrid from "@/jobOffer/components/JobOffersGrid.vue"
</script>

<template>
  <main>
    <BaseHero title="Become a Vue Developer" subtitle="Find the Vue job that fits your skills and needs" />
    <HomeCards />
    <JobOffersGrid :limit="3" :show-all-jobs-button="true" />
  </main>
</template>
