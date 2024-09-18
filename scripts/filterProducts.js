const searchSelector = document.querySelector("#search");  //Selecciona el div #search

//Función para mostrar por consola el tipo de evento e impresión de algunas propiedades
//valorCapturado = '';
function captureText(atributoEvento){
    console.log(atributoEvento)
    //console.log(atributoEvento.key)
    console.log(atributoEvento.code)
    
    const valorCapturado = atributoEvento.target.value;
    console.log('Valor capturado',valorCapturado);

    const filterProducts = products.filter(producto => {
        const productoFiltrado = producto.title === valorCapturado

        return productoFiltrado
    })
    console.log(filterProducts)
    
    //Convertimos los datos estaticos (Template estatico) en un template dinámico para renderizar las tarjetas
    function createCard(product) { //La función recibe un objeto que es el producto con todas sus propiedades definidads
        return `
        <a class="product-card" href="./details.html">
            <img class="product-img" src="${product.images[0]}" alt="${product.id}" />
            <div class="product-info">
                <span class="product-title">${product.title}</span>
                <span class="product-description">${product.description}</span>
                <div class="product-price-block">
                    <span class="product-price">${product.price}</span>
                    <span class="product-discount">50% Off</span>
                </div>
            <div class="product-tax-policy">Incluye impuesto País y percepción AFIP</div>
            </div>
        </a>`;
    }

    //Creación de cada tarjeta de producto
    /*let productsTemplate = "";
    for (const element of products){ //por cada elemento del arrays de productos hacer:
        productsTemplate = productsTemplate + createCard(element)
    }
    const productsSelector = document.getElementById("products"); //Seleccionamos el contenedor product-container(etiqueta) a traves de su id
    productsSelector.innerHTML = productsTemplate;*/

    //Encapsulamos los datos, donde recibe un array de productos y el id del selector HTML
    function printCards(arrayOfProducts, idSelector) {
        let productsTemplate = "";
        for (const element of arrayOfProducts) {
        productsTemplate = productsTemplate + createCard(element);
        }
        const productsSelector = document.getElementById(idSelector);
        productsSelector.innerHTML = productsTemplate;
    }
    printCards(filterProducts, "products");//Invocamos la funcion pasando el array y el id    
};

//Evento de teclado keyup
searchSelector.addEventListener("keyup", evento => captureText(evento));

//console.log('Valor actual:', valorCapturado)