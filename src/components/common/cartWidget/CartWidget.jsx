import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';

const CartWidget = () => {
    const { cart } = useCart();

    // Contar la cantidad total de productos en el carrito
    const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <Link to="/cart" className="cart-widget">
            <FaShoppingCart size={50} />
            <span className="badge bg-secondary">{itemCount}</span>
        </Link>
    );
};

export default CartWidget;



