// app/providers.tsx
'use client'

import { background, ChakraProvider } from '@chakra-ui/react'
import { extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

const theme = extendTheme({ 
	components: {
    Progress: {
      baseStyle: {
				bg: '#0000001A'
      }
    }
  },
	colors: {
			brand: {
				100: "#f7fafc",
				500: "#A2F464",
				900: "#1a202c",
			},
			black: {
				500: "#000000"
			}
		},
})

export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}