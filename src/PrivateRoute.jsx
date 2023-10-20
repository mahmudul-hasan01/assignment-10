import { useContext } from "react";
import { ContextData } from "./components/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { users, loading } = useContext(ContextData)
    if (loading) {
        return <div>Loading...</div>
    }
    if (users) {
        return children
    }
    return <Navigate to='/Login'></Navigate>
};

export default PrivateRoute;