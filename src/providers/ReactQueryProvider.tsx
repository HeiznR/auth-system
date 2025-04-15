"use client";

import { ReactNode, useState } from "react";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import SafeThemeProvider from "./SafeThemeProvider";

interface ReactQueryProviderProps {
  children: ReactNode;
  dehydratedState?: any;
}

export default function ReactQueryProvider({
  children,
  dehydratedState,
}: ReactQueryProviderProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>
        <ChakraProvider value={defaultSystem}>
          <SafeThemeProvider>{children}</SafeThemeProvider>
        </ChakraProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
