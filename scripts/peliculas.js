const productos = [
    {
     id: 1,
     nombre: "LIGHTYEAR",
     img: "../img/buzz.jpg",
     price: 1000,
    },
    {
        id: 2,
        nombre: "EL TELEFONO NEGRO",
        img: "../img/telefnegro.jpg",
        price: 1300,
    },
    {
        id: 3,
        nombre: "EL TELEFONO NEGRO",
        img: "../img/minions.jpg",
        price: 1500,
    },
    {
        id: 4,
        nombre: "EL TELEFONO NEGRO",
        img: "../img/telefnegro.jpg",
        price: 1300,
    },
    {
        id: 5,
        nombre: "EL TELEFONO NEGRO",
        img: "../img/telefnegro.jpg",
        price: 1300,
    },
];




const ul = document.querySelector(".shop-items")
const AddCart = () =>{
    for (const producto of productos){
        const div = document.createElement("div")
        div.innerHTML = `<img src="${producto.img}">
        <h2 onClick=comprar(${producto.id})>+</h2>`
        ul.append(div)
    }
}


const comprar = (id) =>{
    
    const coincidencia = productos.find((elemento) => elemento.id === id)
    const selector = document.querySelector(".cart-items")
        const div = document.createElement(`div`)
        div.className = `remove`
        div.innerHTML = `<img src="${coincidencia.img}">
        <h2>${coincidencia.nombre}</h2>
        <p>$${coincidencia.price}</p>
        <button onClick=quitar()>Quitar</button>`
        selector.append(div)

    }
function quitar (producto){
    const selector = document.querySelector(".remove")
    selector.remove();
}


AddCart();