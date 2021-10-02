import { ProductDetailProvider } from './contexts/ProductDetailContext'
import { Products } from './components/Products'
//import {ProductDetails} from './components/ProductDetails'

function App() {
  return (
    <ProductDetailProvider>
      <div>
        <Products />
        {/* <ProductDetails /> */}
      </div>
    </ProductDetailProvider>
  );
}

export default App;
