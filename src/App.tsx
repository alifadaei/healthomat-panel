import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Sidebar from "./Components/Layout/Sidebar";
import {
  setPhsyicalSidebarOpen,
  setPhycicalSidebarStat,
} from "./Components/Layout/sidebarSlice";
import SidebarContent from "./Components/SidebarContent";
import Card from "./Components/UI/Card/Card";
import Wrapper from "./Components/UI/Wrapper/Wrapper";
import { updatePageDirection } from "./functions/language";
import "./i18next";

function App() {
  useEffect(() => {
    dispatch(setPhsyicalSidebarOpen(setPhycicalSidebarStat()));
    updatePageDirection();
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      <Header />
      <Wrapper className="mt-[5rem] mx-auto relative flex px-3 mb-4">
        <Sidebar>
          <SidebarContent />
        </Sidebar>
        <Card className="bg-white ms-3 border w-full p-4">
          <p></p>
        </Card>
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
