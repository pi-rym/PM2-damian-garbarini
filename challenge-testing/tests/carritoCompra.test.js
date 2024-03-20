const CarritoCompra = require('../index')

describe("Funcionalidad de la class CarritoCompra",  ()=>{

    let carritoCompra
    beforeEach(()=>{
        carritoCompra = new CarritoCompra
    });

    describe("Constructor de la clase CarritoCompra", ()=>{
        it("carritoCompra deberia ser una instancia de la clase Carritocompra", ()=>{
            expect(carritoCompra instanceof CarritoCompra).toBe(true)
        })

        it('El constructor debe iniciar con un array vacio', ()=>{
            expect(carritoCompra.producto).toEqual([]);
        })
    })


    describe("Metodos de la clase CarritoCompras", ()=>{
        
        const producto = {
            nombre : "Teclado mecaninco",
            precio : 30,
            cantidad: 3
        };
        const producto2 = {
            nombre : "Teclado de membrana",
            precio : 20,
            cantidad: 2
        };
    

        it('Deberia tener un metodo agregarProducto', ()=>{
            expect(typeof carritoCompra.agregarProducto).toBe("function");
        })
        it('agregarProducto debe Recir un objeto representando un producto y lo agrega al carrito', ()=>{
            carritoCompra.agregarProducto(producto)
            expect(carritoCompra.producto[0]).toEqual(producto); 
        })


        it('Deberia tener un metodo calcularTotal', ()=>{
            expect(typeof carritoCompra.calcularTotal).toBe("function");
        })

        it('calcularTotal debe Calcular el total de la compra sumando los precios de todos los productos en el carrito.', ()=>{
            carritoCompra.agregarProducto(producto)
            carritoCompra.agregarProducto(producto2)
            
            const totalEsperado = producto.precio * producto.cantidad + producto2.precio * producto2.cantidad
            const total = carritoCompra.calcularTotal()
            
            expect(total).toBe(totalEsperado);
        })


        it('Deberia tener un metodo aplicarDescuento', ()=>{
            expect(typeof carritoCompra.aplicarDescuento).toBe("function");
        })

        
        it('aplicarDescuento debe aplicar un descuento al total de la compra según el porcentaje especificado', ()=>{
            carritoCompra.agregarProducto(producto)
            carritoCompra.agregarProducto(producto2)
            
            const subTotal = producto.precio * producto.cantidad + producto2.precio * producto2.cantidad
            
            const descuento = 15

            const totalEsperado = subTotal - (subTotal* (descuento/100))

            const total = carritoCompra.aplicarDescuento(descuento)

            expect(totalEsperado).toBe(total );
        })


    });
});