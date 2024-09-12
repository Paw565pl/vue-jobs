import { z } from "zod"

const jobOfferSchema = z.object({
  title: z
    .string({ required_error: "Job title is required." })
    .trim()
    .min(3, "Job title has to be at least 3 characters long."),
  type: z.enum(["Full-Time", "Part-Time", "Remote", "Internship"], { required_error: "Job type is required." }),
  description: z
    .string({ required_error: "Job description is required." })
    .trim()
    .min(10, "Job description has to be at least 10 characters long.")
    .max(1000, "Job description has to be at most 1000 characters long."),
  salary: z.enum(
    [
      "Under $50K",
      "$50K - $60K",
      "$60K - $70K",
      "$70K - $80K",
      "$80K - $90K",
      "$90K - $100K",
      "$100K - $125K",
      "$125K - $150K",
      "$150K - $175K",
      "$175K - $200K",
      "Over $200K"
    ],
    { required_error: "Salary is required." }
  ),
  location: z
    .string({ required_error: "Location is required." })
    .trim()
    .min(3, "Location has to be at least 3 characters long."),
  company: z.object({
    name: z
      .string({ required_error: "Company name is required." })
      .trim()
      .min(3, "Company name has to be at least 3 characters long."),
    description: z
      .string({ required_error: "Company description is required." })
      .trim()
      .min(10, "Company description has to be at least 10 characters long.")
      .max(1000, "Company description has to be at most 1000 characters long."),
    contactEmail: z
      .string({ required_error: "Contact email is required." })
      .trim()
      .email("Contact email is not valid."),
    contactPhone: z.string({ required_error: "Contact phone is required." }).trim()
  })
})

export type jobOfferValues = z.infer<typeof jobOfferSchema>

export default jobOfferSchema
