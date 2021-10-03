// import './styles/App.module.css';
// import React from 'react';
import React from "react";

import NavBar from "./componentsTech/NavBar";
import DashBoard from "./componentsTech/DashBoard";
import Tabs from "./componentsTech/Tabs";
import StickTab from "./componentsTech/StickTab";
import Footer from "./componentsTech/Footer";

import { AuthcontextProvider } from "./store/auth_context_prof_data";

function App2() {
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
