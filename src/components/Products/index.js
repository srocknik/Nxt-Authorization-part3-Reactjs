// Write your JS code here
import Header from '../Header'
import './index.css'

const Products = () => (
  <div>
    <Header />
    <div className="product-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png "
        alt="products"
        className="product-image"
      />
    </div>
  </div>
)

export default Products
