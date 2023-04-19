let image = document.querySelector(".slide-image");
let list1 = document.getElementById("list")

let currentImage = 0;


let Myimages = [
    "girl_hat.jpg",
    "LAP.jpg",
    "Ai.jpg"
]

image.src = Myimages[currentImage];



if (sessionStorage.getItem("check")) {
    Myimages = JSON.parse(sessionStorage.getItem("check"))
} else {
    Myimages
}

// function show_list() {
//     document.getElementsByClassName("list").innerHTML = Myimages[currentImage];
//}

function nextImage() {
    if (image[currentImage]) {
        Myimages.push(insert)
    }
    image.src = Myimages[currentImage];

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

    if (new_image == null || new_image == "") {
        alert("Please insert a picture")
    } else if (!Myimages.includes(new_image)) {
        alert("This image already exists")
    } else {
        Myimages.push(new_image)
    }

    //add my array to local storage and convert my array to a string
    sessionStorage.setItem("check", JSON.stringify(Myimages))

    //the window to reload after submision 
    window.location.reload()
}

function remove_picture() {
    
    if(Myimages){
        Myimages.splice(currentImage, 1)
    }

    sessionStorage.setItem("check", JSON.stringify(Myimages))
    
    window.location.reload()
}

if(Myimages.length == ""){
    
}
