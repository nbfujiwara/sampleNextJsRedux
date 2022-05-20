import { ReactElement } from 'react'
import AppHeader from '@/components/core/AppHeader'
import { Box, createTheme, ThemeProvider } from '@mui/material'

type LayoutParam = {
  children: ReactElement
}

const theme = createTheme()

export default function PlaneLayout({ children }: LayoutParam) {
  return (
    <>
      <AppHeader />
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            backgroundColor: theme.palette.grey[300],
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          {children}
        </Box>
      </ThemeProvider>
    </>
  )
}
