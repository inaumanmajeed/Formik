import React from "react";
import { Container, NavBar, SideBar, ChildrenWrapper } from "./styles/styles";

const LayoutMainWeb = ({ children }) => {
  return (
    <Container className="main__layout__wrapper">
      <NavBar className="main__layout__nav">
        <a href="/">NavBar</a>
      </NavBar>
      <SideBar className="main__layout__sidebar">Sidebar</SideBar>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Container>
  );
};

export default LayoutMainWeb;
