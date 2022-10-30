const menuMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const MenuBurgerIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const iconCarrito = document.querySelector('.navbar-shopping-cart')
const asideInfo = document.querySelector('.product-detail')
const cardsContainer = document.querySelector('.cards-container')

menuMail.addEventListener('click', toggleDesktop);//toggle: invertir mando
MenuBurgerIcon.addEventListener('click', toggleMobileMenu);//toggle: invertir mando
iconCarrito.addEventListener('click', toggleAsideInfo);//toggle: invertir mando

function toggleDesktop() {
    const isAsideClosed = asideInfo.classList.contains('inactive');
    if(!isAsideClosed){
        asideInfo.classList.add('inactive');//ADD ES PONER INACTIVE AL ELEMENTO
    }

    desktopMenu.classList.toggle('inactive');
}
/*function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
}
function toggleAsideInfo() {
    asideInfo.classList.toggle('inactive');
}*/

function toggleMobileMenu() {
    const isAsideClosed = asideInfo.classList.contains('inactive');
    if(!isAsideClosed){
        asideInfo.classList.add('inactive');
    }
    //Toogle, mantener en estado versatil
    mobileMenu.classList.toggle('inactive');
}

function toggleAsideInfo() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }else if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
    //Toogle, mantener en estado versatil
    asideInfo.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Laptop Lenovo',
    price: 600,
    image: 'https://www.lavictoria.ec/wp-content/uploads/2022/02/IDEAPAD-3-LAPTOP-LENOVO-14IML05-81WA-1.jpg',
});
productList.push({
    name: 'Bruja Escarlata',
    price: 'Incomprable',
    image: 'https://www.dynamicculture.es/wp-content/uploads/2021/02/bruja-escarlata-690x440.jpg',
});
productList.push({
    name: 'Bruja Escarlata',
    price: 'Incomprable',
    image: 'https://static2.abc.es/media/play/2021/01/29/burja-escarlata-vision-kuwB--620x349@abc.png',
});
productList.push({
    name: 'W & V',
    price: 'Incomprable',
    image: 'https://media.revistavanityfair.es/photos/60e84512e3e0ae04802ddc0d/master/w_1600%2Cc_limit/147986.jpg',
});
productList.push({
    name: 'Wanda and Visión',
    price: 'Incomprable',
    image: 'https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2020/12/28/5fea1484839b1.jpeg',
});
/*
<div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
    <div>
    <p>$120,00</p>
    <p>Bike</p>
    </div>
    <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
    </figure>
</div>
*/
function renderProducts(arr) {

    for(product of arr){
    const productCard = document.createElement('div');
    productCard.classList.add('product-card')

    //product = {name, price, image}-->produc.image
    const img = document.createElement('img');
    img.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const productDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    
    const productName = document.createElement('p');
    productName.innerText = '' + product.name;

    productDiv.append(productPrice, productName);
    //productDiv.appendChild(productName);
    //--------
    const productFigure = document.createElement('figure');
    
    const productImg = document.createElement('img');
    productImg.setAttribute('src', './icons/bt_add_to_cart.svg');//'./icons/bt_add_to_cart.svg')
    
    productFigure.appendChild(productImg);//INsertatlo en sus propias div y figure

    productInfo.append(productDiv, productFigure);//Insertarlo en la div and figure
    //productInfo.appendChild(productFigure);//Insertarlo en la div and figure

    productCard.append(img, productInfo);//INsertando img and div info
    //productCard.appendChild(productInfo);//INsertando img and div info

    cardsContainer.appendChild(productCard);//insertandolo en el htmml, para aquello hay que declarar arriba
    }
    
}

renderProducts(productList);