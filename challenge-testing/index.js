class CarritoCompra{
    constructor(){
        this.producto = []
    }

    agregarProducto(producto) {
        this.producto.push(producto)
    }

    calcularTotal() {
        let precioTotal = 0
        for(const producto of this.producto){
            precioTotal += producto.precio * producto. cantidad 
        }
        return precioTotal
    }
    aplicarDescuento(porcentaje){
        const subTotal = this.calcularTotal()
        const descuento = this.calcularTotal() * (porcentaje/100)

        return subTotal - descuento

    }
};

module.exports= CarritoCompra;