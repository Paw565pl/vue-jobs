import apiService from "@/core/services/apiService"
import { jobOffersQueryKey } from "@/jobOffer/composables/useFetchJobOffers"
import type { JobOffer } from "@/jobOffer/entities/jobOffer"
import type { JobOfferFormValues } from "@/jobOffer/schemas/jobOfferSchema"
import { useMutation, useQueryClient } from "@tanstack/vue-query"
import type { AxiosError } from "axios"

const updateJobOffer = async (id: string, payload: JobOfferFormValues) => {
  const { data } = await apiService.put<JobOffer>(`/job-offers/${id}`, payload)
  return data
}

const useUpdateJobOffer = (id: string) => {
  const jobOfferQueryKey = [...jobOffersQueryKey, id]
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
      await queryClient.cancelQueries({ queryKey: jobOffersQueryKey })

      const previousJobOffers = queryClient.getQueryData<JobOffer[]>(jobOffersQueryKey)
      const previousJobOffer = queryClient.getQueryData<JobOffer>(jobOfferQueryKey)

      queryClient.setQueryData(jobOffersQueryKey, (oldJobOffers?: JobOffer[]) =>
        oldJobOffers
          ? oldJobOffers?.map((offer) => (offer.id.toString() === id ? updatedJobOffer : offer))
          : [updatedJobOffer]
      )
      queryClient.setQueryData(jobOfferQueryKey, (oldJobOffer?: JobOffer) =>
        oldJobOffer ? { ...oldJobOffer, ...updatedJobOffer } : updatedJobOffer
      )

      return { previousJobOffers, previousJobOffer }
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(jobOffersQueryKey, context?.previousJobOffers)
      queryClient.setQueryData(jobOfferQueryKey, context?.previousjobOffer)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: jobOffersQueryKey })
    }
  })
}

export default useUpdateJobOffer
