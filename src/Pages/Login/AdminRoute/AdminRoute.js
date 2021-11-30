import { Spinner } from "react-bootstrap";
import { Navigate, useLocation } from "react-router";
import useAuth from '../../../hooks/useAuth'

const AdminRoute = ({ children }) => {
  let location = useLocation();
  const { allContext } = useAuth();
  const { user, loading ,admin} = allContext;
  if (loading) {
    return <Spinner variant="success"></Spinner>;
  }
  if (user?.email && admin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;
