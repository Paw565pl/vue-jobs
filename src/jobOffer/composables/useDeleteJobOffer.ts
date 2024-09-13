import apiService from "@/core/services/apiService"
import { fetchJobOffersQueryKey } from "@/jobOffer/composables/useFetchJobOffers"
import type { JobOffer } from "@/jobOffer/entities/jobOffer"
import { useMutation, useQueryClient } from "@tanstack/vue-query"
import type { AxiosError } from "axios"

const deleteJobOffer = async (id: string) => {
  const { data } = await apiService.delete<void>(`/job-offers/${id}`)
  return data
}

const useDeleteJobOffer = (id: string) => {
  const queryClient = useQueryClient()

  return useMutation<void, AxiosError, void, JobOffer[] | undefined>({
    mutationKey: ["deleteJobOffer", id],
    mutationFn: () => deleteJobOffer(id),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: fetchJobOffersQueryKey })

      const previousJobOffers = queryClient.getQueryData<JobOffer[]>(fetchJobOffersQueryKey)

      queryClient.setQueryData(fetchJobOffersQueryKey, (oldJobOffers?: JobOffer[]) =>
        oldJobOffers ? oldJobOffers?.filter((offer) => offer.id.toString() !== id) : []
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

export default useDeleteJobOffer
