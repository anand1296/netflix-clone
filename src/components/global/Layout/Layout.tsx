import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import { useDispatch } from 'react-redux'
import { setUser } from '../../../utils/store/user.slice'
import { getUserFromToken } from '../../../utils/auth/storage'

const Layout = () => {

  const dispatch = useDispatch();
  const user = getUserFromToken();
  
  if(user) {
    dispatch(setUser(user));
  }
  else {
    
  }

  return (
    <div>
      <header>
        <Header/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </div>
  )
}

export default Layout