import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from "../../configFirebase";
import { doc, getDoc } from 'firebase/firestore';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);

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

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="item-detail-container">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <h3>Price: ${product.price}</h3>
        </div>
    );
};

export default ItemDetailContainer;

