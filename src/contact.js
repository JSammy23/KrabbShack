import lovePatty from './assets/lovePatty.gif';

function createContact() {
    const contact = document.createElement('div');
    contact.classList.add('wrapper');

    contact.appendChild(createTitle('Contact Us'));
    contact.appendChild(createInfo());
    contact.appendChild(createImg());


    return contact;
}

function createTitle(text) {
    const title = document.createElement('h1');
    title.textContent = text;
    return title;
}

function createInfo() {
    const info = document.createElement('p');
    info.textContent = "All of our items are made with care from scratch in house, but our chef special, the signature krabby patty, is always made with love";
    return info;
}

function createImg() {
    const gif = new Image(325, 325);
    gif.src = lovePatty;
    return gif;
}

export default function loadContact() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createContact());
}
