import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export default function AccountInfo() {
  const storeBasic = useSelector((state: RootState) => state.basic)
  return (
    <>
      <AccountCircleIcon />
      {storeBasic.user.name}さん
    </>
  )
}
