import { Redirect, Route } from "react-router-dom";
function UnprotectedRoutes({ children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                sessionStorage.getItem('token') ? (<>
                    <Redirect to={{pathname: "/", state: { from: location }}} /></>
                ) : (children)
            }
        />
    )
}
export default UnprotectedRoutes;