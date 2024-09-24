import apiService from "@/core/services/apiService"
import { jobOffersQueryKey } from "@/jobOffer/composables/useFetchJobOffers"
import type { JobOffer } from "@/jobOffer/entities/jobOffer"
import type { JobOfferFormValues } from "@/jobOffer/schemas/jobOfferSchema"
import { useMutation, useQueryClient } from "@tanstack/vue-query"
import type { AxiosError } from "axios"

const createJobOffer = async (payload: JobOfferFormValues) => {
  const { data } = await apiService.post<JobOffer>("/job-offers", payload)
  return data
}

const useCreateJobOffer = () => {
  const queryClient = useQueryClient()

  return useMutation<JobOffer, AxiosError, JobOfferFormValues, JobOffer[] | undefined>({
    mutationKey: ["createJobOffer"],
    mutationFn: (payload) => createJobOffer(payload),
    onMutate: async (newJobOffer) => {
      await queryClient.cancelQueries({ queryKey: jobOffersQueryKey })

      const previousJobOffers = queryClient.getQueryData<JobOffer[]>(jobOffersQueryKey)

      queryClient.setQueryData(jobOffersQueryKey, (oldJobOffers?: JobOffer[]) =>
        oldJobOffers ? [...oldJobOffers, newJobOffer] : [newJobOffer]
      )

      return previousJobOffers
    },
    onError: (_, __, previousJobOffers) => {
      queryClient.setQueryData(jobOffersQueryKey, previousJobOffers)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: jobOffersQueryKey })
    }
  })
}

export default useCreateJobOffer
