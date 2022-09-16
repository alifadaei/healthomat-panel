import { useEffect, useState } from "react";
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
import Preloader from "./Components/UI/Preloader/Preloader";
import Wrapper from "./Components/UI/Wrapper/Wrapper";
import { updatePageDirection } from "./functions/language";
import "./i18next";
import { languages } from "./utils/languages";

function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    dispatch(setPhsyicalSidebarOpen(setPhycicalSidebarStat()));
    updatePageDirection();
    setLoaded(true);
    const savedLng = localStorage.getItem("i18nextLng");
    if (!languages.find((item) => item.name === savedLng)) {
      localStorage.setItem("i18nextLng", "en");
    }
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      {loaded && (
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
      )}
      <Preloader isOpen={!loaded} />
    </>
  );
}

export default App;
