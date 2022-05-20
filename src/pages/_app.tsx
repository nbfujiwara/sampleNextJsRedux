import '../styles/globals.css'
import DefaultLayout from '@/layouts/DefaultLayout'
import { AppPropsWithLayout } from '@/types/AppPropsWithLayout'
import store from '@/store'
import { Provider } from 'react-redux'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import AppUtil from '@/libs/AppUtil'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout
  const router = useRouter()

  useEffect(() => {
    console.log('_app.tsx useEffect', router.pathname)
    if (router.pathname !== '/login') {
      if (!AppUtil.getLoggedIn()) {
        // router.push('/login')
        window.location.href = '/login' // こっちの方が色々クリアしてくれそうな気分
      }
    }
  }, [router.pathname])

  return (
    <Provider store={store}>
      {getLayout ? (
        getLayout(<Component {...pageProps} />)
      ) : (
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      )}
    </Provider>
  )
}

export default MyApp
