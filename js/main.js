// PRODUCTOS
const productos = [
    // Aplicaciones móvil
    {
        id: "app-01",
        titulo: "Harry Potter: Hogwarts Mystery",
        imagen: "./img/hp.jpg",
        alt: "Portada del juego Harry Potter: Hogwarts Mystery",
        categoria: { nombre: "Apps", id: "apps" },
        precio: 4000
    },
    {
        id: "app-02",
        titulo: "Family Guy: Another Freakin' Mobile Game",
        imagen: "./img/PF.jpg",
        alt: "Portada del juego Family Guy para móvil",
        categoria: { nombre: "Apps", id: "apps" },
        precio: 2000
    },
    {
        id: "app-03",
        titulo: "Snoopy's Grand Adventure",
        imagen: "./img/snoopy.jpg",
        alt: "Portada del juego Snoopy's Grand Adventure",
        categoria: { nombre: "Apps", id: "apps" },
        precio: 1500
    },
    {
        id: "app-04",
        titulo: "Panda Pop",
        imagen: "./img/pandapop.jpg",
        alt: "Portada del juego Panda Pop",
        categoria: { nombre: "Apps", id: "apps" },
        precio: 1000
    },
    {
        id: "app-05",
        titulo: "Teenage Mutant Ninja Turtles: Legends",
        imagen: "./img/tortugas2.jpg",
        alt: "Portada del juego Tortugas Ninja: Legends para móvil",
        categoria: { nombre: "Apps", id: "apps" },
        precio: 2500
    },
    // PlayStation
    {
        id: "ps-01",
        titulo: "Harry Potter y la Piedra Filosofal",
        imagen: "./img/hp.jpg",
        alt: "Portada del juego Harry Potter y la Piedra Filosofal para PlayStation",
        categoria: { nombre: "PlayStation", id: "playstation" },
        precio: 3500
    },
    {
        id: "ps-02",
        titulo: "Family Guy: Back to the Multiverse",
        imagen: "./img/PF.jpg",
        alt: "Portada del juego Family Guy: Back to the Multiverse para PlayStation",
        categoria: { nombre: "PlayStation", id: "playstation" },
        precio: 4500
    },
    {
        id: "ps-03",
        titulo: "The Peanuts Movie: Snoopy's Grand Adventure",
        imagen: "./img/snoopy.jpg",
        alt: "Portada del juego Snoopy's Grand Adventure para PlayStation",
        categoria: { nombre: "PlayStation", id: "playstation" },
        precio: 3000
    },
    {
        id: "ps-04",
        titulo: "Teenage Mutant Ninja Turtles: Mutants in Manhattan",
        imagen: "./img/tortugas2.jpg",
        alt: "Portada del juego Tortugas Ninja: Mutants in Manhattan para PlayStation",
        categoria: { nombre: "PlayStation", id: "playstation" },
        precio: 5000
    },
    // Nintendo
    {
        id: "nintendo-01",
        titulo: "Harry Potter y las Reliquias de la Muerte",
        imagen: "./img/hp.jpg",
        alt: "Portada del juego Harry Potter y las Reliquias de la Muerte para Nintendo",
        categoria: { nombre: "Nintendo", id: "nintendo" },
        precio: 3200
    },
    {
        id: "nintendo-02",
        titulo: "Panda Pop Adventure",
        imagen: "./img/pandapop.jpg",
        alt: "Portada del juego Panda Pop Adventure para Nintendo",
        categoria: { nombre: "Nintendo", id: "nintendo" },
        precio: 2800
    },
    {
        id: "nintendo-03",
        titulo: "Teenage Mutant Ninja Turtles: Rescue-Palooza",
        imagen: "./img/tortugas2.jpg",
        alt: "Portada del juego Tortugas Ninja: Rescue-Palooza para Nintendo",
        categoria: { nombre: "Nintendo", id: "nintendo" },
        precio: 4200
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector(".titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function formatearPrecio(precio) {
    return "$" + precio.toLocaleString("es-AR");
}

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.alt}" class="producto-imagen">
            <div class="producto-detalles">
                <h4 class="producto-titulo">${producto.titulo}</h4>
                <p class="producto-precio">${formatearPrecio(producto.precio)}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    });

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id !== "todos") {
            const categoriaId = e.currentTarget.id;
            const productoCategoria = productos.find(p => p.categoria.id === categoriaId);
            tituloPrincipal.innerHTML = productoCategoria.categoria.nombre;
            const categoriaFiltrada = productos.filter(p => p.categoria.id === categoriaId);
            cargarProductos(categoriaFiltrada);
        } else {
            tituloPrincipal.innerHTML = "Todos los productos";
            cargarProductos(productos);
        }
    });
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;
const productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(p => p.id === idBoton);

    if (productosEnCarrito.some(p => p.id === idBoton)) {
        const index = productosEnCarrito.findIndex(p => p.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    const nuevoNumerito = productosEnCarrito.reduce((acc, p) => acc + p.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}
