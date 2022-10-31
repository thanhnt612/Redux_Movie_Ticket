import React from "react";
import { Outlet } from "react-router-dom";
import FooterHome from "../Components/FooterHome/FooterHome";
import HeaderHome from "../Components/HeaderHome/HeaderHome";
export default function HomeTemplates() {
  return (
    <div>
      <HeaderHome />
      <Outlet></Outlet>
      <FooterHome />
    </div>
  );
}
