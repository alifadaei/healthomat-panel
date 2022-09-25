import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes as Switch, Route } from "react-router-dom";
import { login } from "./Components/Auth/authSlice";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Sidebar from "./Components/Layout/Sidebar";
import {
  setPhsyicalSidebarOpen,
  setPhycicalSidebarStat,
} from "./Components/Layout/sidebarSlice";
import SidebarContent from "./Components/SidebarContent";
import Card from "./Components/UI/Card/Card";
import Preloader from "./Components/UI/Preloader/Preloader";
import Wrapper from "./Components/UI/Wrapper/Wrapper";
import getCurrentUser from "./functions/getCurrentUser";
import { updatePageDirection } from "./functions/language";
import { useAppSelector } from "./hooks/useSelector";
import "./i18next";
import { languages } from "./utils/languages";
import { Routes } from "./utils/Routes";

function App() {
  const auth = useAppSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const savedLng = localStorage.getItem("i18nextLng");
  if (!languages.find((item) => item.name === savedLng)) {
    localStorage.setItem("i18nextLng", "en");
  }
  useEffect(() => {
    dispatch(setPhsyicalSidebarOpen(setPhycicalSidebarStat()));
    updatePageDirection();

    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // redirect from get token page condition
      localStorage.setItem("token", token);
      window.location.replace("/");
    }
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      getCurrentUser(token!).then((res) => {
        dispatch(login(res));
      });
    } else {
      window.location.replace(Routes.Pull_Token);
    }
  }, []);

  return (
    <>
      <Preloader isOpen={!auth} />
      {auth && (
        <>
          <Header />
          <Wrapper className="mt-[5rem] mx-auto relative flex px-3 mb-4">
            <Sidebar>
              <SidebarContent />
            </Sidebar>
            <Card className="bg-white ms-3 border w-full p-4">
              <Switch>
                <Route />
              </Switch>
            </Card>
          </Wrapper>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
