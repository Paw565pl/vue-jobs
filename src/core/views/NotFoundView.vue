<script lang="ts" setup>
import { Icon } from "@iconify/vue"
import { RouterLink } from "vue-router"
</script>

<template>
  <section class="flex h-96 flex-col items-center justify-center text-center">
    <Icon icon="prime:exclamation-triangle" class="mb-4 text-yellow-400 text-7xl" />
    <h1 class="mb-4 text-6xl font-bold">404 Not Found</h1>
    <p class="mb-5 text-xl">This page does not exist 😕</p>
    <RouterLink to="/" class="mt-4 rounded-md bg-green-700 px-3 py-2 text-white hover:bg-green-900">Go Back</RouterLink>
  </section>
</template>
