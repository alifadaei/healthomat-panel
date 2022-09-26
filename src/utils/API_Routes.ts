const web =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/"
    : "https://healthomat-web.vercel.app/";
export const API_ROUTES = {
  Web: web,
  Pull_Token: web + "auth/panel-login",
  API: {
    GetCurrentUser:
      "https://webservice.healthomat.com/api/Authentication/GetCurrentUser",
  },
};
