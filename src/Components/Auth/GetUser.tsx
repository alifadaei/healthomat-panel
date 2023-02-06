import { useEffect } from "react";
import { API_ROUTES } from "../../utils/API_Routes";
import useAPI from "../../hooks/useAPI";
import useAuthStore, { AuthType, UserRole } from "./useAuthStore";

export type LoginResponse = {
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
  const isAuth = useAuthStore((state) => state.isAuthenticated);
  const login = useAuthStore((state) => state.login);
  const { client } = useAPI();
  useEffect(() => {
    if (!isAuth) {
      client
        .get<LoginResponse>(API_ROUTES.GetCurrentUser)
        .then(({ data }) => {
          // token is fresh
          const authPayload = {
            email: data.data.email,
            firstName: data.data.firstName,
            lastName: data.data.lastName,
            username: data.data.username,
            phone: "",
            avatar: data.data.avatar,
            isAuthenticated: true,
          };
          login(authPayload);
        })
        .catch(() => {
          //token is not fresh
          // so lets try refreshing it
          alert("please consider to login again!");
        });
    }
  }, []);
  return null;
};
export default GetUser;
