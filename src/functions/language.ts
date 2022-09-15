export const updatePageDirection = () => {
  const lng = localStorage.getItem("i18nextLng");
  document.body.dir = lng === "fa" || lng === "eng" ? "rtl" : "ltr";
};
