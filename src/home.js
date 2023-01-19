function createHome() {
    const home = document.createElement('div');
    home.classList.add('wrapper')

    home.appendChild(createTitle('Bikini Bottom Krabb Shack'))



    return home;
}

function createTitle(text) {
    const title = document.createElement('h1');
    title.classList.add('title')
    title.textContent = text
    return title;
}

function loadHome() {
    const main = document.getElementById('main');
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;