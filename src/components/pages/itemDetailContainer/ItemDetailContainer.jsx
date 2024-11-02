import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../../configFirebase';
import { doc, getDoc } from 'firebase/firestore';
import { useCart } from '../../../context/CartContext'; // Asegúrate de importar useCart
import './itemdetailcontainer.css';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1); // Cantidad inicial
    const { addToCart } = useCart(); // Obtener la función para agregar al carrito

    useEffect(() => {
        const fetchProduct = async () => {
            const docRef = doc(db, 'products', itemId);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setProduct({ id: docSnap.id, ...docSnap.data() });
            } else {
                console.log("No such document!");
            }
        };
        fetchProduct();
    }, [itemId]);

    const handleAddToCart = () => {
        if (product && quantity <= product.stock) { // Verificar stock
            addToCart({ ...product, quantity });
            alert('Producto agregado al carrito');
        } else {
            alert('Cantidad excede el stock disponible');
        }
    };

    const handleIncrement = () => {
        if (quantity < product.stock) setQuantity(quantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="item-detail-container">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>Price: ${product.price}</h3>
            <p>Stock: {product.stock}</p> {/* Mostrar stock */}
            <div>
                
                

                <button onClick={handleDecrement}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrement}>+</button>
            </div>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
};

export default ItemDetailContainer;




