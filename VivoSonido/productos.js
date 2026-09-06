/* ARREGLO DE PRODUCTOS
   En vez de escribir el HTML a mano, guardamos los datos aquí.
   Cada propiedad corresponde a una columna de tu planilla.*/
const productos = [
    {
        codigo: "GA001",
        categoria: "Guitarras Acústicas",
        nombre: "Guitarra Acústica Folk",
        marca: "Yamaha",
        modelo: "F310",
        stock: 8,
        precio: 129990,
        descripcion: "Tapa de abeto, aros y fondo de meranti. Ideal para iniciantes.",
        imagen: "imagenes/GA001.jpg"
    },
    {
        codigo: "GA002",
        categoria: "Guitarras Acústicas",
        nombre: "Guitarra Acústica Dreadnought",
        marca: "Fender",
        modelo: "CD-60S",
        stock: 5,
        precio: 189990,
        descripcion: "Tapa de abeto macizo, brazo de caoba. Sonido cálido y proyectado.",
        imagen: "imagenes/GA002.jpg"
    },
    {
        codigo: "GA003",
        categoria: "Guitarras Acústicas",
        nombre: "Guitarra Acústica Clásica 4/4",
        marca: "Yamaha",
        modelo: "C40",
        stock: 10,
        precio: 89990,
        descripcion: "Nailon, tapa de abeto. Ideal para estudio y flamenco.",
        imagen: "imagenes/GA003.jpg"
    },
    {
        codigo: "GA004",
        categoria: "Guitarras Acústicas",
        nombre: "Guitarra Electroacústica",
        marca: "Takamine",
        modelo: "GN20CE",
        stock: 3,
        precio: 349990,
        descripcion: "Pickup integrado, afinador incorporado.",
        imagen: "imagenes/GA004.jpg"
    },
    {
        codigo: "GA005",
        categoria: "Guitarras Acústicas",
        nombre: "Guitarra 3/4 Niños",
        marca: "Yamaha",
        modelo: "JR1",
        stock: 6,
        precio: 79990,
        descripcion: "Tamaño reducido para niños de 6 a 10 años.",
        imagen: "imagenes/GA005.jpg"
    },
    {
        codigo: "GE001",
        categoria: "Guitarras Eléctricas",
        nombre: "Guitarra Eléctrica Stratocaster",
        marca: "Squier",
        modelo: "Affinity Strat",
        stock: 5,
        precio: 249990,
        descripcion: "Cuerpo de álamo, mástil de arce, pastillas SSS.",
        imagen: "imagenes/GE001.jpg"
    },
    {
        codigo: "GE002",
        categoria: "Guitarras Eléctricas",
        nombre: "Guitarra Eléctrica Les Paul",
        marca: "Epiphone",
        modelo: "Les Paul Std",
        stock: 4,
        precio: 329990,
        descripcion: "Cuerpo caoba, tapa arce, pastillas humbucker.",
        imagen: "imagenes/GE002.jpg"
    },
    {
        codigo: "GE003",
        categoria: "Guitarras Eléctricas",
        nombre: "Guitarra Eléctrica SG",
        marca: "Epiphone",
        modelo: "SG Standard",
        stock: 3,
        precio: 319990,
        descripcion: "Cuerpo caoba, mástil caoba, 2 humbuckers.",
        imagen: "imagenes/GE003.jpg"
    },
    {
        codigo: "GE004",
        categoria: "Guitarras Eléctricas",
        nombre: "Guitarra Eléctrica Telecaster",
        marca: "Squier",
        modelo: "Affinity Tele",
        stock: 4,
        precio: 239990,
        descripcion: "Cuerpo álamo, clavijero vintage, 2 pastillas single.",
        imagen: "imagenes/GE004.jpg"
    },
    {
        codigo: "GE005",
        categoria: "Guitarras Eléctricas",
        nombre: "Guitarra Eléctrica Semi-hollow",
        marca: "Epiphone",
        modelo: "ES-335",
        stock: 2,
        precio: 549990,
        descripcion: "Semi-hueca, 2 humbuckers, ideal para jazz y blues.",
        imagen: "imagenes/GE005.jpg"
    },
    {
        codigo: "BA001",
        categoria: "Bajos Eléctricos",
        nombre: "Bajo Eléctrico 4 Cuerdas",
        marca: "Squier",
        modelo: "Affinity PJ",
        stock: 5,
        precio: 299990,
        descripcion: "Pickup PJ, cuerpo álamo, mástil arce.",
        imagen: "imagenes/BA001.jpg"
    },
    {
        codigo: "BA002",
        categoria: "Bajos Eléctricos",
        nombre: "Bajo Eléctrico Jazz Bass",
        marca: "Fender",
        modelo: "Player Jazz",
        stock: 2,
        precio: 699990,
        descripcion: "Alder body, 2 Alnico V Jazz single-coil.",
        imagen: "imagenes/BA002.jpg"
    },
    {
        codigo: "BA003",
        categoria: "Bajos Eléctricos",
        nombre: "Bajo Acústico 4 Cuerdas",
        marca: "Yamaha",
        modelo: "APX700II",
        stock: 2,
        precio: 429990,
        descripcion: "Electroacústico, afinador incorporado.",
        imagen: "imagenes/BA003.jpg"
    },
    {
        codigo: "BT001",
        categoria: "Baterías",
        nombre: "Batería Acústica 5 piezas",
        marca: "Pearl",
        modelo: "Roadshow",
        stock: 2,
        precio: 599990,
        descripcion: "Incluye stands, platillos y pedal de bombo.",
        imagen: "imagenes/BT001.jpg"
    },
    {
        codigo: "BT002",
        categoria: "Baterías",
        nombre: "Batería Electrónica 8 pads",
        marca: "Roland",
        modelo: "TD-02KV",
        stock: 2,
        precio: 799990,
        descripcion: "Módulo TD-02, 8 pads de goma, pedal hi-hat.",
        imagen: "imagenes/BT002.jpg"
    },
    {
        codigo: "BT003",
        categoria: "Baterías",
        nombre: "Caja Snare 14\"",
        marca: "Pearl",
        modelo: "STE1450",
        stock: 4,
        precio: 89990,
        descripcion: "Acero, 14x5\", 10 tensores.",
        imagen: "imagenes/BT003.jpg"
    },
    {
        codigo: "BT004",
        categoria: "Baterías",
        nombre: "Platillo Hi-Hat 14\"",
        marca: "Zildjian",
        modelo: "A Series",
        stock: 3,
        precio: 149990,
        descripcion: "Latón B20, sonido brillante y claro.",
        imagen: "imagenes/BT004.jpg"
    },
    {
        codigo: "BT005",
        categoria: "Baterías",
        nombre: "Platillo Crash 16\"",
        marca: "Zildjian",
        modelo: "A Series",
        stock: 3,
        precio: 129990,
        descripcion: "Latón B20, ataque rápido.",
        imagen: "imagenes/BT005.jpg"
    },
    {
        codigo: "TC001",
        categoria: "Teclados y Pianos",
        nombre: "Teclado Digital 61 teclas",
        marca: "Yamaha",
        modelo: "PSR-E373",
        stock: 4,
        precio: 249990,
        descripcion: "61 teclas sensibles al tacto, 622 voces.",
        imagen: "imagenes/TC001.jpg"
    },
    {
        codigo: "TC002",
        categoria: "Teclados y Pianos",
        nombre: "Piano Digital 88 teclas",
        marca: "Yamaha",
        modelo: "P-45",
        stock: 2,
        precio: 499990,
        descripcion: "88 teclas pesadas, 10 voces, pedal sustain incluido.",
        imagen: "imagenes/TC002.jpg"
    },
    {
        codigo: "TC003",
        categoria: "Teclados y Pianos",
        nombre: "Sintetizador 49 teclas",
        marca: "Arturia",
        modelo: "MiniLab MKII",
        stock: 5,
        precio: 129990,
        descripcion: "MIDI controller, 49 mini teclas.",
        imagen: "imagenes/TC003.jpg"
    },
    {
        codigo: "TC004",
        categoria: "Teclados y Pianos",
        nombre: "Teclado MIDI 88 teclas",
        marca: "M-Audio",
        modelo: "Hammer 88",
        stock: 2,
        precio: 399990,
        descripcion: "88 teclas martillo, sin sonidos propios.",
        imagen: "imagenes/TC004.jpg"
    },
    {
        codigo: "AM001",
        categoria: "Amplificadores",
        nombre: "Amplificador Guitarra 15W",
        marca: "Fender",
        modelo: "Frontman 15G",
        stock: 5,
        precio: 99990,
        descripcion: "15W, distorsión incorporada, entrada auxiliar.",
        imagen: "imagenes/AM001.jpg"
    },
    {
        codigo: "AM002",
        categoria: "Amplificadores",
        nombre: "Amplificador Guitarra 40W",
        marca: "Marshall",
        modelo: "MG40GFX",
        stock: 3,
        precio: 299990,
        descripcion: "40W, 4 canales, efectos digitales integrados.",
        imagen: "imagenes/AM002.jpg"
    },
    {
        codigo: "AM003",
        categoria: "Amplificadores",
        nombre: "Amplificador Bajo 100W",
        marca: "Hartke",
        modelo: "HD100",
        stock: 2,
        precio: 449990,
        descripcion: "100W, tweeter integrado, ecualizador de 4 bandas.",
        imagen: "imagenes/AM003.jpg"
    },
    {
        codigo: "AM004",
        categoria: "Amplificadores",
        nombre: "Amplificador Acústico 40W",
        marca: "Fishman",
        modelo: "Loudbox Mini",
        stock: 2,
        precio: 499990,
        descripcion: "60W, 2 canales, reverb y chorus incorporados.",
        imagen: "imagenes/AM004.jpg"
    },
    {
        codigo: "MI001",
        categoria: "Micrófonos",
        nombre: "Micrófono Dinámico Cardioide",
        marca: "Shure",
        modelo: "SM58",
        stock: 8,
        precio: 149990,
        descripcion: "Estándar industria para voz en vivo.",
        imagen: "imagenes/MI001.jpg"
    },
    {
        codigo: "MI002",
        categoria: "Micrófonos",
        nombre: "Micrófono Dinámico Instrumento",
        marca: "Shure",
        modelo: "SM57",
        stock: 6,
        precio: 139990,
        descripcion: "Ideal para captura de instrumentos y amplificadores.",
        imagen: "imagenes/MI002.jpg"
    },
    {
        codigo: "MI003",
        categoria: "Micrófonos",
        nombre: "Micrófono Condensador",
        marca: "Audio-Tech.",
        modelo: "AT2020",
        stock: 4,
        precio: 199990,
        descripcion: "Cardioide, XLR, ideal para grabación en estudio.",
        imagen: "imagenes/MI003.jpg"
    },
    {
        codigo: "MI004",
        categoria: "Micrófonos",
        nombre: "Micrófono USB de Condensador",
        marca: "Blue",
        modelo: "Yeti",
        stock: 5,
        precio: 299990,
        descripcion: "USB, 4 patrones polares, ideal para streaming y podcast.",
        imagen: "imagenes/MI004.jpg"
    },
    {
        codigo: "PE001",
        categoria: "Pedales de Efectos",
        nombre: "Pedal Distorsión",
        marca: "Boss",
        modelo: "DS-1",
        stock: 7,
        precio: 79990,
        descripcion: "Clásico pedal de distorsión, 3 controles.",
        imagen: "imagenes/PE001.jpg"
    },
    {
        codigo: "PE002",
        categoria: "Pedales de Efectos",
        nombre: "Pedal Reverb",
        marca: "Boss",
        modelo: "RV-6",
        stock: 4,
        precio: 179990,
        descripcion: "8 modos de reverb, control de shimmer.",
        imagen: "imagenes/PE002.jpg"
    },
    {
        codigo: "PE003",
        categoria: "Pedales de Efectos",
        nombre: "Pedal Multi-efectos",
        marca: "Boss",
        modelo: "ME-80",
        stock: 2,
        precio: 349990,
        descripcion: "Diseño tipo pedalboard, 8 efectos simultáneos.",
        imagen: "imagenes/PE003.jpg"
    },
    {
        codigo: "PE004",
        categoria: "Pedales de Efectos",
        nombre: "Pedal Tuner Cromático",
        marca: "Boss",
        modelo: "TU-3",
        stock: 8,
        precio: 89990,
        descripcion: "Afinador cromático, indicador de tono.",
        imagen: "imagenes/PE004.jpg"
    },
    {
        codigo: "PE005",
        categoria: "Pedales de Efectos",
        nombre: "Pedal Delay",
        marca: "MXR",
        modelo: "Carbon Copy",
        stock: 4,
        precio: 179990,
        descripcion: "Delay analógico cálido, tiempo 600ms.",
        imagen: "imagenes/PE005.jpg"
    },
    {
        codigo: "PE006",
        categoria: "Pedales de Efectos",
        nombre: "Pedal Overdrive",
        marca: "Ibanez",
        modelo: "TS9",
        stock: 6,
        precio: 99990,
        descripcion: "Tube Screamer clásico, sonido suave y orgánico.",
        imagen: "imagenes/PE006.jpg"
    },
    {
        codigo: "AC001",
        categoria: "Accesorios",
        nombre: "Cuerdas Guitarra Eléctrica 09-42",
        marca: "Ernie Ball",
        modelo: "Super Slinky",
        stock: 25,
        precio: 8990,
        descripcion: "Juego 6 cuerdas, calibre ligero.",
        imagen: "imagenes/AC001.jpg"
    },
    {
        codigo: "AC002",
        categoria: "Accesorios",
        nombre: "Cuerdas Guitarra Acústica 12-53",
        marca: "Ernie Ball",
        modelo: "Earthwood",
        stock: 20,
        precio: 10990,
        descripcion: "Bronce fósforo, sonido cálido.",
        imagen: "imagenes/AC002.jpg"
    },
    {
        codigo: "AC003",
        categoria: "Accesorios",
        nombre: "Cuerdas Bajo 45-105",
        marca: "Ernie Ball",
        modelo: "Regular Slinky",
        stock: 12,
        precio: 14990,
        descripcion: "Cuerdas de níquel enrollado, set 4 cuerdas.",
        imagen: "imagenes/AC003.jpg"
    },
    {
        codigo: "AC004",
        categoria: "Accesorios",
        nombre: "Púas de Guitarra x10 (0.73mm)",
        marca: "Fender",
        modelo: "351",
        stock: 50,
        precio: 3990,
        descripcion: "Celulosa, grosor medio.",
        imagen: "imagenes/AC004.jpg"
    },
    {
        codigo: "AC005",
        categoria: "Accesorios",
        nombre: "Capotraste Guitarra",
        marca: "Dunlop",
        modelo: "Trigger",
        stock: 15,
        precio: 12990,
        descripcion: "Capotraste de resorte, compatible 6 cuerdas.",
        imagen: "imagenes/AC005.jpg"
    },
    {
        codigo: "AC006",
        categoria: "Accesorios",
        nombre: "Afinador de Clip",
        marca: "Snark",
        modelo: "SN-5",
        stock: 20,
        precio: 8990,
        descripcion: "Afinador cromático de clip, pantalla giratoria.",
        imagen: "imagenes/AC006.jpg"
    },
    {
        codigo: "AC007",
        categoria: "Accesorios",
        nombre: "Cable Instrumento 3m",
        marca: "Monster",
        modelo: "S100-I-3",
        stock: 15,
        precio: 12990,
        descripcion: "Cable trenzado, conectores dorados, 3 metros.",
        imagen: "imagenes/AC007.jpg"
    },
    {
        codigo: "AC008",
        categoria: "Accesorios",
        nombre: "Cable Instrumento 6m",
        marca: "Monster",
        modelo: "S100-I-6",
        stock: 10,
        precio: 17990,
        descripcion: "Cable trenzado, conectores dorados, 6 metros.",
        imagen: "imagenes/AC008.jpg"
    },
    {
        codigo: "AC009",
        categoria: "Accesorios",
        nombre: "Soporte Guitarra de Piso",
        marca: "Hercules",
        modelo: "GS302B",
        stock: 12,
        precio: 22990,
        descripcion: "Soporte plegable con enganche automático.",
        imagen: "imagenes/AC009.jpg"
    },
    {
        codigo: "AC010",
        categoria: "Accesorios",
        nombre: "Soporte Guitarra de Pared",
        marca: "Hercules",
        modelo: "WAH-202",
        stock: 10,
        precio: 18990,
        descripcion: "Montaje a pared, enganche automático.",
        imagen: "imagenes/AC010.jpg"
    },
    {
        codigo: "ES001",
        categoria: "Estudio y Grabación",
        nombre: "Interfaz de Audio 2x2 USB",
        marca: "Focusrite",
        modelo: "Scarlett Solo",
        stock: 4,
        precio: 149990,
        descripcion: "1 entrada XLR+instrumento, 2 salidas, 24bit/192kHz.",
        imagen: "imagenes/ES001.jpg"
    },
    {
        codigo: "ES002",
        categoria: "Estudio y Grabación",
        nombre: "Auriculares de Estudio",
        marca: "Audio-Tech.",
        modelo: "ATH-M20x",
        stock: 6,
        precio: 79990,
        descripcion: "Circumaurales, respuesta 15Hz-20kHz.",
        imagen: "imagenes/ES002.jpg"
    },
    {
        codigo: "ES003",
        categoria: "Estudio y Grabación",
        nombre: "Auriculares de Estudio Pro",
        marca: "Audio-Tech.",
        modelo: "ATH-M50x",
        stock: 4,
        precio: 219990,
        descripcion: "Referencia de industria, sonido neutro y detallado.",
        imagen: "imagenes/ES003.jpg"
    },
    {
        codigo: "ES004",
        categoria: "Estudio y Grabación",
        nombre: "Monitor de Estudio 5\"",
        marca: "Yamaha",
        modelo: "HS5",
        stock: 2,
        precio: 349990,
        descripcion: "Altavoz activo, respuesta plana, ideal mezcla.",
        imagen: "imagenes/ES004.jpg"
    },
    {
        codigo: "ES005",
        categoria: "Estudio y Grabación",
        nombre: "Pop Filter para Micrófono",
        marca: "Sennheiser",
        modelo: "MZP 40",
        stock: 8,
        precio: 14990,
        descripcion: "Doble malla, brazo flexible con clip.",
        imagen: "imagenes/ES005.jpg"
    }
];

