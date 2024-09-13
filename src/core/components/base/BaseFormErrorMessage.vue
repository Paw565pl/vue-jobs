<script lang="ts" setup>
interface BaseFormErrorMessageProps {
  errorMessage?: string
}

const { errorMessage } = defineProps<BaseFormErrorMessageProps>()
</script>

<template>
  <p v-if="errorMessage" class="text-red-500 text-sm">{{ errorMessage }}</p>
</template>
