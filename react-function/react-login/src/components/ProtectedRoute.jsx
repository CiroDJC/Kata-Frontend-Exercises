import { Navigate } from 'react-router-dom'
import Layout from './Layout'

const ProtectedRoute = ({
  isAuth,
  redirectTo = "/login",
  userLogged
}) => {

  if(!isAuth) {
    return <Navigate to={redirectTo} replace/>
  }

  return <Layout isAuth={isAuth} userLogged={userLogged}/>;
}

export default ProtectedRoute