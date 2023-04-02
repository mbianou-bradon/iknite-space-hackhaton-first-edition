import React from "react";
import UpperNavbar from "./UpperNavbar";
import LowerNavbar from "./LowerNavBar";

export default function Navbar() {
  return (
    <div className="h-[10rem] px-20 py-5 bg-red600 mb-10">
      <UpperNavbar />
      <LowerNavbar />
    </div>
  );
}
