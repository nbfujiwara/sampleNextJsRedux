import '../styles/globals.css'
import DefaultLayout from '@/layouts/DefaultLayout'
import { AppPropsWithLayout } from '@/types/AppPropsWithLayout'
import store from '@/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout

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
