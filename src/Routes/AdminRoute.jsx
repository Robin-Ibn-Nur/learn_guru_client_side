/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router";
import useAuth from "../CustomHooks/useAuth";
import useAdmin from "../CustomHooks/useAdmin";
import PrivateRouteLoader from "../components/Loader/PrivateRouteLoader/PrivateRouteLoader";



const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <PrivateRouteLoader></PrivateRouteLoader>
    }

    if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;