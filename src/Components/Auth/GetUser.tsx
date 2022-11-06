import { setUserInfo, UserRole, login } from "./authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_ROUTES } from "../../utils/API_Routes";
import { CommonHeaders } from "../../hooks/useHTTP";

type ResType = {
  data: {
    username: string;
    firstName: string;
    lastName: string;
    patinetId: string;
    group: UserRole;
    email: string;
    avatar: string;
  };
  succeeded: true;
  message: string;
};

const GetUser = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const param_token = params.get("token");

    if (param_token) {
      // a token is given through URL
      // redirect to base
      localStorage.setItem("token", param_token);
      window.location.replace("/");
    }

    const localToken = localStorage.getItem("token");
    if (localToken) {
      // a token found
      fetch(API_ROUTES.API.GetCurrentUser, {
        headers: {
          Authorization: "Bearer " + localToken,
          ...CommonHeaders.EhsanAPI,
        },
      })
        .then((res) => {
          if (res.ok) {
            //token is fresh
            return res.json();
          } else {
            //token is not fresh
            localStorage.removeItem("token");
            window.location.reload();
          }
        })
        .then((res: ResType) => {
          // get and set user profile data
          const authPayload = {
            role: res.data.group,
            email: res.data.email,
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            id: res.data.patinetId,
            username: res.data.username,
            phone: "",
            avatar: res.data.avatar,
          };
          dispatch(setUserInfo(authPayload));
          dispatch(login());
        })
        .catch(console.log);
    } else {
      //no token found
      window.location.replace(API_ROUTES.Pull_Token);
    }
  }, []);
  return null;
};
export default GetUser;
