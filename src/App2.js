// import './styles/App.module.css';
// import React from 'react';
import React from "react";

import NavBar from "./components/NavBar";
import DashBoard from "./components/DashBoard";
import Tabs from "./components/Tabs";
import StickTab from "./components/StickTab";
import Footer from "./components/Footer";

import {
  AuthcontextProvider,
} from "./store/auth_context_prof_data";


function  App2() {

  return (
    <AuthcontextProvider>
      <NavBar />
      <DashBoard />
      <Tabs />
      <StickTab />
      <Footer />
    </AuthcontextProvider>
  );
}

export default App2;
