<script lang="ts" setup>
import { useField } from "vee-validate"
import { type TextareaHTMLAttributes } from "vue"
import BaseFormErrorMessage from "@/core/components/base/BaseFormErrorMessage.vue"

interface BaseFormTextAreaProps extends /* @vue-ignore */ TextareaHTMLAttributes {
  label: string
  name: string
  id: string
}

const { label, name, id } = defineProps<BaseFormTextAreaProps>()

const { value, errorMessage } = useField<string>(() => name)
</script>

<template>
  <label :for="id" class="mb-2 block font-bold text-gray-700">{{ label }}</label>
  <textarea class="w-full rounded border px-3 py-2" v-bind="$attrs" v-model="value" :name="name" :id="id"></textarea>
  <BaseFormErrorMessage :error-message="errorMessage" />
</template>
