🏍️ E-commerce de Motocicletas
Este proyecto es una aplicación de e-commerce desarrollada en React, creada como una asignación práctica para gestionar la venta de motocicletas. La aplicación permite a los usuarios explorar un catálogo de motocicletas, ver detalles de cada producto, gestionar un carrito de compras y completar una compra.

📝 Características
Catálogo de Productos: Visualización de motocicletas con filtros y detalles.
Detalles del Producto: Información específica de cada motocicleta con un selector de cantidad y botón de agregar al carrito.
Carrito de Compras: Funcionalidades para agregar, eliminar, actualizar y visualizar los productos en el carrito.
Resumen de Compra: Página de checkout con resumen de la compra y captura de datos de usuario (nombre, email y teléfono).
Control de Stock: Limita la cantidad de productos según el stock disponible.
Notificaciones: Mensajes de éxito para compras y otras acciones.
Integración con Firebase: Para el manejo de datos en la base de datos.

🚀 Funcionalidades
Navegación: Barra de navegación (Navbar) para acceder al catálogo y ver el carrito.
Gestión de Productos:
ItemListContainer: Lista y muestra todos los productos disponibles.
ItemDetailContainer: Proporciona detalles del producto seleccionado.
Carrito de Compras:
CartContext: Contexto para gestionar el estado del carrito.
CartWidget: Ícono de carrito con la cantidad de productos añadidos.
Resumen de Compra:
Captura detalles de usuario y muestra un resumen.
Permite confirmar la compra.
Notificaciones y Control de Stock: Notificaciones de éxito al completar una compra, y control de stock para evitar compras excesivas.

🔧 Instalación y Configuración
Clonar el Repositorio:

bash
Copiar código
git clone <URL_DEL_REPOSITORIO>
cd REACTCODER/react
Instalar Dependencias:

bash
Copiar código
npm install
Configurar Firebase:

Asegúrate de tener un archivo configFirebase.js en src/ con la configuración de tu proyecto de Firebase.

Iniciar el Proyecto:

bash
Copiar código
npm run dev
Visitar la Aplicación: Abre http://localhost:3000 en tu navegador.

📦 Tecnologías Utilizadas
React: Biblioteca principal para la interfaz de usuario.
Vite: Herramienta para el desarrollo de la aplicación.
Firebase: Base de datos en tiempo real para el almacenamiento de datos.
CSS: Para la personalización y el estilo de la interfaz.

📄 Licencia
Este proyecto es solo para fines educativos y de evaluación, y no representa una tienda real de motocicletas.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
