<script lang="ts" setup>
import { useRoute } from "vue-router"

export interface NavBarLinkProps {
  path: string
  text: string
}

const { path } = defineProps<NavBarLinkProps>()

const getActiveLinkStyles = (path: string) => {
  const route = useRoute()
  return route.path === path ? "bg-green-900" : "hover:bg-gray-900 hover:text-white"
}
</script>

<template>
  <RouterLink :to="path" :class="`${getActiveLinkStyles(path)} rounded-md px-3 py-2 text-white`">{{ text }}</RouterLink>
</template>
