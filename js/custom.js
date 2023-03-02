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
    //FIX: El contador se quedaba con "1" aunque ubiera 0 productos
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
                <h5 class="cart-price">${price}$</h5>
                <h6>Amount: ${amount}</h6>
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