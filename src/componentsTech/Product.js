// import { ProductDetailProvider } from './contexts/ProductDetailContext'
import { ProductDetailProvider } from '../contexts/ProductDetailContext'

// import { Products } from './components/Products'
import { Products } from '../Product_components/Products'

//import {ProductDetails} from './components/ProductDetails'

function Product(props) {
  return (
    <ProductDetailProvider>
      <div>
        <Products nextPage={props.nextPage} />
        {/* <ProductDetails /> */}
      </div>
    </ProductDetailProvider>
  );
}

export default Product;
