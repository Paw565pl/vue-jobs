import apiService from "@/core/services/apiService"
import { fetchJobOffersQueryKey } from "@/jobOffer/composables/useFetchJobOffers"
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
      await queryClient.cancelQueries({ queryKey: fetchJobOffersQueryKey })

      const previousJobOffers = queryClient.getQueryData<JobOffer[]>(fetchJobOffersQueryKey)

      queryClient.setQueryData(fetchJobOffersQueryKey, (oldJobOffers?: JobOffer[]) =>
        oldJobOffers ? [...oldJobOffers, newJobOffer] : [newJobOffer]
      )

      return previousJobOffers
    },
    onError: (_, __, previousJobOffers) => {
      queryClient.setQueryData(fetchJobOffersQueryKey, previousJobOffers)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: fetchJobOffersQueryKey })
    }
  })
}

export default useCreateJobOffer
