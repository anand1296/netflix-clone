import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import { RootState } from '../utils/store/app.store';
import { Navigate } from 'react-router-dom'
import { getUserFromToken, isAuthenticated } from '../utils/auth/storage';

const ProtectedRoute = () => {
  // const userDetails = useSelector((state: RootState) => state.user);
  
  return (
    // Boolean(useSelector((state: RootState) => state.user)) ? <Outlet/> : <Navigate to={'login'}/>
    // userDetails || getUserFromToken() ? <Outlet/> : <Navigate to={'login'}/>
    isAuthenticated() ? <Outlet/> : <Navigate to={"login"}/>
  )
};

export default ProtectedRoute;