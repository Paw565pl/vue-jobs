import apiService from "@/core/services/apiService"
import { jobOffersQueryKey } from "@/jobOffer/composables/useFetchJobOffers"
import type { JobOffer } from "@/jobOffer/entities/jobOffer"
import { useQuery } from "@tanstack/vue-query"
import type { AxiosError } from "axios"

const fetchJobOffer = async (id: string) => {
  const { data } = await apiService.get<JobOffer>(`/job-offers/${id}`)
  return data
}

const useFetchJobOffer = (id: string) =>
  useQuery<JobOffer, AxiosError>({
    queryKey: [...jobOffersQueryKey, id],
    queryFn: () => fetchJobOffer(id),
    staleTime: 1000 * 60 * 10 // 10 minutes
  })

export default useFetchJobOffer
