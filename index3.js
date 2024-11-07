const gallery = document.getElementById("gallery");
const fullViewContainer = document.getElementById("fullViewContainer");
const fullViewImage = document.getElementById("fullViewImage");
const fullViewCloseButton = document.getElementById("fullViewCloseButton");

const images = [
    "https://img.championat.com/i/v/i/1706191066577310369.jpg",
    "https://img.championat.com/s/732x488/news/big/y/v/otchyot-barselona-valyadolid-7-0_17251265021460647723.jpg",
    "https://pic.sport.ua/images/news/0/17/107/middle_701528.jpg",
    "https://img.championat.com/s/732x488/news/big/h/m/otchyot-barselona-sevilya-5-1_17294609621605053474.jpg",
    "https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/63/d2/19e3393149e0be0d0d6f637357cc61785579b15e93a9b610175347.jpg",
    "https://img.championat.com/s/732x488/news/big/g/j/barselona-valyadolid-prognoz-na-match_17249927861887569302.jpg"
];

images.forEach(createImage);

function createImage(imgSrc) {
    const imageElement = document.createElement("img");
    imageElement.src = imgSrc;
    imageElement.className = "gallery__image";

    imageElement.addEventListener("click", () => {
        showFullView(imgSrc);
    });

    gallery.appendChild(imageElement);
}

function showFullView(imgSrc) {
    fullViewImage.src = imgSrc;
    fullViewContainer.style.display = "flex";
}

fullViewCloseButton.addEventListener("click", () => {
    fullViewContainer.style.display = "none";
});
