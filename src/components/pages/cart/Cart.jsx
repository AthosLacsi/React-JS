import React from 'react';
import { useCart } from '../../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, totalAmount, clearCart } = useCart();

    if (cart.length === 0) {
        return (
            <div>
                <h2>Tu carrito está vacío</h2>
                <Link to="/">Volver a la tienda</Link>
            </div>
        );
    }

    return (
        <div>
            <h2>Carrito de Compras</h2>
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <h3>{item.name}</h3>
                    <p>Precio: ${item.price}</p>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Total: ${item.price * item.quantity}</p>
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                    <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
            ))}
            <h3>Total a Pagar: ${totalAmount}</h3>
            <button onClick={clearCart}>Vaciar Carrito</button>
            <Link to="/checkout">Ir al Checkout</Link>
        </div>
    );
};

export default Cart;





