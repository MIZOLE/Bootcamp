let image = document.querySelector(".slide-image");
let list1 = document.getElementById("list")
// let imageNumber = document.querySelector(".slide-image-number");
// let totalImageNumber = document.querySelector(".total-image-number");

let currentImage = 0;

function push_images() {
    let new_image = document.getElementById("picture1").value
    console.log(Myimages)

    Myimages.push(new_image)

    sessionStorage.setItem("img", Myimages)
    sessionStorage.getItem("img")
}

function remove_picture(){
     Myimages = [];
}

function show_list (){
    document.getElementsByClassName("list").innerHTML = Myimages[currentImage];
}

let Myimages = [
    "girl_hat.jpg",
    "LAP.jpg",
    "Ai.jpg",
];

function push_images() {
    let new_image = document.getElementById("picture1").value
    console.log(Myimages)

    Myimages.push(new_image)

    sessionStorage.setItem("img", check)
    sessionStorage.getItem("img")
}
function nextImage() {

    if (image[currentImage]) {
        Myimages.push(insert)

    }
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

    currentImage--

    if (currentImage < 0) {
        currentImage = Myimages.length - 1
    }
    image.src = Myimages[currentImage];

}
