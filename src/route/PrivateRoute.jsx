import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to={"/sign-in"}></Navigate>;
  }
};

export default PrivateRoute;
