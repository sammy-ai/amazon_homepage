// The hamburger/bars
const menuButton = document.querySelector('.bars');
const menu = document.querySelector('.menu');
const pos = document.querySelector('.newPos');
const logo = document.querySelector('.amazon');
const cross = document.querySelector('.cross');

// set initial state of menu
let showMenu = false;

// Add eventListener
menuButton.addEventListener('click', toggleMenu);
cross.addEventListener('click', toggleMenu);

// create a function that will display or remove menu
function toggleMenu() {
    if(!showMenu) {
        menuButton.classList.add("hidden");
        menu.classList.add("flex-col");
        menu.classList.remove("hidden");
        logo.classList.add("hidden");
        cross.classList.add("flex");
        cross.classList.remove("hidden");
        pos.classList.add('fixed');

        // set state of menu
        showMenu = true;
    } else {
        menuButton.classList.remove("hidden");
        menu.classList.add("hidden");
        logo.classList.add("flex");
        logo.classList.remove("hidden");
        cross.classList.add("hidden");
        pos.classList.remove('fixed');

        // set state of menu
        showMenu = false;
    }
}
