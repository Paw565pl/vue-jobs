import apiService from "@/core/services/apiService"
import type { JobOffer } from "@/jobOffer/entities/jobOffer"
import { useQuery } from "@tanstack/vue-query"
import type { AxiosError } from "axios"

const fetchJobOffers = async () => {
  const { data } = await apiService.get<JobOffer[]>("/job-offers")
  return data
}

export const fetchJobOffersQueryKey = ["jobOffers"]

const useFetchJobOffers = () =>
  useQuery<JobOffer[], AxiosError>({
    queryKey: fetchJobOffersQueryKey,
    queryFn: fetchJobOffers,
    staleTime: 1000 * 60 * 10 // 10 minutes
  })

export default useFetchJobOffers
