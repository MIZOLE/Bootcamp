let image = document.querySelector(".slide-image");
let list1 = document.getElementById("list")
// let imageNumber = document.querySelector(".slide-image-number");
// let totalImageNumber = document.querySelector(".total-image-number");

let currentImage = 0;

let Myimages = [
    "girl_hat.jpg",
    "LAP.jpg",
    "Ai.jpg"
]

if (sessionStorage.getItem("check")) {
    Myimages = JSON.parse(sessionStorage.getItem("check"))
} else {
    Myimages
}

// function remove_picture() {
//     Myimages = [];
// }

// function show_list() {
//     document.getElementsByClassName("list").innerHTML = Myimages[currentImage];
//}

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

function push_images() {
    let new_image = document.getElementById("picture2").value
    //pushing my new array to the old array and doing validation using if statement
    if (!Myimages.includes(new_image)) {
        Myimages.push(new_image)
    } else if (!new_image) {
        alert("Please insert a picture")
    } else {
        alert("This image already exists")
    }

    //add my array to local storage and convert my array to a string
    sessionStorage.setItem("check", JSON.stringify(Myimages))

    //the window to reload after submision 
    window.location.reload()

}


