import pets from '../../assets/data/pets.js';


//hamburger
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-menu');
let prevCards = new Set();
let countCards = calccountCards();
let overlayHamburger = document.querySelector('.hamburger-overlay');

function toggleMenu() {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    overlayHamburger.classList.toggle('active');
    document.querySelector('html').classList.toggle('no-active');
}

function closeMenu(event) {

    if (event.target.className === 'link') {

        hamburger.classList.remove('open');
        nav.classList.toggle('open');
        overlayHamburger.classList.toggle('active');
        document.querySelector('html').classList.toggle('no-active');
  }
}

hamburger.addEventListener('click', toggleMenu);
nav.addEventListener('click', closeMenu);
overlayHamburger.addEventListener('click', toggleMenu);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function addCard() {
    
    let wrapCards = document.querySelector('.cards');

    wrapCards.classList.add("anim-cards");

    setTimeout(() => {
    wrapCards.innerHTML = '';

    for (let index of prevCards) {
        
        let card = `<div class="card" data-name="${pets[index].name}">
                        <img class="img-pets" data-name="${pets[index].name}" src="../../assets/images/img-cards/${pets[index].name}.png">
                        <h4 class="title-pets" data-name="${pets[index].name}" >${pets[index].name}</h4>
                        <button class="btn" data-name="${pets[index].name}" >Learn more</button>
                    </div>`

        wrapCards.insertAdjacentHTML('beforeend', card);   
        
    }
    }, 1000);
    setTimeout(() => {
        wrapCards.classList.remove("anim-cards");    
    }, 2000);
}

function generationIndexCards() {
    let nextCards = new Set();

    while (nextCards.size !== calccountCards()) {
        let indexCard = getRandomInt(0, 8);
        if (!prevCards.has(indexCard)) {
            nextCards.add(indexCard);
        }
    }
    prevCards.clear();
    prevCards = new Set(nextCards);
    addCard();
}

function calccountCards() {
    if (window.matchMedia("(min-width: 1280px)").matches) {
        return 3;
    } 
    else if (window.matchMedia("(min-width: 768px)").matches) {
        return 2;
    }
    else if (window.matchMedia("(max-width: 767px)").matches) {
        return 1;
    }
}

function screenWidth () {
    if (countCards != calccountCards()) {
        generationIndexCards();
        addCard();
    }
    countCards = calccountCards();
    
}
window.addEventListener("resize", screenWidth);

let slider = document.querySelector('.slider');

function flippingSlider (event) {
    // console.log('ddddd');
    if (event.target.className === 'button_arrow_forward' || event.target.className === 'button_arrow_back') {
        generationIndexCards();
    }
}
slider.addEventListener('click', flippingSlider)




//local storage
function setLocalStorage() {
    // localStorage.setItem('', );
}
window.addEventListener('beforeunload', setLocalStorage)
  
function getLocalStorage() {
    generationIndexCards();
//     if (localStorage.getItem('')) {
//         const  = localStorage.getItem('');
//     }
    // if (localStorage.getItem('lang')) {
    //     const lang = localStorage.getItem('lang');
    //     if (lang === 'en') {
    //         getTranslate('en')
    //     } else if (lang === 'ru') {
    //         getTranslate('ru')
    //     }
    // }
}
window.addEventListener('load', getLocalStorage)



