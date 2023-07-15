import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { CartContext } from '../Global/CartContext'
function Navbar() {
  const {...cart} = useContext(CartContext);
  return (
    <nav>
        <ul className='left'>
            <li><NavLink to='/'>E Shop</NavLink></li>
        </ul>
        <ul className='right'>
            <li>
            <NavLink to='/cart'>
            <span className='shoppingCart'><i className='fas fa-cart-plus'></i></span>
            <span className='cartCount'>{cart.qty}</span>
            </NavLink>
            </li>

        </ul>

    </nav>
  )
}

export default Navbar
