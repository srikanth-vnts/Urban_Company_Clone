import React, { useState } from 'react';
import './App.css';
import BookProfessional from './components/CoverPage/BookProfessional';
import Coverpage from './components/CoverPage/Coverpage';
import MidPart from './components/CoverPage/MidPart';
import Homepage from './components/homepage/Homepage';
import NavBar from './components/Navbar';
import NavbarBlack from './components/navbarBlack';
import Footer from './components/Footer/Footer';
import Temp from './components/Temp';
import Location from './components/Location';
import LoginModal from './components/LoginModal';



function App() {
  const [isCover, setIsCover] = useState(true);

  const [isLoginModal, setIsLoginModal] = useState(false);

  const checkLoginModal = () => {
    setIsLoginModal(!isLoginModal);





  }


  return (

    <div className="appMainDiv">


      {isCover ? (
        <>
          <div>
            <NavbarBlack />

          </div>
          <div>
            <Coverpage />

          </div>

          <LoginModal />


          {/* <Temp /> */}
        </>
      ) : (
        <>
          <NavBar />

          <Homepage />


        </>
      )

      }
    </div>


  );
}

export default App;
