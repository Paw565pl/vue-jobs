<script lang="ts" setup>
interface BaseCardProps {
  bg?: string
}

const { bg = "bg-gray-100" } = defineProps<BaseCardProps>()
</script>

<template>
  <div :class="`rounded-lg ${bg} p-6 shadow-md`">
    <slot></slot>
  </div>
</template>
