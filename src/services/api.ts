import { QueryClient } from '@tanstack/react-query'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
})

export const api = {
  getStats: async () => {
    return {
      users: 15234,
      platforms: 48,
      guides: 156,
      reviews: 892,
    }
  },
}