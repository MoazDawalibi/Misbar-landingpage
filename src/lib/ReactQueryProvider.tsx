import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

function QueryProvider({ children }: any) {
  
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus:false,
        cacheTime:Infinity,
        staleTime: Infinity,
      },
    },
  })

  return (
    <QueryClientProvider  client={queryClient}>
      {children}
    </QueryClientProvider>

  )
}

export default QueryProvider