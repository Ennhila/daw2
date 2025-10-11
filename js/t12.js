const inventario = [
    { nombre: "Laptop", precio: 1500, cantidad: 4 },
    { nombre: "Telefono", precio: 500, cantidad: 10 },
    { nombre: "Teclado", precio: 30, cantidad: 20 },
    { nombre: "Monitor", precio: 200, cantidad: 5 }
];

function obtenerProductosCaros(inventario){
    const productosCaros = inventario.filter(producto => producto.precio > 500);
    const nombreProductosCaros = productosCaros.map(productos => productos.nombre);
    return nombreProductosCaros;
}

function calcularValorTotal(inventario){
    const valorTotal = inventario.map(producto => producto.precio * producto.cantidad);
    const valorTotal1 = valorTotal.reduce((precio, cantidad) => precio + cantidad, 0);
    return valorTotal1;
}

function calculValorTotalConReduce(inventario){
    const valorTotal = inventario.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
    return valorTotal;
}


function incrementarPrecio(inventario){
    const inventarioActualizado = inventario.map(producto => {
        return {
            ...producto,
            precio: (producto.precio * 1.1).toFixed(2)
        };
    });
    return inventarioActualizado;
}

function ObtenerProductosCarosConPreciosIncrementados(inventario){
    //return incrementarPrecio(obtenerProductosCaros(inventario));
    const opccpi = inventario.filter(p => p.precio >500).map(p => ({...p, precio: (p.precio * 1.1).toFixed(2)})).map(p => p.nombre);
    return opccpi;
}

console.log(obtenerProductosCaros(inventario));
console.log(calcularValorTotal(inventario));
console.log(calculValorTotalConReduce(inventario));
console.log(incrementarPrecio(inventario));
console.log(ObtenerProductosCarosConPreciosIncrementados(inventario));