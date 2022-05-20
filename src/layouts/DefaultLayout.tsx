import AppBar from '@mui/material/AppBar'
import { ReactElement, useState } from 'react'
import {
  Box,
  createTheme,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
} from '@mui/material'
import AppHeader from '@/components/core/AppHeader'
import AccountInfo from '@/components/AccountInfo'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import HomeIcon from '@mui/icons-material/Home'
import LogoutIcon from '@mui/icons-material/Logout'
import WebIcon from '@mui/icons-material/Web'
import { useRouter } from 'next/router'
import { minWidth } from '@mui/system'

type LayoutParam = {
  children: ReactElement
}

const theme = createTheme()

export default function DefaultLayout({ children }: LayoutParam) {
  const router = useRouter()
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  const goto = (path: string) => {
    router.push(path)
    setOpenDrawer(false)
  }

  const logout = () => {
    // 手抜いてる
    window.location.href = '/login'
  }

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
              <IconButton
                edge='start'
                color='inherit'
                aria-label='open drawer'
                onClick={toggleDrawer}
                sx={{
                  marginRight: '36px',
                  ...(openDrawer && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography sx={{ flexGrow: 1 }}>アプリ名とか</Typography>
              <AccountInfo />
            </Toolbar>
          </AppBar>
          <Drawer open={openDrawer}>
            <Toolbar
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                px: [1],
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <ChevronLeftIcon />
              </IconButton>
            </Toolbar>
            <Divider />
            <List component='nav' sx={{ minWidth: '240px' }}>
              <ListItemButton onClick={() => goto('/')}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary='ホーム' />
              </ListItemButton>
              <ListItemButton onClick={() => goto('/sub1')}>
                <ListItemIcon>
                  <WebIcon />
                </ListItemIcon>
                <ListItemText primary='サブ1' />
              </ListItemButton>
              <Divider sx={{ my: 1 }} />
              <ListItemButton onClick={logout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText primary='ログアウト' />
              </ListItemButton>
            </List>
          </Drawer>

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
