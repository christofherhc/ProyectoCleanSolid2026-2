(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            console.log('Guardando en base de datos', product );
        }
    
        notifyClients() {
            console.log('Enviando correo a los clientes');
        }
    
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    
    }

    class CartBloc {
        //todo lo relacionado con la logica del carrito de compras
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }
    
    class MailerService {
        notifyClients(product: Product): void {
            console.log('Enviando correo a los clientes por:', product.name);
        }
    }

    class ProductService {
        getProduct(id: number): Product {
            console.log('Obteniendo producto con id:', id);
            return { id, name: 'OLED Tv' };
        }

        saveProduct(product: Product): void {
            console.log('Guardando en base de datos', product);
        }
    }

    const productBloc = new ProductBloc();
    const cartBloc = new CartBloc();
    const mailerService = new MailerService();
    const productService = new ProductService();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    mailerService.notifyClients({ id: 10, name: 'OLED TV' });
    cartBloc.onAddToCart(10);








})();