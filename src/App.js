import React, { useState } from 'react';
import './App.css';
import BookProfessional from './components/CoverPage/BookProfessional';
import Coverpage from './components/CoverPage/Coverpage';
import MidPart from './components/CoverPage/MidPart';
import Homepage from './components/homepage/Homepage';
import NavBar from './components/Navbar';
import NavbarBlack from './components/navbarBlack';



function App() {
  const [isCover, setIsCover] = useState(true);


  return (

    <div className="appMainDiv">


      {isCover ? (
        <>
          <NavbarBlack />
          <Coverpage />
          <MidPart />

          <BookProfessional />




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
