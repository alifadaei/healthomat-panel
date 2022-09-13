import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";
import { useDispatch } from "react-redux";
import React from "react";
import { useAppSelector } from "../../hooks/useSelector";
import { closeModalSidebar } from "./sidebarSlice";

const Sidebar = ({ children }: { children: React.ReactElement }) => {
  const dispatch = useDispatch();
  const { physicalSidebarOpen, modalSidebarOpen } = useAppSelector(
    (state) => state.sidebar
  );
  if (!physicalSidebarOpen)
    return (
      <Modal
        isOpen={modalSidebarOpen}
        onBackdropClick={() => dispatch(closeModalSidebar())}
      >
        {children}
      </Modal>
    );
  else
    return (
      <Card className="ms-3 w-[11rem] bg-white border overflow-hidden">
        {children}
      </Card>
    );
};

export default Sidebar;
