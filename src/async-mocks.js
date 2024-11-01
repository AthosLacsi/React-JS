
// const products = [
//     { id: '1', name: 'Moto Deportiva 1', category: 'sport', image: '/images/sport1.jpg', description: 'Moto deportiva rápida', price: 10000 },
//     { id: '2', name: 'Moto Deportiva 2', category: 'sport', image: '/images/sport2.jpg', description: 'Moto deportiva ágil', price: 12000 },
//     { id: '3', name: 'Moto Touring 1', category: 'touring', image: '/images/touring1.jpg', description: 'Moto touring cómoda', price: 15000 },
//     { id: '4', name: 'Moto Touring 2', category: 'touring', image: '/images/touring2.jpg', description: 'Moto touring potente', price: 17000 },
//     { id: '5', name: 'Moto Cruiser 1', category: 'cruiser', image: '/images/cruiser1.jpg', description: 'Moto cruiser elegante', price: 14000 },
//     { id: '6', name: 'Moto Cruiser 2', category: 'cruiser', image: '/images/cruiser2.jpg', description: 'Moto cruiser clásica', price: 16000 },
// ];

// export const getProducts = (categoryId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             if (categoryId) {
//                 const filteredProducts = products.filter(product => product.category === categoryId);
//                 resolve(filteredProducts);
//             } else {
//                 resolve(products);
//             }
//         }, 1000);
//     });
// };

// export const getProductById = (itemId) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             const product = products.find(product => product.id === itemId);
//             resolve(product);
//         }, 1000);
//     });
// };

