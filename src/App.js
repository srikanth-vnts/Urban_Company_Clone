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



function App() {
  const [isCover, setIsCover] = useState(false);


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
          <Footer />


          {/* <Temp /> */}
        </>
      ) : (
        <>
          <NavBar />

          <Homepage />
          {/* <Footer /> */}

        </>
      )

      }
    </div>


  );
}

export default App;
