class Product {
    constructor(id, title, price, stock, images, onsale, _supplier, colors, description) {//Constructor: metodo q construye las diferentes instancias de una clase
      this.id = id;//this hace referencia es esta instancia de la clase
      this.title = title;
      this.price = price;
      this.stock = stock;
      this.images = images;
      this.onsale = onsale;
      this.colors = colors;
      this.description = description;
      this._supplier = _supplier; //Definimos una propiedad privada
    }
    
    get getSupplier(){//Para obtener el valor de esta propiedad privada
        return this._supplier;
    }
    set setSupplier(newName){//Para modificar el valor de esta propiedad privada
        this._supplier = newName;
    }

    sellUnits(units){//Metodo para unidades vendidas
        if (this.stock >= 0 && units < this.stock) {
            this.stock = this.stock - units
            console.log("Se vendieron " + units + " unidades")
            console.log("En stock quedan: "+this.stock+"unidades")
        }
        else{
            console.log("Quieres veneder " + units )
            console.log("Pero solo te queda " +this.stock +" Unidades")
        }
    }

}
//Definimos una instancia de la clase Product
const productoDePrueba = new Product(1154492,"Chocolate", 50, 12, "imagen01", "enVenta", "Inca Kola");//new para crear una nueva clase
console.log(productoDePrueba);

productoDePrueba.sellUnits(10);
productoDePrueba.sellUnits(5);


const prod1 = new Product(11544001,"LAPTOP GAMER HP", "2500", 20, ["./assets/laptopHp01.png","./assets/laptopHp02.png","./assets/laptopHp03.png"], "en Venta", "Inca Kola",["Oro","Plateado","Perla","Blanco Metalico",""],"Space Gray");
const prod2 = new Product(11544002,"IMPRESORA MULTIFUNCIONAL EPSON L3250", "739", 30, ["./assets/IMPRE01.png","./assets/IMPRE02.png","./assets/IMPRE03.png"], "enVenta", "Inca Kola",["Oro","Plateado","Perla","Blanco Metalico",""],"Space Blue");
const prod3 = new Product(11544003,"CELULAR APPLE IPHONE 14", "4295", 40, ["./assets/IPHONE01.png","./assets/IPHONE02.png","./assets/IPHONE03.png"], "enVenta", "Inca Kola",["Oro","Plateado","Perla","Blanco Metalico",""],"Space Yellow");
const prod4 = new Product(11544004,"MONITOR LG 27", "539", 50, ["./assets/MONITOR01.png","./assets/MONITOR02.png","./assets/MONITOR03.png"], "enVenta", "Inca Kola",["Oro","Plateado","Perla","Blanco Metalico",""],"Space Black");
const prod5 = new Product(11544005,"CASE ANTRYX RX 430U BLACK", "339", 60, ["./assets/CPU01.png","./assets/CPU02.png","./assets/CPU03.png"], "enVenta", "Inca Kola",["Oro","Plateado","Perla","Blanco Metalico",""],"Space Green");
const prod6 = new Product(11544006,"DISCO SOLIDO SSD KINGSTON", "121", 70, ["./assets/SSD01.png","./assets/SSD02.png","./assets/SSD03.png"], "enVenta", "Inca Kola",["Oro","Plateado","Perla","Blanco Metalico",""],"Space With");

//Array para guardas los productos
const products = [prod1, prod2, prod3, prod4, prod5, prod6];


//console.log(products);
