<script lang="ts" setup>
import { useField } from "vee-validate"
import type { InputHTMLAttributes } from "vue"
import BaseFormErrorMessage from "@/core/components/base/BaseFormErrorMessage.vue"

interface BaseFormInputProps extends /* @vue-ignore */ InputHTMLAttributes {
  label: string
  name: string
  id: string
}

const { label, name, id } = defineProps<BaseFormInputProps>()

const { value, errorMessage } = useField<string>(() => name)
</script>

<template>
  <label :for="id" class="mb-2 block font-bold text-gray-700">{{ label }}</label>
  <input class="mb-2 w-full rounded border px-3 py-2" v-bind="$attrs" v-model="value" :name="name" :id="id" />
  <BaseFormErrorMessage :error-message="errorMessage" />
</template>