/* Función simple para formateo numero a precio Chile */
function formatearPrecio(numero) {
    return "$" + numero.toLocaleString("es-CL") + " CLP";
}

/* Renderizado de productos
   Recibe un arreglo de productos y los dibuja en el contenedor de la pagina.
   Recibe "lista" para poder mostrar una versión filtrada/ordenada;
   si no se le pasa nada, muestra todos los productos.*/

function renderProductos(lista) {
    const contenedor = document.getElementById("products-container");
    if (!contenedor) return; // si esta página no tiene el contenedor, no hace nada

    const productosAMostrar = lista || productos;

    if (productosAMostrar.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron productos.</p>";
        return;
    }

    // .map() recorre el arreglo y devuelve un pedazo de HTML por cada producto.
    // .join("") junta todos los pedazos en un solo string.
    contenedor.innerHTML = productosAMostrar.map(function (producto) {
        return `
            <div class="col-md-4 col-sm-6 product-box">
                <a href="#">
                    <img alt="${producto.nombre}" src="${producto.imagen}" width="100%">
                    <span class="category-tag">${producto.categoria}</span>
                    <h3>${producto.marca} ${producto.nombre}</h3>
                    <p class="short-desc">${producto.descripcion}</p>
                    <strong class="price">${formatearPrecio(producto.precio)}</strong>
                </a>
                <button class="add-to-cart-btn" data-codigo="${producto.codigo}">
                    Agregar al carrito
                </button>
            </div>
        `;
    }).join("");

    // Una vez creados los botones, les enchufamos el evento de clic.
    document.querySelectorAll(".add-to-cart-btn").forEach(function (boton) {
        boton.addEventListener("click", function () {
            const codigoProducto = boton.dataset.codigo;
            agregarAlCarrito(codigoProducto);
        });
    });
}

