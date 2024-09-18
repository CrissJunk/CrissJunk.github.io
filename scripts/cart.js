//Convertimos los datos estaticos (Template estatico) en un template dinámico para renderizar las tarjetas
function createCartCard(product) { //La función recibe un objeto que es el producto con todas sus propiedades definidads
    return `
    <div class="productComprados-carrito">
        <img class="big-img-carrito" id="big-img-carrito" src="${product.images}" alt="MacBook Pro 13'4" />
        <div class="checkout-container_car">
            <h1 id="price" class="checkout-total-label_01">${product.title}</h1>
            <p class="checkout-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusand Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti corporis aspernatur quae facilis cum? Cum facere accusamus necessitatibus laudantium? Velit, illo at aliquam possimus culpa amet doloremque distinctio fugiat officiis.
            </p>
            <div class="checkout-process">
                <div class="top">
                    <input type="number" min="1" value="${product.quantity}" />
                    <span id="price" class="checkout-total-price_carrito">S/. ${product.quantity*product.price}.00</span>
                </div>
            </div>
        </div>
    </div>`;
}

const local = JSON.parse(localStorage.getItem("cart"));
//Creación de cada tarjeta de producto
let productsCartTemplate = "";
for (const element of local){ //por cada elemento del arrays de productos hacer:
    productsCartTemplate = productsCartTemplate + createCartCard(element)
}
const productsCartSelector = document.getElementById("details-carrito"); //Seleccionamos el contenedor product-container(etiqueta) a traves de su id
productsCartSelector.innerHTML = productsCartTemplate;

console.log(products[0].images);
console.log(local[0].images);
console.log(local);