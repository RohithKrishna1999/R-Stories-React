import { Redirect, Route } from "react-router-dom";
function ProtectedRoutes({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                sessionStorage.getItem('token') ? (children) : (
                    <Redirect to={{ pathname: "/Welcome", state: { from: location } }} />
                )
            }
        />
    )
}
export default ProtectedRoutes;