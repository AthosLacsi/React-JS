
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../../../async-mocks';
import './ItemDetailContainer.css'; 

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById(itemId).then(data => {
            setProduct(data);
        });
    }, [itemId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="item-detail-container">
            <img src={`/images/${product.image}`} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>Price: ${product.price}</h3>
        </div>
    );
};

export default ItemDetailContainer;
