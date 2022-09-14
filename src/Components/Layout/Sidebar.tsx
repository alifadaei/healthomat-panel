import Card from "../UI/Card/Card";
import { useDispatch } from "react-redux";
import React from "react";
import { useAppSelector } from "../../hooks/useSelector";
import { closeDrawerSidebar } from "./sidebarSlice";
import Drawer from "../UI/Drawer/Drawer";

const Sidebar = ({ children }: { children: React.ReactElement }) => {
  const dispatch = useDispatch();
  const { physicalSidebarOpen, drawerSidebarOpen } = useAppSelector(
    (state) => state.sidebar
  );
  if (!physicalSidebarOpen)
    return (
      <Drawer
        isOpen={drawerSidebarOpen}
        onBackdropClick={() => dispatch(closeDrawerSidebar())}
      >
        {children}
      </Drawer>
    );
  else
    return (
      <Card className=" w-[15rem] bg-white border overflow-hidden h-fit">
        {children}
      </Card>
    );
};

export default Sidebar;
