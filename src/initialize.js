// import modules


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

function initPage() {
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    
}

export default initPage;
