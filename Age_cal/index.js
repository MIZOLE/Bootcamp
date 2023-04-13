function Cal_Age() {
    let birthday = document.querySelector(".age").value;

    let get_age = new Date() - birthday;

     if (!get_age) { //if it's not
        alert("Enter your born year")
    } 
    else if (get_age <= 0){
        alert("It should not be a nagetive number")
    }

    else if (get_age.getFullYear()) {
        //to calculate my age
        alert("Hey this year you are, " + get_age + " years of age")
    }
}

// Cal_Age(2005)



