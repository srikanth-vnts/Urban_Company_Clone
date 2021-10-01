import React, { useState } from 'react';
import './App.css';
import BookProfessional from './components/CoverPage/BookProfessional';
import Coverpage from './components/CoverPage/Coverpage';
import MidPart from './components/CoverPage/MidPart';
import Homepage from './components/homepage/Homepage';
import NavBar from './components/Navbar';
import NavbarBlack from './components/navbarBlack';
import Footer from './components/Footer/Footer';



function App() {
  const [isCover, setIsCover] = useState(true);


  return (

    <div className="appMainDiv">


      {isCover ? (
        <>
          <NavbarBlack />
          <Coverpage />

        </>
      ) : (
        <>
          <NavBar />

          <Homepage />

        </>
      )

      }
      <Footer />
    </div>


  );
}

export default App;