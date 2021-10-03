import React, { useState,useContext } from 'react';

import './App.css';
import Coverpage from './components/CoverPage/Coverpage';
import Homepage from './components/homepage/Homepage';
import NavBar from './components/Navbar';
import NavbarBlack from './components/navbarBlack';
import LoginModal from './components/LoginModal';

import {TechnicianAuthcontext} from "./store/technician_auth_context"
import App2 from './App2';




function App() {
  let {techpageload}=useContext(TechnicianAuthcontext);

  const [isCover, setIsCover] = useState(true);

  const [isLoginModal, setIsLoginModal] = useState(false);

  const checkLoginModal = () => {
    setIsLoginModal(!isLoginModal);
  }

  if(techpageload)return <App2/>
 
  return (

    <div className="appMainDiv">


      {isCover ? (
        <>
          <div>
            
            <NavbarBlack setIsCover={setIsCover} />
          </div>

          <div>
            <Coverpage setIsCover={setIsCover} />
          </div>

          {/* <LoginModal setIsCover={setIsCover} /> */}


          {/* <Temp /> */}
        </>
      ) : (
        <>
          <div>
            <NavBar setIsCover={setIsCover} />
          </div>

          <Homepage />


        </>
      )

      }
    </div>


  );
}

export default App;
