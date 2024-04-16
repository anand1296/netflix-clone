import { Outlet, useNavigate } from 'react-router-dom'
import Header from '../Header/Header'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../../utils/store/user.slice'
import { getUserFromToken } from '../../../utils/auth/storage'
import { RootState } from '../../../utils/store/app.store'
import { useEffect } from 'react'
import { APP_CONSTANTS } from '../../../utils/constants'

const Layout = () => {

  console.log('layout rendered');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = getUserFromToken();
  const isUserLoggedIn = Boolean(useSelector((state: RootState) => state.user));
  console.log(user);
  console.log(isUserLoggedIn);

  // if(!isUserLoggedIn) {
  //   if(user) {
  //     dispatch(setUser(user));
  //   }
  //   else {
  //     navigate(`/${APP_CONSTANTS.ROUTES.SIGN_IN}`);
  //   }
  // }

  useEffect(() => {
    if(!isUserLoggedIn) {
      if(user) {
        dispatch(setUser(user));
      }
      navigate(`/${APP_CONSTANTS.ROUTES.SIGN_IN}`);
    }
    else {
      navigate(`/${APP_CONSTANTS.ROUTES.BROWSE}`);
    }
  }, [isUserLoggedIn])

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