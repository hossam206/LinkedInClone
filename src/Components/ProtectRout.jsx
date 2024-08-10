import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

export const ProtectRout = ({ children }) => {
  const AppState = useSelector((state) => state.userState);
  const navigate = useNavigate();
  useEffect(() => {
    if (!AppState.user) {
      navigate("/", { replace: true });
    }
  }, [AppState.user]);

  return children;
};

export default ProtectRout;
