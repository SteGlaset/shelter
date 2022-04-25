const BTN_LEFT = document.querySelector("#btn__left");
const BTN_RIGHT = document.querySelector("#btn__right");
const CAROUSEL = document.querySelector("#friends__cards");
const CARD1 = document.querySelector(".popup__link:nth-child(1) .friends__card");
const CARD2 = document.querySelector(".popup__link:nth-child(2) .friends__card");
const CARD3 = document.querySelector(".popup__link:nth-child(3) .friends__card");
const CARD4 = document.querySelector(".popup__link:nth-child(4) .friends__card");
const CARD5 = document.querySelector(".popup__link:nth-child(5) .friends__card");
const CARD6 = document.querySelector(".popup__link:nth-child(6) .friends__card");
const CARD7 = document.querySelector(".popup__link:nth-child(7) .friends__card");
const CARD8 = document.querySelector(".popup__link:nth-child(8) .friends__card");
const CARD9 = document.querySelector(".popup__link:nth-child(9) .friends__card");
const CARDS = [
    `<img src='./../../assets/images/pets-katrine.webp' alt='Katrine' class='card__img'>
    <h4 class='card__title'>Katrine</h4>
    <button class='card__btn'>Learn more</button>`,
    `<img src='./../../assets/images/pets-jennifer.webp' alt='Jennifer' class='card__img'>
    <h4 class='card__title'>Jennifer</h4>
    <button class='card__btn'>Learn more</button>`,
    `<img src='./../../assets/images/pets-woody.webp' alt='Woody' class='card__img'>
    <h4 class='card__title'>Woody</h4>
    <button class='card__btn'>Learn more</button>`,
    `<img src='./../../assets/images/pets-sophia.webp' alt='Sophia' class='card__img'>
    <h4 class='card__title'>Sophia</h4>
    <button class='card__btn'>Learn more</button>`,
    `<img src='./../../assets/images/pets-timmy.webp' alt='Timmy' class='card__img'>
    <h4 class='card__title'>Timmy</h4>
    <button class='card__btn'>Learn more</button>`,
    `<img src='./../../assets/images/pets-charly.webp' alt='Charly' class='card__img'>
    <h4 class='card__title'>Charly</h4>
    <button class='card__btn'>Learn more</button>`,
    `<img src='./../../assets/images/pets-scarlett.webp' alt='Scarlett' class='card__img'>
    <h4 class='card__title'>Scarlett</h4>
    <button class='card__btn'>Learn more</button>`,
    `<img src='./../../assets/images/pets-freddie.webp' alt='Freddie' class='card__img'>
    <h4 class='card__title'>Freddie</h4>
    <button class='card__btn'>Learn more</button>`
]

const createCardTemplate = () => {
    const card = document.createElement("li");
    card.classList.add("friends__card");
    return card;
}

