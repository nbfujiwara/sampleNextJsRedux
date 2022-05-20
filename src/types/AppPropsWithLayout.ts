import { AppProps } from 'next/app'
import { NextPageWithLayout } from '@/types/NextPageWithLayout'

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
