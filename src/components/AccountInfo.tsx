import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'

export default function AccountInfo() {
  const storeBasicSelector = useSelector((state: RootState) => state.basic)
  return (
    <>
      <AccountCircleIcon />
      {storeBasicSelector.user.name}さん
    </>
  )
}
