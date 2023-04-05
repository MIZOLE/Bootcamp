//Convert fehrentits
function FtoC() {

   let input = document.getElementById("inpu").value

   let btn = document.getElementById("button")

   let F = (input - 32) * 5 / 9

   if (F <= 0) {
      alert("It is colder than the north pole!")
   }
   else if (F < 16) {
      alert("It is cold")
   } else if (F >= 16 && F <= 21) {
      alert(" it is warm")
   } else {
      alert("It is too hot, please wear shorts")
   }

}



// FtoC()
// console.log(""FtoC(21) + "" )
// function Cal_Age(born_year) {

//    let get_age = 2023 - born_year;

//    if (get_age < 0) { //it should not be a negetaive number
//       console.log(get_age)
//    } else if (!get_age) { //if it's not
//       console.log("Enter your born year")
//    } else if (get_age) {
//       console.log(get_age) //to calculate my age
//    }
// }

// // return year_was_born
// Cal_Age(2024)
//multipply by 5
//sum the two values = 

