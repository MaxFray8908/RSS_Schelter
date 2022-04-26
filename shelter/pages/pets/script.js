import pets from '../../assets/data/pets.js';

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-menu');
let overlayHamburger = document.querySelector('.hamburger-overlay');
let countCards = calccountCards();
let arrayCards = [];
let numberPage = 1;
let navigation = document.querySelector('.navigation');

function toggleMenu() {
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    overlayHamburger.classList.toggle('active');
    document.querySelector('html').classList.toggle('no-active');
}

function closeMenu(event) {

    if (event.target.classList.contains('link')) {

        hamburger.classList.remove('open');
        nav.classList.toggle('open');
        overlayHamburger.classList.toggle('active');
        document.querySelector('html').classList.toggle('no-active');
  }
}

hamburger.addEventListener('click', toggleMenu);
nav.addEventListener('click', closeMenu);
overlayHamburger.addEventListener('click', toggleMenu);


function addCard() {

    let nextArrayCards = arrayCards.slice((numberPage - 1) * countCards, (numberPage - 1) * countCards + countCards);
    // console.log(nextArrayCards[]);
    let wrapCards = document.querySelector('.cards');
    
    document.querySelector('.current').innerHTML = numberPage;
    
    wrapCards.innerHTML = '';

    for (let item of nextArrayCards) {
        let card = `<div class="card" data-name="${item.name}">
                        <img class="img-pets" data-name="${item.name}" src="../../assets/images/img-cards/${item.name}.png">
                        <h4 class="title-pets" data-name="${item.name}">${item.name}</h4>
                        <button class="btn" data-name="${item.name}">Learn more</button>
                    </div>`

        wrapCards.insertAdjacentHTML('beforeend', card);        
    }

    if (numberPage * countCards === 48) {
        document.querySelectorAll('.next').forEach(event => {
            event.classList.add('inactive');
            event.classList.remove('no-active');
        })
    }
    if (numberPage !== 1) {
        document.querySelectorAll('.prev').forEach(event => {
            event.classList.remove('inactive');
            event.classList.add('no-active');
        })
    }
    if (numberPage === 1) {
        document.querySelectorAll('.prev').forEach(event => {
            event.classList.add('inactive');
            event.classList.remove('no-active');
        })
    }
    if (numberPage * countCards !== 48) {
        document.querySelectorAll('.next').forEach(event => {
            event.classList.remove('inactive');
            event.classList.add('no-active');
        })
    }
}

function screenWidth () {
    if (countCards != calccountCards()) {
        numberPage = 1;
        countCards = calccountCards();
        generationArrayCards();
    }
    countCards = calccountCards();
}

window.addEventListener("resize", screenWidth);


function calccountCards() {
    if (window.matchMedia("(min-width: 1280px)").matches) {
        return 8;
    } 
    else if (window.matchMedia("(min-width: 768px)").matches) {
        return 6;
    }
    else if (window.matchMedia("(max-width: 767px)").matches) {
        return 3;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function generationArrayCards() {

    arrayCards = [];
    let countIndexCards = {'1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0};

    for (let i = 0; i < (48 / countCards); i++) {
        let arrayIndex = new Set();
        while (arrayIndex.size !== countCards) {
            let indexCard = getRandomInt(0, 8);
            if(countIndexCards.indexCard !== 6) {
                
                arrayIndex.add(indexCard);
            }
        }
        
        for(let index of arrayIndex) {
            arrayCards.push(pets[index])
        }
    }
    addCard();
}

function editPage(event) {

    if (event.target.classList.contains('forward') && event.target.classList.contains('no-active')) {
        numberPage += 1;
        addCard();
    }
    else if(event.target.classList.contains('two_forward') && event.target.classList.contains('no-active')) {
        numberPage = 48 / countCards;
        addCard();
    }
    else if(event.target.classList.contains('back') && event.target.classList.contains('no-active')) {
        numberPage -= 1;
        addCard();
    }
    else if(event.target.classList.contains('two_back') && event.target.classList.contains('no-active')) {
        numberPage = 1;
        addCard();
    }
}


navigation.addEventListener('click', editPage)

//local storage
function setLocalStorage() {
    // localStorage.setItem('', );
}
window.addEventListener('beforeunload', setLocalStorage)
  
function getLocalStorage() {
    generationArrayCards();

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
