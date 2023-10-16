import { Navigate } from "react-router-dom";

function NotFound() {
    return (
        <div>
            {/* <h1>404 Not Found</h1> */}
            <Navigate to="/products" replace />
        </div>
    )
}

export default NotFound;