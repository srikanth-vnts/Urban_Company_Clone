
import { Products } from './components/Products'
import { Route, Switch } from "react-router-dom"
// import { Services } from './components/Services.jsx'
// import { Home } from './components/Home.jsx'
import Cart from './components/Cart.jsx'

//import {ProductDetails} from './components/ProductDetails'

function App() {
  return (
    
      <div>
        <Switch>
             {/* <Route path="/" exact>
               <Home />
             </Route>
             <Route path="/services" exact>
               <Services/>
             </Route> */}
             <Route path="/products">
               <Products />
        </Route>
        <Route path="/cart">
               <Cart />
             </Route>
        <Route>
          <div style={{display:"flex",justifyContent: "center",alignItems: "center"}}>
            <img style={{width:"80%"}} src="https://cdn.dribbble.com/users/1078347/screenshots/3066592/nointernetconnection_emptystate_2.gif" alt="404 not found" />
          </div>
        </Route>
        
       </Switch>   
      </div>
  );
}

export default App;
