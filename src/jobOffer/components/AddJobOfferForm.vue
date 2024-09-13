<script lang="ts" setup>
import BaseFormInput from "@/core/components/base/BaseFormInput.vue"
import BaseFormSelect from "@/core/components/base/BaseFormSelect.vue"
import BaseFormTextArea from "@/core/components/base/BaseFormTextArea.vue"
import useCreateJobOffer from "@/jobOffer/composables/useCreateJobOffer"
import type { JobOfferFormValues } from "@/jobOffer/schemas/jobOfferSchema"
import jobOfferSchema from "@/jobOffer/schemas/jobOfferSchema"
import { toTypedSchema } from "@vee-validate/zod"
import { useForm } from "vee-validate"
import { useRouter } from "vue-router"
import { useToast } from "vue-toastification"

const router = useRouter()
const toast = useToast()
const { mutate: createJobOffer } = useCreateJobOffer()

const jobTypeOptions = [
  { value: "Full-Time", label: "Full-Time" },
  { value: "Part-Time", label: "Part-Time" },
  { value: "Remote", label: "Remote" },
  { value: "Internship", label: "Internship" }
]
const salaryOptions = [
  { value: "Under $50K", label: "Under $50K" },
  { value: "$50K - $60K", label: "$50K - $60K" },
  { value: "$60K - $70K", label: "$60K - $70K" },
  { value: "$70K - $80K", label: "$70K - $80K" },
  { value: "$80K - $90K", label: "$80K - $90K" },
  { value: "$90K - $100K", label: "$90K - $100K" },
  { value: "$100K - $125K", label: "$100K - $125K" },
  { value: "$125K - $150K", label: "$125K - $150K" },
  { value: "$150K - $175K", label: "$150K - $175K" },
  { value: "$175K - $200K", label: "$175K - $200K" },
  { value: "Over $200K", label: "Over $200K" }
]

const validationSchema = toTypedSchema(jobOfferSchema)
const { handleSubmit } = useForm<JobOfferFormValues>({ validationSchema })

const onSubmit = handleSubmit((values) =>
  createJobOffer(values, {
    onSuccess: (newJobOffer) => {
      toast.success("Job Offer added successfully!")
      router.push(`/job-offers/${newJobOffer.id}`)
    },
    onError: (error) => {
      toast.error("Job Offer was not added!")
      console.error(error)
    }
  })
)
</script>

<template>
  <section class="bg-green-50">
    <div class="container m-auto max-w-2xl py-14">
      <div class="m-4 mb-4 rounded-md border bg-white px-6 py-8 shadow-md md:m-0">
        <h2 class="mb-6 text-center text-3xl font-semibold">Add Job Offer</h2>
        <form @submit="onSubmit" class="space-y-4">
          <div>
            <BaseFormSelect label="Job Type" name="type" id="type" :options="jobTypeOptions" />
          </div>

          <div>
            <BaseFormInput label="Job Offer Name" name="title" id="name" type="text" />
          </div>

          <div>
            <BaseFormTextArea
              name="description"
              id="description"
              label="Description"
              rows="4"
              placeholder="Add any job duties, expectations, requirements, etc"
            />
          </div>

          <div>
            <BaseFormSelect label="Salary" name="salary" id="salary" :options="salaryOptions" />
          </div>

          <div>
            <BaseFormInput
              label="Location"
              name="location"
              id="location"
              type="text"
              placeholder="eg. Beautiful Apartment In Miami"
            />
          </div>

          <h3 class="mb-5 text-2xl">Company Info</h3>

          <div>
            <BaseFormInput
              label="Company Name"
              name="company.name"
              id="company.name"
              type="text"
              placeholder="Company Name"
            />
          </div>

          <div>
            <BaseFormTextArea
              label="Company Description"
              name="company.description"
              id="company.description"
              rows="4"
              placeholder="What does your company do?"
            />
          </div>

          <div>
            <BaseFormInput
              label="Contact Email"
              name="company.contactEmail"
              id="company.contactEmail"
              type="text"
              placeholder="Email address for applicants"
            />
          </div>

          <div>
            <BaseFormInput
              label="Contact Phone"
              name="company.contactPhone"
              id="company.contactPhone"
              type="text"
              placeholder="Phone number for applicants"
            />
          </div>

          <div>
            <button
              type="submit"
              class="focus:shadow-outline w-full rounded-full bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-600 focus:outline-none"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>
