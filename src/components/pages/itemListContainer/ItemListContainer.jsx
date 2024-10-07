import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom'; // Asegúrate de importar Link
import { getProducts } from '../../../async-mocks';
import './itemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts(categoryId).then(data => {
            setProducts(data);
        });
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
