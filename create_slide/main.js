let image = document.querySelector(".slide-image");
let list1 = document.getElementById("list")
// let imageNumber = document.querySelector(".slide-image-number");
// let totalImageNumber = document.querySelector(".total-image-number");




let Myimages;


if (localStorage.getItem('Myimages')) {
    JSON.parse(localStorage.getItem('Myimages'))
} else {
    Myimages =[
        "girl_hat.jpg",
        "LAP.jpg",
        "Ai.jpg",]
}


function remove_picture() {
    Myimages = [];
}

function show_list() {
    document.getElementsByClassName("list").innerHTML = Myimages[currentImage];
}
let currentImage = 0;

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
let new_image = document.getElementById("picture1").value


function push_images() {

    Myimages.push(new_image)

    // //convert array to string using JSON
    // let converted_aaray = JSON.stringify(Myimages);

    // //save to local storage
    // sessionStorage.setItem('new_array', converted_aaray);

    // //get the JSON string from local storage
    // let STR = sessionStorage.getItem('new_array');

    // //convert JSON string to relevant object
    // let new_array = []

    // new_array.push(STR)
    // console.log(new_array)

    // if (new_array[currentImage]) {
    //     document.getElementsByClassName("slide-image").innerHTML = new_array;
    //  }
}
