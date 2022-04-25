const PAGLAST = document.querySelector("#arrow__last")
const PAGNEXT = document.querySelector("#arrow__next")
const PAGNUMBER = document.querySelector("#number")
const PAGBEFORE = document.querySelector("#arrow__before")
const PAGFIRST = document.querySelector("#arrow__first")
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
let cardsOnScreen = window.innerWidth > '1315' ? 8 :
window.innerWidth <= '1315' && window.innerWidth > '618' ? 6 : 3;
let cardsArr = [];
let CARDScpy = [];
const MAXPAGES = Math.trunc(48 / cardsOnScreen);

for (let i = 0; i < 48; i++) {
    if (CARDScpy.length === 0) CARDScpy = [...CARDS].sort(() => Math.random() - 0.5);
    cardsArr.push(CARDScpy.shift());
}

let screenNum = 1;

const moveNext = () => {
    event.preventDefault();
    for (let i = 1 ; i < cardsOnScreen + 1; i++) {
        document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML = cardsArr[i + cardsOnScreen * screenNum - 1];
    }
    screenNum++;
    checkStatus();
}

const moveBefore = () => {
    event.preventDefault();
    for (let i = 1; i < cardsOnScreen + 1; i++) {
        document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML = cardsArr[i + cardsOnScreen * (screenNum - 2) - 1];
    }
    screenNum--;
    checkStatus();
}

const moveFirst = () => {
    event.preventDefault();
    for (let i = 1; i < cardsOnScreen + 1; i++) {
        document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML = cardsArr[i + cardsOnScreen];
    }
    screenNum = 1;
    checkStatus();
}

const moveLast = () => {
    event.preventDefault();
    for (let i = 1; i < cardsOnScreen + 1; i++) {
        document.querySelector(`.popup__link:nth-child(${i}) .friends__card`).innerHTML = cardsArr[i + cardsOnScreen * MAXPAGES - cardsOnScreen - 1];
    }
    screenNum = MAXPAGES;
    checkStatus();
}

const checkStatus = () => {
    if (screenNum === 1) {
        PAGFIRST.classList.remove('active');
        PAGBEFORE.classList.remove('active');
        PAGFIRST.removeEventListener("click", moveFirst);
        PAGBEFORE.removeEventListener("click", moveBefore);

    } else {
        PAGFIRST.classList.add('active');
        PAGBEFORE.classList.add('active');
        PAGFIRST.addEventListener("click", moveFirst);
        PAGBEFORE.addEventListener("click", moveBefore);
    }
    if (screenNum === MAXPAGES) {
        PAGLAST.classList.remove('active');
        PAGNEXT.classList.remove('active');
        PAGLAST.removeEventListener("click", moveLast);
        PAGNEXT.removeEventListener("click", moveNext);
    } else {
        PAGLAST.classList.add('active');
        PAGNEXT.classList.add('active');
        PAGLAST.addEventListener("click", moveLast);
        PAGNEXT.addEventListener("click", moveNext);
    }
    PAGNUMBER.innerText = screenNum;
}

checkStatus();

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