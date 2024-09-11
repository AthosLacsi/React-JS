// src/components/pages/itemListContainer/ItemListContainer.jsx
import React from 'react';
import './itemListContainer.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
        </div>
    );
};

export default ItemListContainer;