import React from 'react';
import { ReacComponent as ShoppingIcon } from '../../assets/crown.svg.svg';

import './cart-icon.style.scss';

const CartIcon = () => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count' >0</span>
    </div>
);

export default CartIcon;