const moveLeft = () => {
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

    if (window.innerWidth > '1280') CAROUSEL.addEventListener("animationend", animationEvent => {
        if (animationEvent.animationName === "move-left") {
            CAROUSEL.classList.remove("transition-left");
            CARD4.innerHTML = CARD1.innerHTML;
            CARD5.innerHTML = CARD2.innerHTML;
            CARD6.innerHTML = CARD3.innerHTML;
        } else {
            CAROUSEL.classList.remove("transition-right");
            CARD4.innerHTML = CARD7.innerHTML;
            CARD5.innerHTML = CARD8.innerHTML;
            CARD6.innerHTML = CARD9.innerHTML;
        }
    
        do {
            for (let i = 1; i < 4; i++) {
                do {
                    document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML = CARDS[Math.floor(Math.random() * 8)];
                }
                while (
                    document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML == CARD4.innerHTML ||
                    document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML == CARD5.innerHTML ||
                    document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML == CARD6.innerHTML
                );
            }
        }
        while (
            CARD1.innerHTML == CARD2.innerHTML ||
            CARD2.innerHTML == CARD3.innerHTML ||
            CARD3.innerHTML == CARD1.innerHTML);
    
        do {
            for (let i = 7; i < 10; i++) {
                do {
                    document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML = CARDS[Math.floor(Math.random() * 8)];
                }
                while (
                    document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML == CARD4.innerHTML ||
                    document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML == CARD5.innerHTML ||
                    document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML == CARD6.innerHTML
                );
            }
        } while (
            CARD7.innerHTML == CARD8.innerHTML ||
            CARD8.innerHTML == CARD9.innerHTML ||
            CARD9.innerHTML == CARD7.innerHTML);
    
        BTN_LEFT.addEventListener("click", moveLeft);
        BTN_RIGHT.addEventListener("click", moveRight);
    });

    else if (window.innerWidth <= '975' && window.innerWidth > '767') CAROUSEL.addEventListener("animationend", animationEvent => {
        if (animationEvent.animationName === "move-left") {
            CAROUSEL.classList.remove("transition-left");
            CARD3.innerHTML = CARD1.innerHTML;
            CARD4.innerHTML = CARD2.innerHTML;
        } else {
            CAROUSEL.classList.remove("transition-right");
            CARD3.innerHTML = CARD5.innerHTML;
            CARD4.innerHTML = CARD6.innerHTML;
        }
    
        do {
            for (let i = 1; i < 3; i++) {
                do {
                    document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML = CARDS[Math.floor(Math.random() * 8)];
                }
                while (
                    document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML == CARD3.innerHTML ||
                    document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML == CARD4.innerHTML
                );
            }
        }
        while (CARD1.innerHTML == CARD2.innerHTML);
    
        do {
            for (let i = 5; i < 7; i++) {
                do {
                    document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML = CARDS[Math.floor(Math.random() * 8)];
                }
                while (
                    document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML == CARD3.innerHTML ||
                    document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML == CARD4.innerHTML
                );
            }
        } while (CARD5.innerHTML == CARD6.innerHTML);
    
        BTN_LEFT.addEventListener("click", moveLeft);
        BTN_RIGHT.addEventListener("click", moveRight);
    });

    else CAROUSEL.addEventListener("animationend", animationEvent => {
        if (animationEvent.animationName === "move-left") {
            CAROUSEL.classList.remove("transition-left");
            CARD2.innerHTML = CARD1.innerHTML;
        } else {
            CAROUSEL.classList.remove("transition-right");
            CARD2.innerHTML = CARD3.innerHTML;
        }
    
        do {
            CARD1.innerHTML = CARDS[Math.floor(Math.random() * 8)];
        }
        while (
            CARD1.innerHTML == CARD2.innerHTML
        );
    
        do {
            CARD3.innerHTML = CARDS[Math.floor(Math.random() * 8)];
        }
        while (
            CARD3.innerHTML == CARD2.innerHTML
        );
    
        BTN_LEFT.addEventListener("click", moveLeft);
        BTN_RIGHT.addEventListener("click", moveRight);
    });

    //Popup
    const POPUPAREA = document.querySelector(".popup__area");
    const BODY = document.querySelector("html");
    const POPUPLINK = document.querySelectorAll(".popup__link");
    const POPUPCLOSE = document.querySelector(".popup__close");
    /* const bodyLock() {
        const lockPaddingValue = window.innerWidth - POPUP.offsetWidth + 'px';

        for (let i = 0; i < lockPadding.length; i++) {
            const el = lockPadding[i];
            el.style.paddingRight = lockPaddingValue;
        }
        BODY.style.paddingRight = lockPaddingValue;
        BODY.style.overflow = "hidden";
        
        inlock = false;
        setTimeout(function () {
            unlock = true;
        }, timeout)
    } */
    POPUPLINK.forEach(el => el.addEventListener("click", () => {
        BODY.style.overflow = "hidden";
    }));

    POPUPAREA.addEventListener("click", () => {
        BODY.style.overflow = "auto";
    });

    POPUPCLOSE.addEventListener("click", () => {
        BODY.style.overflow = "auto";
    });