/* BUSCAR + ORDENAR
   Se ejecuta cada vez que el usuario escribe en el buscador
   o cambia el select de orden.*/
function filtrarYOrdenarProductos() {
    const inputBusqueda = document.getElementById("search-input");
    const selectOrden = document.getElementById("select-order");

    const texto = inputBusqueda ? inputBusqueda.value.toLowerCase().trim() : "";
    const orden = selectOrden ? selectOrden.value : "default";

    // .filter() deja solo los productos cuyo nombre incluye el texto buscado.
    // .toLowerCase() en ambos lados para que no importen las mayúsculas.
    let resultado = productos.filter(function (producto) {
        return producto.nombre.toLowerCase().includes(texto);
    });

    // .sort() reordena el arreglo resultante. La función de comparación
    // devuelve un número negativo si "a" debe ir antes que "b".
    if (orden === "asc") {
        resultado.sort(function (a, b) { return a.precio - b.precio; });
    } else if (orden === "desc") {
        resultado.sort(function (a, b) { return b.precio - a.precio; });
    }

    renderProductos(resultado);
}

/* CARRITO CON LOCALSTORAGE */

// Lee el carrito guardado. Si no existe todavia, parte de un arreglo vacio.
function obtenerCarrito() {
    const datosGuardados = localStorage.getItem("carrito");
    return datosGuardados ? JSON.parse(datosGuardados) : [];
}

