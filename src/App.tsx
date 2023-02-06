import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Sidebar from "./Components/Layout/Sidebar/Sidebar";
import {
  setPhsyicalSidebarOpen,
  setPhycicalSidebarStat,
} from "./Components/Layout/Sidebar/sidebarSlice";
import SidebarContent from "./Components/Layout/Sidebar/SidebarContent";
import Card from "./Components/UI/Card/Card";
import Preloader from "./Components/UI/Preloader/Preloader";
import Wrapper from "./Components/UI/Wrapper/Wrapper";
import { updatePageDirection } from "./functions/language";
import "./i18next";
import { languages } from "./utils/languages";
import { RouteNames, Routes } from "./utils/Routes";
import ScrollToTop from "./Components/Layout/ScrollToTop";
import GetUser from "./Components/Auth/GetUser";
import FontLoader from "./Components/Layout/RTLCSS/FontLoader";
import useAuthStore from "./Components/Auth/useAuthStore";

function App() {
  const isAuth = useAuthStore((state) => state.isAuthenticated);
  const dispatch = useDispatch();
  const savedLng = localStorage.getItem("i18nextLng");
  if (!languages.find((item) => item.name === savedLng)) {
    localStorage.setItem("i18nextLng", "en");
  }
  useEffect(() => {
    dispatch(setPhsyicalSidebarOpen(setPhycicalSidebarStat()));
    updatePageDirection();
  }, []);
  return (
    <>
      <Preloader isOpen={!isAuth} />
      <FontLoader />
      <GetUser />
      {isAuth && (
        <ScrollToTop>
          <>
            <Header />
            <Wrapper className="mt-[5rem] mx-auto relative flex px-3 mb-4">
              <Sidebar>
                <SidebarContent />
              </Sidebar>
              <Card className="bg-white sm:ms-3 border w-full p-3 sm:p-5">
                <Switch>
                  {Routes.map((item, key) => (
                    <Route key={key} {...item} />
                  ))}
                  <Route
                    path="*"
                    element={<Navigate to={RouteNames.dashboard} replace />}
                  />
                </Switch>
              </Card>
            </Wrapper>
            <Footer />
          </>
        </ScrollToTop>
      )}
    </>
  );
}

export default App;
