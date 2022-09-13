import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Sidebar from "./Components/Layout/Sidebar";
import {
  openModalSidebar,
  setPhsyicalSidebarOpen,
  setPhycicalSidebarStat,
} from "./Components/Layout/sidebarSlice";
import SidebarContent from "./Components/SidebarContent";
import Button from "./Components/UI/Button/Button";
import Icon, { IconList } from "./Components/UI/Icon/Icon";
import Wrapper from "./Components/UI/Wrapper/Wrapper";
import { useAppSelector } from "./hooks/useSelector";

function App() {
  useEffect(() => {
    dispatch(setPhsyicalSidebarOpen(setPhycicalSidebarStat()));
  }, []);

  const dispatch = useDispatch();
  const showModalSidebarBtn = !useAppSelector(
    (state) => state.sidebar.physicalSidebarOpen
  );
  return (
    <>
      <Header />
      <main className="mt-[5rem] min-h-screen">
        <Wrapper className="mx-auto">
          {showModalSidebarBtn && (
            <Button
              className="px-3 py-2 ms-3"
              onClick={() => dispatch(openModalSidebar())}
            >
              <Icon icon={IconList.Hamburger} />
            </Button>
          )}
          <Sidebar>
            <SidebarContent />
          </Sidebar>
        </Wrapper>
      </main>
      <Footer />
    </>
  );
}

export default App;
