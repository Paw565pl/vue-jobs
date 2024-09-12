<script lang="ts" setup>
import type { JobOffer } from "@/jobOffer/entities/jobOffer"
import { Icon } from "@iconify/vue"
import { computed, ref } from "vue"
import { RouterLink } from "vue-router"

interface JobOfferProps {
  jobOffer: JobOffer
}

const { jobOffer } = defineProps<JobOfferProps>()

const showFullDescription = ref(false)
const toggleShowFullDescription = () => (showFullDescription.value = !showFullDescription.value)

const truncatedDescription = computed(() => {
  const charactersLimit = 100

  let description = jobOffer.description
  if (!showFullDescription.value && description.length > charactersLimit) {
    description = description.substring(0, charactersLimit) + "..."
  }

  return description
})
</script>

<template>
  <div class="relative rounded-xl bg-white shadow-md">
    <div class="p-4">
      <div class="mb-6">
        <div class="my-2 text-gray-600">{{ jobOffer.type }}</div>
        <h3 class="text-xl font-bold">{{ jobOffer.title }}</h3>
      </div>

      <div class="mb-5">
        <p>{{ truncatedDescription }}</p>
        <button @click="toggleShowFullDescription" class="text-green-500 hover:text-green-600 mb-5">
          {{ showFullDescription ? "Show less" : "Show more" }}
        </button>
      </div>

      <h3 class="mb-2 text-green-500">{{ jobOffer.salary }} / Year</h3>

      <div class="mb-5 border border-gray-100"></div>

      <div class="mb-4 flex flex-col justify-between lg:flex-row">
        <div class="mb-3 text-orange-700 flex items-center gap-1">
          <Icon icon="prime:map-marker" class="text-orange-700" />
          {{ jobOffer.location }}
        </div>
        <RouterLink
          :to="`/job-offers/${jobOffer.id}`"
          class="h-[36px] rounded-lg bg-green-500 px-4 py-2 text-center text-sm text-white hover:bg-green-600"
        >
          Read More
        </RouterLink>
      </div>
    </div>
  </div>
</template>
