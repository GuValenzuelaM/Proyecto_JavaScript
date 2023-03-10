//VARIABLE CONTENEDOR DE TODOS LOS PRODUCTOS/SERVICIOS
let allContainerCart = document.querySelector('.products');
//VARIABLE CONTENEDORA DE TODOS LOS PRODUCTOS EN EL CARRO
let containerBuyCart = document.querySelector('.card-items');
//
let priceTotal = document.querySelector('.price-total')
//
let amountProduct = document.querySelector('.count-product');

//CARRO DE COMPRAS VACIO A LA ESPERA DE SER USADO
let buyThings = [];
let totalCard = 0;
let countProduct = 0;

//FUNCIÓN QUE AGRUPA A TODOS LOS LISTENERS
loadEventListenrs();
function loadEventListenrs(){
    allContainerCart.addEventListener('click', addProduct);

    containerBuyCart.addEventListener('click', deleteProduct);
}

//FUNCIÓN QUE AGREGA TODOS LAS CLASES DEFINIDAS COMO BOTONCOMPRA
function addProduct(e){
    e.preventDefault();
    if (e.target.classList.contains('btn-add-cart')) {
        const selectProduct = e.target.parentElement; 
        readTheContent(selectProduct);
    }
}

//FUNCIÓN QUE ELIMINA LOS PRODUCTOS DEL CARRO
function deleteProduct(e) {
    if (e.target.classList.contains('delete-product')) {
        const deleteId = e.target.getAttribute('data-id');

        buyThings.forEach(value => {
            if (value.id == deleteId) {
                let priceReduce = parseFloat(value.price) * parseFloat(value.amount);
                totalCard =  totalCard - priceReduce;
                totalCard = totalCard.toFixed(2);
            }
        });
        buyThings = buyThings.filter(product => product.id !== deleteId);
        
        countProduct--;
    }
    //FIX: El contador se quedaba con "1" aunque hubiese 0 productos
    if (buyThings.length === 0) {
        priceTotal.innerHTML = 0;
        amountProduct.innerHTML = 0;
    }
    loadHtml();
}

//FUNCIÓN QUE EXTRA LOS ATRIBUTOS DE LOS PRODUCTOS AGREGADOS AL CARRO
function readTheContent(product){
    const infoProduct = {
        image: product.querySelector('div img').src,
        title: product.querySelector('.title').textContent,
        price: product.querySelector('div p span').textContent,
        id: product.querySelector('a').getAttribute('data-id'),
        amount: 1
    }

    totalCard = parseFloat(totalCard) + parseFloat(infoProduct.price);
    totalCard = totalCard.toFixed(2);

    const exist = buyThings.some(product => product.id === infoProduct.id);
    if (exist) {
        const pro = buyThings.map(product => {
            if (product.id === infoProduct.id) {
                product.amount++;
                return product;
            } else {
                return product
            }
        });
        buyThings = [...pro];
    } else {
        buyThings = [...buyThings, infoProduct]
        countProduct++;
    }
    loadHtml();
    //console.log(infoProduct);
}

//FUNCIÓN QUE AGREGA LOS ITEM AL CARRO
function loadHtml(){
    clearHtml();
    buyThings.forEach(product => {
        const {image, title, price, amount, id} = product;
        const row = document.createElement('div');
        row.classList.add('item');
        row.innerHTML = `
            <img src="${image}" alt="">
            <div class="item-content">
                <h5>${title}</h5>
                <h5 class="cart-price">Precio: $${price}</h5>
                <h6>Cantidad: ${amount}</h6>
            </div>
            <span class="delete-product" data-id="${id}">X</span>
        `;

        containerBuyCart.appendChild(row);

        priceTotal.innerHTML = totalCard;

        amountProduct.innerHTML = countProduct;
    });
}


//FUNCIÓN QUE AÑADE AL CARRO SIN DUPLICADOS
 function clearHtml(){
    containerBuyCart.innerHTML = '';
 }



 //REGISTRO DE USUARIO (PESTAÑA ACCEDE)
let arr_usuarios =[];

function alta_usuario(){
    //let nombre_usuario = document.getElementById("nombre");
    //let apellido_usuario = document.getElementById("apellido");
    let correo_usuario = document.getElementById("correo");
    let pass_usuario = document.getElementById("pass");

    //console.log(nombre_usuario);
    //console.log(apellido_usuario);
    console.log(correo_usuario);
    console.log(pass_usuario);

    //ARREGLO USUARIO
    let usuario={correo:corre_usuario.value , password:pass_usuario.value};

    //CONVERSIÓN A JSON (STRING)
    
    arr_usuarios.push(usuario);
    let arreglo_JSON =JSON.stringify(arr_usuarios);
    localStorage.setItem("arr_usuarios" , arr_usuarios);


    //RECUPERANDO USUARIOS
    let recuperando_usuarios = localStorage.getItem("arr_usuarios");
    recuperando_usuarios =json.parse(recuperando_usuarios);
    console.log(recuperando_usuarios);
}

function login_usuario(){

    let arr_usuarios =localStorage.getItem("arr_usuarios");

    let correo_usuario = document.getElementById("correo");
    let pass_usuario = document.getElementById("pass");

    arr_usuarios = JSON.parse(arr_usuarios);

    for (let usuario of arr_usuarios){

        if(correo_usuario.value ==usuario.correo && pass_usuario.value ==usuario.password){
            //DUDA, NO SE COMO REDIRECCIONAR
            location.href = './index.html'
            break;
        }
        else{
            console.log("Usuario no registrado");
        }
    }
}


let btn_registro= document.getElementById("btn_registro");
let btn_login= document.getElementById("btn_login");

btn_registro.addEventListener("click" ,alto_usuario );

btn_login.addEventListener("click" ,login_usuario);