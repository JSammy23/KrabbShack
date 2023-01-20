import KrabbyPatty from './assets/krabbyPatty.gif';

function createHome() {
    const home = document.createElement('div');
    home.classList.add('wrapper', 'home')

    home.appendChild(createTitle('Bikini Bottom Krabb Shack'))
    home.appendChild(createContent())


    return home;
}

function createTitle(text) {
    const title = document.createElement('h1');
    title.classList.add('title')
    title.textContent = text
    return title;
}

function createContent() {
    const newDiv = document.createElement('div');
    const slogan = document.createElement('p');
    newDiv.classList.add('content')
    slogan.textContent = 'Home of the beloved Krabby Patty';
    const patty = new Image(325, 325)
    patty.src = {KrabbyPatty}
    newDiv.appendChild(slogan);
    newDiv.appendChild(patty);

    return newDiv;
}

export default function loadHome() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createHome());
}

