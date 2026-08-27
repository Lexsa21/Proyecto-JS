# LexsaGames

Tienda online de videojuegos con carrito de compras funcional, hecha con HTML, CSS y JavaScript vanilla. Sin frameworks ni dependencias más allá de Bootstrap Icons.

**Demo:** [lexsa21.github.io/Proyecto-JS](https://lexsa21.github.io/Proyecto-JS/)

## Funcionalidades

- Catálogo con filtros por categoría (Apps, PlayStation, Nintendo)
- Carrito persistente con `localStorage`: sobrevive al recargar y al cerrar el navegador
- Agregar, eliminar y vaciar productos
- Total calculado en tiempo real
- Layout responsive con CSS Grid
- Tab activo en la navegación, resuelto con pseudoelementos

## Stack

HTML5 semántico, CSS3 con Grid para el layout y JavaScript ES6+ para toda la lógica. La iconografía viene de Bootstrap Icons. No hay proceso de build ni dependencias que instalar.

## Estructura

```
Proyecto-JS/
├── index.html          # Catálogo de productos
├── carrito.html        # Carrito de compras
├── css/
│   └── main.css        # Estilos globales
├── js/
│   ├── main.js         # Lógica del catálogo y filtros
│   └── carrito.js      # Lógica del carrito
└── img/                # Imágenes de los productos
```

## Correr localmente

```bash
git clone https://github.com/Lexsa21/Proyecto-JS.git
cd Proyecto-JS
```

Abrí `index.html` en el navegador, o usá la extensión Live Server de VS Code. No hay dependencias que instalar.

## Sobre la implementación

**El carrito vive en `localStorage`.** Al agregar un producto se serializa el array con `JSON.stringify` y al cargar la página se recupera con `JSON.parse`. Es lo que permite que el carrito siga ahí después de cerrar el navegador, y que el estado se comparta entre `index.html` y `carrito.html` sin ningún backend.

**Dos páginas, dos archivos de JS.** El catálogo y el carrito están separados en `main.js` y `carrito.js` en vez de un único archivo con todo. Cada página carga solo lo que necesita.

**Sin framework, a propósito.** El renderizado del catálogo y del carrito se hace armando elementos con `createElement` y recorriendo los arrays con `forEach`. Hacerlo así primero es lo que después permite entender qué está resolviendo React por debajo.

---

Parte de mi portfolio: [lexsa21.github.io](https://lexsa21.github.io)
