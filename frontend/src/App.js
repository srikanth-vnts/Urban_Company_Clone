import React, { useState, useContext } from "react";

import "./App.css";
import Coverpage from "./components/CoverPage/Coverpage";
import Homepage from "./components/homepage/Homepage";
import NavBar from "./components/NavBar";
import NavbarBlack from "./components/navbarBlack";
import LoginModal from "./components/LoginModal";

import { Route, Switch } from "react-router-dom";

import { TechnicianAuthcontext } from "./store/technician_auth_context";
import App2 from "./App2";

function App() {
  let { techpageload } = useContext(TechnicianAuthcontext);

  const [isCover, setIsCover] = useState(true);

  const [isLoginModal, setIsLoginModal] = useState(false);

  const checkLoginModal = () => {
    setIsLoginModal(!isLoginModal);
  };

  // if (techpageload) return <App2 />;
  /*let Coverpage = () => {
    return (
      <div className="appMainDiv">
        <NavbarBlack setIsCover={setIsCover} />
        <Coverpage setIsCover={setIsCover} />
      </div>
    );
  };
  let homepagg2 = () => {
    return (
      <div className="appMainDiv">
        <NavBar setIsCover={setIsCover} />
        <Homepage />
      </div>
    );
  };*/
  return (
    <>
      <NavBar setIsCover={setIsCover} />
    <Switch>
      <Route exact path="/" component={Coverpage} />
      <Route exact  path="/homepage" component={Homepage} />
      <Route path="/app2" component={App2} />
    </Switch>
    </>
  );
}

export default App;
