import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Navbar = () => {
  const {cartItems} = useCart()
  return (
    
      <>
      <div className="navsection">
            <div className="tite p-2">
                <h2>Z-mart</h2>
            </div>
            <div className="search">
                <input type="text" placeholder='search...' />
            </div>
            <div className="user">
                <div className="user-detail">SignIn/SignUp</div>
                
            </div>
          <Link to='/cart'>
          <div className="cart">Cart
            <span>
                {cartItems.length}
            </span>
          </div>
          </Link>
      </div>
      <div className="submenu">
        <ul>
          <Link to="/mobile"><li>Mobiles</li></Link>
          <Link to='/watch'><li>Watches</li></Link>
          <Link to='/ac'><li>AC</li></Link>
          <Link to='/books'><li>Books</li></Link>
          <Link to='/computer'><li>Computers</li></Link>
          <Link to='/fridge'><li>Fridges</li></Link>
          <Link to="/kitchen"><li>Kitchen</li></Link>
          <Link to='/furniture'><li>Furniture</li></Link>
          <Link to='/tv'><li>Tv's</li></Link>
          <Link to='/men'><li>Men wear</li></Link>
          <Link to='/women'><li>Women wear</li></Link>
        </ul>
      </div>

      </>
   
  )
}

export default Navbar
