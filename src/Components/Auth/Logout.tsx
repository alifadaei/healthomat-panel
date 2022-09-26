import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "./authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  dispatch(logout());
  return null;
};
export default Logout;
