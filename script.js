const openMenu = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-btn');
const featuresBtn = document.getElementById('feat');
const pricingBtn = document.getElementById('pric');
const docBtn = document.getElementById('doc');
const blogBtn = document.getElementById('blo');



let close = function () {
    menu.style.left = '-600px';
}
openMenu.addEventListener('click', () => {
    menu.style.left = '0';
})

closeMenu.addEventListener('click', () => {
    close();
})

featuresBtn.addEventListener('click', () => {
    close();
})

pricingBtn.addEventListener('click', () => {
    close();
})

docBtn.addEventListener('click', () => {
    close();
})

blogBtn.addEventListener('click', () => {
    close();
})

