export const Routes = {
  Pull_Token:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3001/auth/panel-login"
      : "https://healthomat-web.vercel.app/auth/panel-login",
  Local: [
    { name: "Home", to: "/" },
    { name: "Profile", to: "/profile/" },
    { name: "Dashboard", to: "/" },
  ],
  API: {
    GetCurrentUser:
      "https://webservice.healthomat.com/api/Authentication/GetCurrentUser",
  },
};
