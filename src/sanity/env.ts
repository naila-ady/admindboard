export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-04'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  "skpRb4IqSrEfiixZw2mvnVXwe8F5uWcV1UpwAxDnNW48LuR37v3J6AmVwInsNtfsPoO6koIdfYbfSGoLB1QJNHUgK5hI7VBibUCIMuVd7PYXTsAGm7pCjlG7bTjAokyhfS4WD7UKX5VQH0oGukPdJppGvjedTC7O3LJYA3tPNYOTtb7uEseD",
  'Missing environment variable: NEXT_PUBLIC_SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
