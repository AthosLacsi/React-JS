// src/App.jsx
import React from 'react';
import NavBar from './components/layouts/navbar/Navbar';
import ItemListContainer from './components/pages/itemListContainer/itemListContainer';


function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a Puchigurumis!" />
    </div>
  );
}

export default App;



