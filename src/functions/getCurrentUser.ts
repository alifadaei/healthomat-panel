import { AuthType } from "../Components/Auth/authSlice";
import { Routes } from "../utils/Routes";

type ResType = {
  data: {
    username: string;
    firstName: string;
    lastName: string;
    objectId: string;
    group: "Patient" | "Doctor";
  };
  succeeded: true;
  message: string;
};

const getCurrentUser = (token: string): Promise<AuthType> => {
  return new Promise((resolve, reject) => {
    fetch(Routes.API.GetCurrentUser, {
      headers: { Authorization: "Bearer " + token },
    })
      .then((res) => res.json())
      .then((res: ResType) => {
        if (res.succeeded) {
          resolve({
            isAuthenticated: true,
            email: "",
            firstName: res.data.firstName,
            lastName: res.data.lastName,
            id: res.data.objectId,
            username: res.data.username,
            phone: "",
          });
        } else reject();
      });
  });
};
export default getCurrentUser;
