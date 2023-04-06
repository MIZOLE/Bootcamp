let image = document.querySelector(".slide-image");
let imageNumber = document.querySelector(".slide-image-number");
let totalImageNumber = document.querySelector(".total-image-number");
let prevBtn = document.querySelector(".backward")
let nextBtn = document.querySelector(".forward")

let Myimages = [
    "./girl_hat.jpg",
    "./LAP.jpg",
    "./Ai.jpg",
];

let currentImage = 0;

function nextImage() {
    image.src = Myimages[currentImage];
    // imageNumber.textContent + 1;
    // // imageNumber.textContent - 1;
    // totalImageNumber = Myimages.length;
    currentImage++

    if (currentImage >= Myimages.length) {
        currentImage = 0;
    }
}

function prevImage() {

    image.src = Myimages[currentImage];

    currentImage --

    if (currentImage < 0) {
        currentImage = Myimages.length -0;
    }
}
