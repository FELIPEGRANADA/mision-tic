import { useAuth0 } from "@auth0/auth0-react";
import Login from "../pages/Login";


const PrivateRoute = ({ children }) => {

    const { isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated ? <> {children} </> : <Login />
    )
};

export default PrivateRoute;
