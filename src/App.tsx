import Footer from "./Components/Layout/Footer";
import Header from "./Components/Layout/Header";
import Sidebar from "./Components/Layout/Sidebar";
import SidebarContent from "./Components/SidebarContent";

function App() {
  return (
    <>
      <Header />
      <main className="mt-[5rem] min-h-screen">
        <Sidebar>
          <SidebarContent />
        </Sidebar>
      </main>
      <Footer />
    </>
  );
}

export default App;
