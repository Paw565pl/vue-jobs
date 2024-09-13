<script lang="ts" setup>
import { useField } from "vee-validate"
import type { SelectHTMLAttributes } from "vue"

interface BaseFormSelectProps extends /* @vue-ignore */ SelectHTMLAttributes {
  label: string
  name: string
  options: {
    label: string
    value: string
  }[]
}

const { label, name, options, ...props } = defineProps<BaseFormSelectProps>()

const { value, errorMessage } = useField(() => name)
</script>

<template>
  <div>
    <label :for="props.id" class="mb-2 block font-bold text-gray-700">{{ label }}</label>
    <select class="mb-2 w-full rounded border px-3 py-2" v-bind="props" v-model="value" :name="name">
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
    <p class="text-red-500 text-sm" as="p">{{ errorMessage }}</p>
  </div>
</template>
