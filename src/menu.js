import Grub from './assets/menu.jpg';

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu', 'wrapper');

    menu.appendChild(createTitle('Galley Grub'));
    menu.appendChild(createImg());

    return menu;
}

function createTitle(text) {
    const title = document.createElement('h1');
    title.textContent = text
    return title;
}

function createImg() {
    const img = new Image
    img.src = Grub
    return img
}

function createContent() {
    const newDiv = document.createElement('div');


}

export default function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createMenu());
}