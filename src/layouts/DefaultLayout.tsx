import AppBar from '@mui/material/AppBar'
import { ReactElement } from 'react'
import { Box, createTheme, CssBaseline, ThemeProvider, Toolbar, Typography } from '@mui/material'
import AppHeader from '@/components/core/AppHeader'
import AccountInfo from '@/components/AccountInfo'

type LayoutParam = {
  children: ReactElement
}

const theme = createTheme()

export default function DefaultLayout({ children }: LayoutParam) {
  return (
    <>
      <AppHeader />
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar>
            <Toolbar
              sx={{
                pr: '24px',
              }}
            >
              <Typography sx={{ flexGrow: 1 }}>アプリ名とか</Typography>
              <AccountInfo />
            </Toolbar>
          </AppBar>
          <Box
            component='main'
            sx={{
              backgroundColor: theme.palette.grey[100],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            {children}
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}
