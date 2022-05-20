import { BasicState } from '@/store/basic/types'

const basicInitialState: BasicState = {
  user: {
    uid: '',
    name: '',
    email: '',
  },
  isLogon: false,
}

export default basicInitialState
