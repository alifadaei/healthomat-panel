const webservice_base = "https://webservice.healthomat.com/api/";
const timeseries_base = "https://timeseries-service.healthomat.com/api/";
const web_base =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001/"
    : "https://healthomat-web.vercel.app/";
export const API_ROUTES = {
  Web: web_base,
  Pull_Token: web_base + "auth/panel-login",
  Logout: web_base + "auth/logout",
  Profile: {
    UploadAvatar: webservice_base + "Authentication/UploadAvatar",
  },
  API: {
    GetCurrentUser: webservice_base + "Authentication/GetCurrentUser",
  },
  PatientChild: {
    GetChildsByPateintId: timeseries_base + "PatientChild/GetChildsByPateintId",
    GetById: timeseries_base + "PatientChild/GetById",
    GetChildsById: timeseries_base + "PatientChild/GetChildsById",
    Add: timeseries_base + "PatientChild/Add",
    Delete: timeseries_base + "PatientChild/Delete",
    Edit: timeseries_base + "PatientChild/Edit",
  },
};
