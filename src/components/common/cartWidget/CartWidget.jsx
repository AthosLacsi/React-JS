
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CartWidget = ({ itemCount }) => {
    return (
        <Link to="/cart" className="cart-widget">
            <FaShoppingCart size={50} />
            <span className="badge bg-secondary">{itemCount}</span> {}
        </Link>
    );
};

export default CartWidget;
