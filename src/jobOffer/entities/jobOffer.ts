import type { Company } from "@/jobOffer/entities/company"

export interface JobOffer {
  id: number
  title: string
  type: string
  description: string
  location: string
  salary: string
  company: Company
}
