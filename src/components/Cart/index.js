// Write your JS code here
import Header from '../Header'

import './index.css'

const Cart = () => (
  <div>
    <Header />
    <div className="cart-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
        className="cart-image"
      />
    </div>
  </div>
)

export default Cart
