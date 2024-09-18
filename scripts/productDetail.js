const query = location.search;
const params = new URLSearchParams(query);
const id = parseInt(params.get('id'));
console.log(typeof(id));

function printDetails(id) {
    const product = products.find((each) => each.id === id);
    const detailsTemplate = 
    `<section class="product-images-block"><!--Course, como div-->
        <div class="product-images"><!--Course, un div para cada img con class (thumbnail-container"contenedor en miniatura"")-->
        ${product.images.map(each => `<img class="mini-img" id="mini-img"src="${each}" alt="mini" onclick="changeMini(event)" />`).join("")}
        </div>
        <img class="big-img" id="big-img" src="${product.images[0]}" alt="MacBook Pro 13'4" />
    </section>
    <div class="product-description-block">
        <h1 class="product-title">${product.title}</h1>
        <form class="product-selector">
            <fieldset class="product-fieldset">
                <label class="product-label" for="color">Color</label>
                <select class="product-select" type="text" placeholder="Selecciona un color" id="color">
                    ${product.colors.map((each) => `<option value=${each}>${each}</option>`).join("")}
                </select>
            </fieldset>
        </form>
        <div class="product-description">
        <span class="product-label">Descripción</span>
            <p>
                Experience the power of creativity with the MacBook Pro 13'4.
                Featuring 8GB of RAM and 512GB of storage, this laptop provides
                the performance and storage capacity needed for demanding tasks.
                The sleek design in silver and space gray adds a touch of
                sophistication. The high-resolution Retina display brings your
                visuals to life, whether you're editing photos, creating videos,
                or simply browsing the web. With the latest technology and a
                lightweight build, the MacBook Pro 13'4 is the perfect companion
                for professionals and creative individuals alike.
            </p>
        </div>
    </div>
    <div class="product-checkout-block">
        <div class="checkout-container">
            <span class="checkout-total-label">Total:</span>
            <h2 id="price" class="checkout-total-price">S/. ${product.price}.00</h2>
            <p class="checkout-description">
                Incluye impuesto PAIS y percepción AFIP. Podés recuperar AR$
                50711 haciendo la solicitud en AFIP.
            </p>
            <ul class="checkout-policy-list">
                <li>
                    <span class="policy-icon">
                        <img src="./assets/truck.png" alt="Truck"/>
                    </span>
                    <span class="policy-desc">
                        Agrega el producto al carrito para conocer los costos de envío
                    </span>
                </li>
                <li>
                    <span class="policy-icon">
                        <img src="./assets/plane.png" alt="Plane"/>
                    </span>
                    <span class="policy-desc">
                        Recibí aproximadamente entre 10 y 15 días hábiles,
                        seleccionando envío normal
                    </span>
                </li>
            </ul>
            <div class="checkout-process">
                <div class="top">
                    <input type="number" id="quantity-input" min="1" value="1" onchange="changeSubtotal(event, ${product.price})"/>
                    <button type="button" class="cart-btn"> Comprar </button>
                </div>
                <div class="bottom">
                    <button type="button" class="btn-outline" onclick="saveProduct(${id})"> Añadir al Carrito </button>
                </div>
            </div>
        </div>
    </div>`;
    const detailsSelector = document.querySelector("#details");
    detailsSelector.innerHTML = detailsTemplate;
}

function changeMini(event) {
    const selectedSrc = event.target.src;// Obtener la ruta de la imagen miniatura seleccionada
    const bigSelector = document.querySelector("#big-img");// Seleccionar la imagen grande por su ID
    bigSelector.src = selectedSrc;// Actualizar la imagen grande con la ruta de la imagen miniatura
}

function changeSubtotal(event, productPrice) {
    const quantity = parseInt(event.target.value);// Obtener la cantidad ingresada
    const subtotal = quantity * productPrice;// Calcular el nuevo subtotal
    const subtotalSelector = document.querySelector("#price");// Seleccionar la etiqueta del subtotal
    subtotalSelector.textContent = `S/. ${subtotal}.00`;// Actualizar la vista con el nuevo subtotal
}

function saveProduct(id) {
    const found = products.find((each) => each.id === id);
    
    const product = {
        id: id,
        title: found.title,
        price: found.price,
        images: found.images[0],
        color: document.querySelector("#color").value,
        quantity: document.querySelector("#quantity-input").value,
    };

    //const stringifyProduct = JSON.stringify(product);
    
    // Guardar el producto en localStorage, puede haber múltiples productos, por lo que concatenamos al carrito existente
    let cart = JSON.parse(localStorage.getItem("cart")) || [];//Primero la función busca en en el localStorage la clave "cart", si esta existe, recupera el carrito como un array usando JSON.parse(), si no exixet crea un array vacío []
    cart.push(product);//Una vez que tiene el carrito (sea un array vacío o con productos ya guardados), el nuevo producto se añade al array con el método push()

    // Guardar el array de productos actualizado en localStorage
    localStorage.setItem("cart", JSON.stringify(cart));//Después de agregar el nuevo producto al array, el carrito se convierte nuevamente en una cadena JSON con JSON.stringify() y se guarda en localStorage

    console.log("Producto añadido al carrito:", product);
}

printDetails(id)

//console.log("Product", JSON.parse(localStorage.getItem("cart")));