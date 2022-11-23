import { setUserInfo, UserRole, login } from "./authSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_ROUTES } from "../../utils/API_Routes";
import useAPI from "../../hooks/useAPI";

type ResType = {
  data: {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    group: string;
    avatar: string;
  };
  succeeded: boolean;
  message: string;
};

const GetUser = () => {
  const { client } = useAPI();
  const dispatch = useDispatch();
  useEffect(() => {
    client
      .get(API_ROUTES.GetCurrentUser)
      .then((res) => {
        // token is fresh
        const data = res.data as ResType;
        const authPayload = {
          role: data.data.group as UserRole,
          email: data.data.email,
          firstName: data.data.firstName,
          lastName: data.data.lastName,
          username: data.data.username,
          phone: "",
          avatar: data.data.avatar,
        };
        dispatch(setUserInfo(authPayload));
        dispatch(login());
      })
      .catch(() => {
        //token is not fresh
        // so lets try refreshing it
        client
          .post(API_ROUTES.RefreshToken)
          .then((res) => {
            //token is fresh by now
            client.get<ResType>(API_ROUTES.GetCurrentUser).then((res) => {
              const data = res.data as ResType;
              const authPayload = {
                role: data.data.group as UserRole,
                email: data.data.email,
                firstName: data.data.firstName,
                lastName: data.data.lastName,
                username: data.data.username,
                phone: "",
                avatar: data.data.avatar,
              };
              dispatch(setUserInfo(authPayload));
              dispatch(login());
            });
          })
          .catch(() => {
            //login needed
            window.location.replace(API_ROUTES.Login);
          });
      });
  }, []);
  return null;
};
export default GetUser;
