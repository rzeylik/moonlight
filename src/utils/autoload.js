import { USER_KEY } from './constants'
import localStorage from './localStorage'

const autoload = async () => {
  const userData = await localStorage.getItem(USER_KEY)

  return { userData }
}

export default autoload
