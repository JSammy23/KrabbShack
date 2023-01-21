// import modules
import loadHome from "./home";
import loadMenu from "./menu";
import loadContact from "./contact";


function createHeader() {
    const header = document.createElement('header');
    header.appendChild(createNav())
    return header;
}

function createNav() {
    const nav = document.createElement('nav');


    const homeBtn = document.createElement('button');
    homeBtn.textContent = 'Home'
    homeBtn.addEventListener('click', (e) => {
        // Handle active state
        loadHome()
    })
    

    const menuBtn = document.createElement('button');
    menuBtn.textContent = 'Menu'
    menuBtn.addEventListener('click', (e) => {
        // Handle active state
        loadMenu()
    })


    const contactBtn = document.createElement('button')
    contactBtn.textContent = 'Contact'
    contactBtn.addEventListener('click', (e) => {
        // Handle active state
        loadContact()
    })

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav
}

function createMain() {
    const main = document.createElement('main');
    main.classList.add('main');
    main.setAttribute('id', 'main');
    return main;
}

function initPage() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    content.appendChild(createMain())
    
    loadHome();
}

export default initPage;
