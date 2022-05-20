import PlaneLayout from '@/layouts/PlaneLayout'
import { NextPageWithLayout } from '@/types/NextPageWithLayout'
import { Box, Button, Container, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import basicSlice from '@/store/basic/slice'
import { useRouter } from 'next/router'
import AppUtil from '@/libs/AppUtil'

const LoginPage: NextPageWithLayout = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const dummySignIn = () => {
    dispatch(
      basicSlice.actions.setUser({
        uid: '111',
        name: '山田太郎',
        email: 'dummy@sample.com',
      }),
    )
    dispatch(basicSlice.actions.setLogon(true))
    AppUtil.setLoggedIn(true)
    return router.push('/')
  }

  return (
    <>
      <Container maxWidth={'xs'}>
        <Box sx={{ textAlign: 'center' }}>ロゴとかここに</Box>
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          autoFocus
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
        />
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2 }} onClick={dummySignIn}>
          Sign In(ただのダミー)
        </Button>
      </Container>
    </>
  )
}

LoginPage.getLayout = (page) => <PlaneLayout>{page}</PlaneLayout>
export default LoginPage
