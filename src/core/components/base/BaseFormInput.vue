<script lang="ts" setup>
import { useField } from "vee-validate"
import type { InputHTMLAttributes } from "vue"

interface BaseFormInputProps extends /* @vue-ignore */ InputHTMLAttributes {
  label: string
  name: string
}

const { label, name, ...props } = defineProps<BaseFormInputProps>()

const { value, errorMessage } = useField(() => name)
</script>

<template>
  <div>
    <label :for="props.id" class="mb-2 block font-bold text-gray-700">{{ label }}</label>
    <input class="mb-2 w-full rounded border px-3 py-2" v-bind="props" v-model="value" :name="name" />
    <p class="text-red-500 text-sm" as="p">{{ errorMessage }}</p>
  </div>
</template>
