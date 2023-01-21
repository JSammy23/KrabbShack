import Grub from './assets/menu.jpg';
import kelpFries from './assets/kelpFries.jpeg';
import patty from './assets/krabbyPatty.jpg';

function createMenu() {
    const menu = document.createElement('div');
    menu.classList.add('menu', 'wrapper');

    menu.appendChild(createHeader());
    menu.appendChild(createContent());

    return menu;
}

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('menuHeader');
    header.appendChild(createTitle('Galley Grub'));
    header.appendChild(createImg());
    return header;
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
    const grid = document.createElement('div');
    grid.classList.add('grid');

    grid.appendChild(createMenuItem('Kelp Fries', "Made fresh in house", kelpFries));
    grid.appendChild(createMenuItem('Krabby Patty', "Made from our signature secret recipe", patty));

    return grid;

}

function createMenuItem(name, info, img) {
    const item = document.createElement('div')
    const title = document.createElement('h2');
    title.textContent = name;
    const desc = document.createElement('p');
    desc.textContent = info;
    const image = new Image(250, 200);
    image.src = img;

    item.appendChild(title);
    item.appendChild(desc);
    item.appendChild(image);

    return item;
}

export default function loadMenu() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createMenu());
}