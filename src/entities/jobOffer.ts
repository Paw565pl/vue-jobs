import type { Company } from "./company"

export interface JobOffer {
  id: number
  title: string
  type: string
  description: string
  location: string
  salary: string
  company: Company
}
