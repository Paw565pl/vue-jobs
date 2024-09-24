import apiService from "@/core/services/apiService"
import { jobOffersQueryKey } from "@/jobOffer/composables/useFetchJobOffers"
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
      await queryClient.cancelQueries({ queryKey: jobOffersQueryKey })

      const previousJobOffers = queryClient.getQueryData<JobOffer[]>(jobOffersQueryKey)

      queryClient.setQueryData(jobOffersQueryKey, (oldJobOffers?: JobOffer[]) =>
        oldJobOffers ? oldJobOffers?.filter((offer) => offer.id.toString() !== id) : []
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

export default useDeleteJobOffer
