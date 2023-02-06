const webservice_base = "https://webservice.healthomat.com/gateway/";
process.env.NODE_ENV === "development"
  ? "http://localhost:3001/"
  : "https://healthomat.com/";
export const API_ROUTES = {
  GetCurrentUser: webservice_base + "Authentication/GetCurrentUser",
  RefreshToken: webservice_base + "RefreshToken",
  Profile: {
    UploadAvatar: webservice_base + "Authentication/UploadAvatar",
    ChangePassword: webservice_base + "Authentication/ChangePassword",
  },
  PatientChild: {
    GetChildsByID: webservice_base + "PatientChild/GetChildsById",
    UploadAvatar: webservice_base + "PatientChild/UploadAvatar",
    GetById: webservice_base + "PatientChild/GetById",
    GetChilds: webservice_base + "PatientChild/GetChilds",
    Add: webservice_base + "PatientChild/Add",
    Delete: webservice_base + "PatientChild/Delete",
    Edit: webservice_base + "PatientChild/Edit",
  },
};
