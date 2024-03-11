class CarritoCompra{
    constructor(){
        this.producto = []
    }

    agregarProducto(producto) {
        this.producto.push(producto)
    }

    calcularTotal() {
        let precioTotal = 0
        this.producto.forEach( productos => {
            precioTotal += productos.precio
        });
        return precioTotal
    }
};

module.exports= CarritoCompra;