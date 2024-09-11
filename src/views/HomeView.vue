<script setup lang="ts">
import BaseHero from "@/components/base/BaseHero.vue"
import HomeCards from "@/components/HomeCards.vue"
import JobListings from "@/components/JobListings.vue"
</script>

<template>
  <main>
    <BaseHero title="Become a Vue Developer" subtitle="Find the Vue job that fits your skills and needs" />
    <HomeCards />
    <JobListings :limit="3" :show-all-jobs-button="true" />
  </main>
</template>
