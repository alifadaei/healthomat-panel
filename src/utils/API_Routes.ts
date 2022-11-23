const webservice_base = "https://webservice.healthomat.com/api/";
const timeseries_base = "https://timeseries-service.healthomat.com/api/";
const web_base =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/"
    : "https://healthomat.com/";
export const API_ROUTES = {
  Web: web_base,
  GetCurrentUser: webservice_base + "Authentication/GetCurrentUser",
  RefreshToken: webservice_base + "RefreshToken",
  Logout: web_base + "auth/logout",
  Login: web_base + "auth/login",
  Profile: {
    UploadAvatar: webservice_base + "Authentication/UploadAvatar",
    ChangePassword: webservice_base + "Authentication/ChangePassword",
  },
  PatientChild: {
    GetChildsByID: timeseries_base + "PatientChild/GetChildsById",
    UploadAvatar: timeseries_base + "PatientChild/UploadAvatar",
    GetById: timeseries_base + "PatientChild/GetById",
    GetChilds: timeseries_base + "PatientChild/GetChilds",
    Add: timeseries_base + "PatientChild/Add",
    Delete: timeseries_base + "PatientChild/Delete",
    Edit: timeseries_base + "PatientChild/Edit",
  },
};
