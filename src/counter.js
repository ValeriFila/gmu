const images = [];
const autoAnimSliderImage = document.getElementById('autoAnimSliderImage');

let k = 5;
let currentImgIndex = 0;
const IMAGE_WIDTH = document.getElementById('anim_block').offsetWidth;

//бэктики
for (let i = 0; i < k; i++) {
    images.push(i + 1 + '.JPG');
}

//function expression
const buildAutoAnimatedGallery = function () {
    for (let i = 0; i < k; i++) {
        autoAnimSliderImage.innerHTML += `
        <img src = "images/${images[i]}" alt = "university image" width = "${IMAGE_WIDTH}">
    `
    }
};

buildAutoAnimatedGallery();

function slide() {
    if (currentImgIndex === images.length - 1) {
        currentImgIndex = 0;
    } else {
        currentImgIndex += 1;
    }
    autoAnimSliderImage.style.transform = `
    translateX(-${currentImgIndex * IMAGE_WIDTH}px)`;
}

const interval = setInterval(() => {
    slide();
}, 10000);