// Guarda el carrito (convertido a texto) en localStorage.
function guardarCarrito(carrito) {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(codigoProducto) {
    const producto = productos.find(function (p) { return p.codigo === codigoProducto; });
    if (!producto) return;

    const carrito = obtenerCarrito();

    // Si el producto ya está en el carrito, solo le subimos la cantidad.
    const itemExistente = carrito.find(function (item) { return item.codigo === codigoProducto; });

    if (itemExistente) {
        itemExistente.cantidad += 1;
    } else {
        carrito.push({
            codigo: producto.codigo,
            nombre: producto.nombre,
            precio: producto.precio,
            cantidad: 1
        });
    }

    guardarCarrito(carrito);
    actualizarContadorCarrito();
    alert(producto.nombre + " se agregó al carrito.");
}

// Suma todas las cantidades del carrito y actualiza el numerito en pantalla.
function actualizarContadorCarrito() {
    const contador = document.getElementById("cart-count");
    if (!contador) return;

    const carrito = obtenerCarrito();
    const totalItems = carrito.reduce(function (suma, item) { return suma + item.cantidad; }, 0);
    contador.textContent = totalItems;
}

/* CARGAR LA PAGINA
   aca hace que el buscador y el select de orden funcionen, y que se dibujen los productos
   y el contador del carrito. */

document.addEventListener("DOMContentLoaded", function () {
    renderProductos();
    actualizarContadorCarrito();

    const inputBusqueda = document.getElementById("search-input");
    const selectOrden = document.getElementById("select-order");
    const formBusqueda = document.querySelector(".search-form");

    // "input" se dispara con cada tecla que escribes.
    if (inputBusqueda) {
        inputBusqueda.addEventListener("input", filtrarYOrdenarProductos);
    }

    // "change" se dispara cuando eliges una opción distinta del select.
    if (selectOrden) {
        selectOrden.addEventListener("change", filtrarYOrdenarProductos);
    }

    // Evitamos que el <form> del buscador recargue la página si
    // el usuario presiona Enter.
    if (formBusqueda) {
        formBusqueda.addEventListener("submit", function (evento) {
            evento.preventDefault();
        });
    }
});