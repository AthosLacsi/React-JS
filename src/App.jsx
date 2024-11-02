import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layouts/navbar/Navbar';
import ItemDetailContainer from './components/pages/itemdetailcontainer/ItemDetailContainer';
import ItemListContainer from './components/pages/itemlistcontainer/ItemListContainer';
import Cart from './components/pages/cart/Cart'; // Importar Cart
import Checkout from './components/pages/checkout/Checkout'; // Importar Checkout
// import CartWidget from './components/common/cartWidget/CartWidget';
import CartProvider from './context/CartContext';


function App() {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="¡Bienvenidos a A Fondo Motores!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          {/* <Route path="/cart" element={<CartWidget />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;




