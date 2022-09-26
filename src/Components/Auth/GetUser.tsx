import { setUserInfo, logout, UserRole, login } from "./authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/useSelector";
import { API_ROUTES } from "../../utils/API_Routes";

type ResType = {
  data: {
    username: string;
    firstName: string;
    lastName: string;
    objectId: string;
    group: UserRole;
  };
  succeeded: true;
  message: string;
};

const GetUser = () => {
  const auth = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const param_token = params.get("token");

    if (param_token) {
      // redirect from get token page condition
      localStorage.setItem("token", param_token);
      window.location.replace("/");
    }

    const localToken = localStorage.getItem("token");
    if (localToken) {
      fetch(API_ROUTES.API.GetCurrentUser, {
        headers: { Authorization: "Bearer " + localToken },
      })
        .then((res) => res.json())
        .then((res: ResType) => {
          if (res.succeeded) {
            const authPayload = {
              role: res.data.group,
              email: "",
              firstName: res.data.firstName,
              lastName: res.data.lastName,
              id: res.data.objectId,
              username: res.data.username,
              phone: "",
            };
            dispatch(setUserInfo(authPayload));
            dispatch(login());
          } else {
            window.location.replace(API_ROUTES.Pull_Token);
            dispatch(logout());
          }
        });
    } else dispatch(logout());
  }, [auth]);
  return null;
};
export default GetUser;
