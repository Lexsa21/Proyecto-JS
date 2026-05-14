// PRODUCTOS
const productos = [
    // Aplicaciones mobil
    {
        id: "app-01",
        titulo: "Harry Potter",
        imagen: "./img/hp.jpg",
        categoria: {
            nombre: "Apps",
            id: "apps"
        },
        precio: 4000
    },
    {
        id: "app-02",
        titulo: "Padre de Familia",
        imagen: "./img/PF.jpg",
        categoria: {
            nombre: "Apps",
            id: "apps"
        },
        precio: 2000
    },
    {
        id: "app-03",
        titulo: "Snoopy",
        imagen: "./img/snoopy.jpg",
        categoria: {
            nombre: "Apss",
            id: "apps"
        },
        precio: 1500
    },
    {
        id: "app-04",
        titulo: "Panda Pop",
        imagen: "./img/pandapop.jpg",
        categoria: {
            nombre: "Apps",
            id: "apps"
        },
        precio: 1000
    },
    {
        id: "app-05",
        titulo: "Tortugas Ninja",
        imagen: "./img/tortugas2.jpg",
        categoria: {
            nombre: "Apps",
            id: "apps"
        },
        precio: 2500
    },
    // Play Station
    {
        id: "ps-01",
        titulo: "Camiseta 01",
        imagen: "./img/camisetas/01.jpg",
        categoria: {
            nombre: "PlayStations",
            id: "playstation"
        },
        precio: 1000
    },
    {
        id: "ps-02",
        titulo: "Camiseta 02",
        imagen: "./img/camisetas/02.jpg",
        categoria: {
            nombre: "PlayStations",
            id: "playstation"
        },
        precio: 1000
    },
    {
        id: "ps-03",
        titulo: "Camiseta 03",
        imagen: "./img/camisetas/03.jpg",
        categoria: {
            nombre: "PlayStation",
            id: "playstation"
        },
        precio: 1000
    },
    {
        id: "ps-04",
        titulo: "Camiseta 04",
        imagen: "./img/camisetas/04.jpg",
        categoria: {
            nombre: "PlayStation",
            id: "playstation"
        },
        precio: 1000
    },
    {
        id: "ps-05",
        titulo: "Camiseta 05",
        imagen: "./img/camisetas/05.jpg",
        categoria: {
            nombre: "PlayStation",
            id: "playstation"
        },
        precio: 1000
    },
    {
        id: "ps-06",
        titulo: "Camiseta 06",
        imagen: "./img/camisetas/06.jpg",
        categoria: {
            nombre: "PlayStation",
            id: "playstation"
        },
        precio: 1000
    },
    {
        id: "ps-07",
        titulo: "Camiseta 07",
        imagen: "./img/camisetas/07.jpg",
        categoria: {
            nombre: "PlayStation",
            id: "playstation"
        },
        precio: 1000
    },
    {
        id: "ps-08",
        titulo: "Camiseta 08",
        imagen: "./img/camisetas/08.jpg",
        categoria: {
            nombre: "PlayStation",
            id: "playstation"
        },
        precio: 1000
    },
    // Nintendo
    {
        id: "pantalon-01",
        titulo: "Pantalón 01",
        imagen: "./img/pantalones/01.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-02",
        titulo: "Pantalón 02",
        imagen: "./img/pantalones/02.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-03",
        titulo: "Pantalón 03",
        imagen: "./img/pantalones/03.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-04",
        titulo: "Pantalón 04",
        imagen: "./img/pantalones/04.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    },
    {
        id: "pantalon-05",
        titulo: "Pantalón 05",
        imagen: "./img/pantalones/05.jpg",
        categoria: {
            nombre: "Pantalones",
            id: "pantalones"
        },
        precio: 1000
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector(".titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito")


function cargarProductos (productosElegidos){

    contenedorProductos.innerHTML= "";

    productosElegidos.forEach(producto=>{

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img src="${producto.imagen}" alt="" class="producto-imagen"> 
            <div class="producto-detalles">
                <h4 class="producto-titulo">${producto.titulo}</h4>
                <p class="producto-precio">${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;
        contenedorProductos.append(div);
    })
    
    actualizarBotonesAgregar();
};

cargarProductos(productos);

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", (e)=>{

        botonesCategorias.forEach(boton => boton.classList.remove("active"))
        e.currentTarget.classList.add("active")

        if(e.currentTarget.id != "todos"){

            const productoTitulo = productos.find(producto => producto.categoria.id === e.currentTarget.id)
            tituloPrincipal.innerHTML= productoTitulo.categoria.nombre

            const categoriaElegida = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(categoriaElegida)
        }else{
            tituloPrincipal.innerHTML="Todos los productos"
            cargarProductos(productos)
        }
    })
});

function actualizarBotonesAgregar (){
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if(productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
}else{
    productosEnCarrito = [];
}
/*
productosEnCarrito = [];*/

function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton)

    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado)
    }
    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc,producto)=> acc + producto.cantidad, 0)
    numerito.innerText= nuevoNumerito;
}