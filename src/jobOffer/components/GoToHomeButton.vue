<script lang="ts" setup>
import { Icon } from "@iconify/vue"
import { RouterLink } from "vue-router"
</script>

<template>
  <section>
    <div class="container m-auto px-6 py-6">
      <RouterLink to="/job-offers" class="flex items-center text-green-500 hover:text-green-600">
        <Icon icon="prime:arrow-circle-left" class="mr-2 text-3xl" /><span>Back to Job Listings</span>
      </RouterLink>
    </div>
  </section>
</template>
