

function love() {

const name1 = document.getElementById("nameOne");
const name2 = document.getElementById("nameTwo");
const error = document.getElementById("error");
const answer = document.getElementById("answer");
const statement = document.getElementById("statement");
var randomLove = Math.floor(Math.random() * 100) + 1;
var newLove = randomLove;

    if(name1.value=="" || name2.value=="") {
      alert("⛔️Invalid name(Form cannot be empty)");
      // error.style.visibility = 'visible';
      // error.innerText = "⛔️Invalid name(Form cannot be empty)";
      // error.style.color = "purple"
    } else if (name1.value.length<3 || name2.value.length<3) {
      alert("Please enter at least 3 characters");
      // error.style.visibility = 'visible';
      // error.innerText = "Insert at least 3 characters";
      // error.style.color = "red";
    } else if(newLove == randomLove){
      answer.innerText = name1.value + " and " + name2.value + " = " + randomLove + "% of Love";
      if(randomLove >= 100) {
         statement.style.visibility = 'visible';
         statement.innerText = "You are a match made in HEAVEN🌹💘💞Your LOVE deserve some fireworks💥✨"
       }else if (randomLove >70) {
          statement.style.visibility = 'visible';
          statement.innerText = "You LOVE each other so much💘💞";
        }else if (randomLove >=50 && randomLove <70) {
          statement.style.visibility = 'visible';
          statement.innerText = "There's a spark of Love, with a little work your Love can blossom💞"
        }else if (randomLove >= 40 && randomLove <50) {
         statement.style.visibility = 'visible';
         statement.innerText = "Your love can work with a lof of MONEY, ATTENTION and CARE else Heartbreak awaits you both!"
       }else {
       statement.style.visibility = 'visible';
       statement.innerText = "💔🚩🚩You both can NEVER work in this life, Your love is fake!!!💔🚩🚩"

     }
     document.addEventListener("click", function(event) {
       document.getElementById("button").disabled = true;

     });

    }


}
