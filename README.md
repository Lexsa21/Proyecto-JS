# 🎮 LexsaGames

Tienda online de videojuegos con carrito de compras funcional, construida con HTML, CSS y JavaScript vanilla — sin frameworks ni dependencias externas más allá de Bootstrap Icons.


## Funcionalidades

- Catálogo de juegos con filtros por categoría (Apps, PlayStation, Nintendo)
- Carrito de compras persistente con `localStorage`
- Agregar, eliminar y vaciar productos del carrito
- Cálculo del total en tiempo real
- Diseño responsive con CSS Grid
- Navegación con tab activo y efecto visual con pseudoelementos CSS

## Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura de páginas |
| CSS3 / CSS Grid | Layout y diseño responsive |
| JavaScript ES6+ | Lógica de negocio, DOM, localStorage |
| Bootstrap Icons | Iconografía |

## Estructura del proyecto

```
LexsaGames/
├── index.html          # Página principal — catálogo de productos
├── carrito.html        # Página del carrito de compras
├── css/
│   └── main.css        # Estilos globales
├── js/
│   ├── main.js         # Lógica del catálogo y filtros
│   └── carrito.js      # Lógica del carrito
└── img/                # Imágenes de los productos
```

## Cómo correrlo localmente

```bash
git clone https://github.com/tu-usuario/LexsaGames.git
cd LexsaGames
# Abrir index.html en el navegador, o usar Live Server en VS Code
```

No requiere instalación de dependencias.

## Lo que aprendí / apliqué

- Manipulación del DOM con `querySelector`, `createElement`, `forEach`
- Persistencia de datos en el cliente con `localStorage` y `JSON.parse/stringify`
- Filtrado de arrays con `.filter()`, `.find()`, `.findIndex()`
- Diseño de UI con CSS Grid y posicionamiento relativo/absoluto
- Separación de responsabilidades entre archivos JS

## Autor

Tu nombre — [LinkedIn](https://linkedin.com) · [GitHub](https://github.com)

---

*Proyecto desarrollado como práctica de desarrollo frontend con JavaScript vanilla.*
