import Card from "../UI/Card/Card";
import Modal from "../UI/Modal/Modal";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "./sidebarSlice";
import React from "react";

const Sidebar = ({ children }: { children: React.ReactElement }) => {
  const modalOpen = useSelector(
    (state: RootState) => state.sidebarModal.modalOpen
  );
  const dispatch = useDispatch();

  const isMobile = window.innerWidth < 1024;
  if (isMobile)
    return (
      <Modal isOpen={modalOpen} onBackdropClick={() => dispatch(closeModal())}>
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
