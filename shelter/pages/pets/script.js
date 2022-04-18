//hamburger
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-menu');
const bodyBackground = document.querySelector('body');

function toggleMenu() {
    console.log('ddd');
    hamburger.classList.toggle('open');
    nav.classList.toggle('open');
    bodyBackground.classList.toggle('no-activ');
}

// // function closeMenu(event) {
// //   if (event.target.classList.contains('nav-item')) {
// //     hamburger.classList.remove('open');
// //     nav.classList.toggle('open');
// //   }
// // }

hamburger.addEventListener('click', toggleMenu);
// nav.addEventListener('click', closeMenu);


function addCard(cointCards) {
    let wrapCards = document.querySelector('.cards_container');
    const petsCard = ['Katrine', 'Jennifer', 'Woody', 'Sophia', 'Timmy', 'Charly', 'Scarlet', 'Freddie'] 

    wrapCards.innerHTML = '';

    for (let i = 0; i < cointCards; i++) {
        let card = `<div class="card">
                        <img class="img-pets" src="../../assets/images/img-cards/${petsCard[i]}.png">
                        <h4 class="title-pets">${petsCard[i]}</h4>
                        <button class="btn">Learn more</button>
                    </div>`

        wrapCards.insertAdjacentHTML('beforeend', card);        
    }
    
}

function screenWidth () {
    if (window.matchMedia("(min-width: 1280px)").matches) {
        addCard(8);
    } 
    else if (window.matchMedia("(min-width: 768px)").matches) {
        addCard(6);
    }
    else if (window.matchMedia("(min-width: 320px) and (max-width: 767px)").matches) {
        addCard(3);
    }
}

window.addEventListener("resize", screenWidth);








//local storage
function setLocalStorage() {
    // localStorage.setItem('', );
}
window.addEventListener('beforeunload', setLocalStorage)
  
function getLocalStorage() {
    screenWidth ();

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