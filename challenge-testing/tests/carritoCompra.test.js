const CarritoCompra = require('../index')
/* 
constructor(): Inicializa el carrito como un array vacío.

agregarProducto(producto): Recibe un objeto representando un producto y lo agrega al carrito.

calcularTotal(): Calcula el total de la compra sumando los precios de todos los productos en el carrito.

aplicarDescuento(porcentaje): Aplica un descuento al total de la compra según el porcentaje especificado. 

*/
let carritoCompra
describe("Funcionalidad de la class CarritoCompra",  ()=>{
    beforeEach(()=>{
        carritoCompra = new CarritoCompra
    });

    it('El constructor debe iniciar con un array vacio', ()=>{
        expect(carritoCompra.producto).toEqual([]);
    })

    it('agregarProducto debe Recir un objeto representando un producto y lo agrega al carrito', ()=>{
        const producto = {
            nombre : "teclado",
            precio : 30,
            cantidad: 3
        };
        carritoCompra.agregarProducto(producto)
        expect(carritoCompra.producto[0]).toEqual(producto); 
    })

    it('calcularTotal debe Calcular el total de la compra sumando los precios de todos los productos en el carrito.', ()=>{
        const productos = [
            {nombre : "teclado", precio : 30, cantidad: 1},
            {nombre : "pantalla", precio : 20, cantidad: 1}
        ]

        productos.forEach( producto =>  carritoCompra.agregarProducto(producto));
        expect(carritoCompra.calcularTotal()).toBe(50);
    })


/*     it('', ()=>{
        expect(carritoCompra.producto).toEqual([]);
    })  */
})