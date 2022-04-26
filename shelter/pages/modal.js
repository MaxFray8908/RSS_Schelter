import pets from '../assets/data/pets.js';

let cards = document.querySelector('.cards');
let modal = document.querySelector('.modal');
// let overlay = document.querySelector('.overlay');
let overlayModal = document.querySelector('.modal-overlay');
let buttonClose = document.querySelector('.button_close');


function openingModal(event) {

    if (event.target.className !== 'cards') {

        modal.classList.toggle('active');
        overlayModal.classList.toggle('active');
        document.querySelector('html').classList.toggle('no-active');

        let name = event.target.dataset.name;

        document.querySelector('.modal-img').src = `../../assets/images/img-cards/${name}.png`;
        document.querySelector('.modal-name').innerHTML = name;
        pets.forEach( elem => {
            if (elem.name === name) {
                document.querySelector('.modal-breed').innerHTML = `${elem.type} - ${elem.breed}`;
                document.querySelector('.modal-description').innerHTML = `${elem.description}`;
                document.querySelector('.age').innerHTML = `${elem.age}`;
                document.querySelector('.inoculations').innerHTML = ` ${elem.inoculations}`;
                document.querySelector('.diseases').innerHTML = ` ${elem.diseases}`;
                document.querySelector('.parasites').innerHTML = ` ${elem.parasites}`;
            }
        });
        
    }
}

function closeModal() {
    modal.classList.toggle('active');
    overlayModal.classList.toggle('active');
    document.querySelector('html').classList.toggle('no-active');
}


cards.addEventListener('click', openingModal);
overlayModal.addEventListener('click', closeModal);
buttonClose.addEventListener('click', closeModal);