import type { NextPage } from 'next'
import AccountInfo from '@/components/AccountInfo'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { Box, Card } from '@mui/material'

const Sub1Page: NextPage = () => {
  const storeBasic = useSelector((state: RootState) => state.basic)
  return (
    <>
      <Card
        sx={{
          maxWidth: '400px',
          margin: '32px',
          padding: '16px',
        }}
      >
        <div>sup1 page</div>
        <div>ID: {storeBasic.user.uid}</div>
        <div>Name: {storeBasic.user.name}</div>
        <div>Mail: {storeBasic.user.email}</div>
      </Card>
    </>
  )
}

export default Sub1Page
