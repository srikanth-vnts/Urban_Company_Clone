import './App.css';
import Homepage from './components/homepage/Homepage';
import NavBar from './components/Navbar';

function App() {
  return (

    <div className="appMainDiv">
      {/* <h1>Testing App.js</h1> */}

      <NavBar />

      <Homepage />
      {/* <HomepageServiceBox /> */}

    </div>


  );
}

export default App;
