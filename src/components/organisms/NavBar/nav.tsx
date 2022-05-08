import React from "react";
import "@fontsource/righteous";
import "@fontsource/roboto";
import MobileNavigation from "./mobileNavigation";
import Navigation from "./navigation";

const Nav = () => {

  return (
    <div>
      <MobileNavigation />
      <Navigation />
    </div>
  );
};

export default Nav;