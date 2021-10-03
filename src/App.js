import React, { useState } from 'react';
import './App.css';
import Coverpage from './components/CoverPage/Coverpage';
import Homepage from './components/homepage/Homepage';
import NavBar from './components/Navbar';
import NavbarBlack from './components/navbarBlack';
import LoginModal from './components/LoginModal';
import AutocompleteInput from './components/endpart/AutocompleteInput';
import AddressModal from './components/endpart/AddressModal';



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

          <AddressModal />

          {/* <div>
            <NavbarBlack setIsCover={setIsCover} />
          </div>

          <div>
            <Coverpage setIsCover={setIsCover} />
          </div> */}

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
