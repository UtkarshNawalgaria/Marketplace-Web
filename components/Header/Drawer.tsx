import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { DrawerContainer } from "./styles";

interface DrawerProps {
  openDrawer: boolean;
  setOpenDrawer: () => void
}

function Drawer(props: DrawerProps) {
  return (
    <>
      {props.openDrawer ? (
        <DrawerContainer openDrawer={props.openDrawer}>
          <div onClick={props.setOpenDrawer}>
            <AiOutlineClose className="close-drawer" />
          </div>
        </DrawerContainer>
      ) : null}
    </>
  );
}

export default Drawer;
