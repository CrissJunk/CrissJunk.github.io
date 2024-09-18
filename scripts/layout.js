//Renderizando la barra de navegación
const navSelector = document.getElementById("navbar");

const options = [
    { title: "Ofertas", linkTo: "./outlet.html", opts:["Laptops","Audio","Auriculares"]},
    { title: "Cómo comprar", linkTo: "./how.html", opts:["Formas de pago", "Envios", "Devoluciones"]},
    { title: "Costos y tarifas", linkTo: "./taxs.html", opts:["Impuestos","Facturación"]},
    { title: "Mis pedidos", linkTo: "./orders.html", opts:["Pedir nuevamente","Lista de deseos",""]},
    { title: "Garantía", linkTo: "./warranty.html", opts:["","",""]},
];

for (let option of options) {
    const anchor = document.createElement("a");
    anchor.className = "nav-button"
    anchor.textContent = option.title
    anchor.href = option.linkTo
    anchor.style.listStyleType = "none"
    anchor.style.textDecoration = "none"
    anchor.style.color= "white"
    anchor.style.fontSize="14px"
    navSelector.appendChild(anchor)
};

//Renderizando el pie de página
const footerSelector = document.querySelector("#footer");

//Creación de columnas para cada opción
function createOptionsTemplate(options) { //La función recibe un objeto que son las opciones con todas sus propiedades definidads
    return `
    <ul class="footer-ul">
      <li class="footer-main-item">
        <a class="footer-a" href="./index.html">${options.title}</a>
      </li>
      <li class="footer-li">
        <a class="footer-a" href="./index.html">${options.opts[0]}</a>
      </li>
      <li class="footer-li">
        <a class="footer-a" href="./index.html">${options.opts[1]}</a>
      </li>
      <li class="footer-li">
        <a class="footer-a" href="./index.html">${options.opts[2]}</a>
      </li>
    </ul>
    `;
}
let optionsTemplate = "";
for (const element of options){ //por cada elemento del arrays de opciones hacer:
    optionsTemplate = optionsTemplate + createOptionsTemplate(element)
}

footerSelector.innerHTML = optionsTemplate;
