import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../../../configFirebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import './itemlistcontainer.css';

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsCollection = collection(db, 'products');
            const q = categoryId 
                ? query(productsCollection, where('category', '==', categoryId)) 
                : productsCollection;
            const querySnapshot = await getDocs(q);
            const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(productsData);
        };
        fetchProducts();
    }, [categoryId]);

    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} />
                        <h3>{product.name}</h3>
                        <Link to={`/item/${product.id}`} className="btn btn-primary">Ver Detalle</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemListContainer;



