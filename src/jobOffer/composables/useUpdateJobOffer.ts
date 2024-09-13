import apiService from "@/core/services/apiService"
import { fetchJobOffersQueryKey } from "@/jobOffer/composables/useFetchJobOffers"
import type { JobOffer } from "@/jobOffer/entities/jobOffer"
import type { JobOfferFormValues } from "@/jobOffer/schemas/jobOfferSchema"
import { useMutation, useQueryClient } from "@tanstack/vue-query"
import type { AxiosError } from "axios"

const updateJobOffer = async (id: string, payload: JobOfferFormValues) => {
  const { data } = await apiService.put<JobOffer>(`/job-offers/${id}`, payload)
  return data
}

const useUpdateJobOffer = (id: string) => {
  const fetchJobOfferQueryKey = [...fetchJobOffersQueryKey, id]
  const queryClient = useQueryClient()

  return useMutation<
    JobOffer,
    AxiosError,
    JobOfferFormValues,
    { previousJobOffers?: JobOffer[]; previousjobOffer?: JobOffer }
  >({
    mutationKey: ["updateJobOffer", id],
    mutationFn: (payload) => updateJobOffer(id, payload),
    onMutate: async (updatedJobOffer) => {
      await queryClient.cancelQueries({ queryKey: fetchJobOffersQueryKey })

      const previousJobOffers = queryClient.getQueryData<JobOffer[]>(fetchJobOffersQueryKey)
      const previousJobOffer = queryClient.getQueryData<JobOffer>(fetchJobOfferQueryKey)

      queryClient.setQueryData(fetchJobOffersQueryKey, (oldJobOffers?: JobOffer[]) =>
        oldJobOffers
          ? oldJobOffers?.map((offer) => (offer.id.toString() === id ? updatedJobOffer : offer))
          : [updatedJobOffer]
      )
      queryClient.setQueryData(fetchJobOfferQueryKey, (oldJobOffer?: JobOffer) =>
        oldJobOffer ? { ...oldJobOffer, ...updatedJobOffer } : updatedJobOffer
      )

      return { previousJobOffers, previousJobOffer }
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(fetchJobOffersQueryKey, context?.previousJobOffers)
      queryClient.setQueryData(fetchJobOfferQueryKey, context?.previousjobOffer)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: fetchJobOffersQueryKey })
    }
  })
}

export default useUpdateJobOffer
