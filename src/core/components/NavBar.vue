<script lang="ts" setup>
import logo from "@/assets/img/logo.png"
import { RouterLink } from "vue-router"
</script>

<template>
  <nav class="border-b border-green-500 bg-green-700">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <RouterLink to="/" class="mr-4 flex flex-shrink-0 items-center">
            <img class="h-10 w-auto" :src="logo" alt="Vue Jobs" />
            <span class="ml-2 hidden text-2xl font-bold text-white md:block">Vue Jobs</span>
          </RouterLink>
          <div class="md:ml-auto">
            <div class="flex space-x-2">
              <RouterLink to="/" class="rounded-md bg-green-900 px-3 py-2 text-white hover:bg-gray-900 hover:text-white"
                >Home</RouterLink
              >
              <a href="jobs.html" class="rounded-md px-3 py-2 text-white hover:bg-green-900 hover:text-white">Jobs</a>
              <a href="add-job.html" class="rounded-md px-3 py-2 text-white hover:bg-green-900 hover:text-white"
                >Add Job</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
