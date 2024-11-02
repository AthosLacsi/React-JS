import React, { useState } from 'react';
import { useCart } from '../../../context/CartContext';

const Checkout = () => {
    const { cart, totalAmount, clearCart } = useCart();
    const [buyerInfo, setBuyerInfo] = useState({ name: '', email: '', phone: '' });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBuyerInfo({ ...buyerInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías enviar los datos a un servidor o base de datos
        console.log('Compra realizada:', { buyerInfo, cart });
        clearCart(); // Limpiar el carrito después de la compra
        setMessage('Compra realizada con éxito');
    };

    return (
        <div>
            <h2>Resumen de Compra</h2>
            {cart.map(item => (
                <div key={item.id}>
                    <p>{item.name} - Cantidad: {item.quantity} - Total: ${item.price * item.quantity}</p>
                </div>
            ))}
            <h3>Total: ${totalAmount}</h3>
            <h2>Datos del Comprador</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Nombre" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Teléfono" onChange={handleChange} required />
                <button type="submit">Comprar</button>
            </form>
            <button onClick={clearCart}>Cancelar Compra</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Checkout;





