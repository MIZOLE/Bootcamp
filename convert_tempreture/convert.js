//Convert fehrentits
function FtoC() {
   let input = document.getElementById("inpu").value

   let F = (input - 32) * 5 / 9

   if (F < 0 ){
      document.getElementById("error1").innerHTML = F + " It is way too cold"
   } else if(F === " "){
      document.getElementById("error1").innerHTML = F + " Please enter a number"
   }
    else if(F < 16){
      document.getElementById("error1").innerHTML = F + " it's cold"
   } 
   else if (F > 16 & F <= 21){
      document.getElementById("error1").innerHTML = F + " It is warm you can wer t-shirts"
   } else if (F >= 21 && F <= 56){
      document.getElementById("error1").innerHTML = F + " it is way too hot   "
   }

}

var i=0;
text = "Let's convert Fahrenheit to Celcias";

function typing(){
  if(i<text.length){
    document.getElementById("typo").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,90);
  }
}

typing();
   