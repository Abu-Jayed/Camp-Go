import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
//   const from = location.state?.from?.pathName || "/";
//   const navigate = useNavigate();
  if (loading) {
    return (
      <div className="">
        <div
          className="  mx-auto ml-[46%] mt-[16%] radial-progress bg-primary text-primary-content border-4 border-primary h-32 w-32"
          style={{ "--value": 70 }}
        >
          Loading 70%
        </div>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
