import type { NextPage } from 'next'
import { useEffect } from 'react'
import AccountInfo from '@/components/AccountInfo'

const Home: NextPage = () => {
  useEffect(() => {}, [])

  return (
    <>
      <div>this is Home</div>
      <AccountInfo />
    </>
  )
}

export default Home
