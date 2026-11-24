(() => {
    interface Product {
        id: number;
        name: string;
    }
     // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo. 
    class CartBloc {
        onAddToCart(productId: number): void {
            console.log('Agregando al carrito', productId);
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

    class ProductBloc {
        constructor(
            private readonly productService: ProductService,
            private readonly mailerService: MailerService
        ) {}

        loadProduct(id: number): Product {
            const product = this.productService.getProduct(id);
            // Realiza un proceso para obtener el producto y retornarlo 
            console.log('Producto:', product);
            return product;
        }
        // Realiza una petición para salvar en base de datos 
        saveProduct(product: Product): void {
            this.productService.saveProduct(product);
            this.mailerService.notifyClients(product);
        }
    }

    const productService = new ProductService();
    const mailerService = new MailerService();
    const cartBloc = new CartBloc();
    const productBloc = new ProductBloc(productService, mailerService);

    const product = productBloc.loadProduct(10);
    productBloc.saveProduct(product);
    cartBloc.onAddToCart(10);
})();