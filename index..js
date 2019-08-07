var randomNumber1 = Math.floor(Math.random() * 3 ) +1;

var randomJokenpoImage = "images/jokenpo" + randomNumber1 + ".png";

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomJokenpoImage);

var randomNumber2 = Math.floor(Math.random() * 3 ) +1;

var randomJokenpoImage2 = "images/jokenpo" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomJokenpoImage2);

    if (randomNumber1 == 1) {
       if (randomNumber2 == 1) {document.querySelector("h1").innerHTML = "DRAW!";}
       if (randomNumber2 == 2) {document.querySelector("h1").innerHTML = "Player 1 WINS!";}
       if (randomNumber2 == 3) {document.querySelector("h1").innerHTML = "Player 2 WINS!";}
    }

    if (randomNumber1 == 2) {
        if (randomNumber2 == 1) {document.querySelector("h1").innerHTML = "Player 2 WINS!";}
        if (randomNumber2 == 2) {document.querySelector("h1").innerHTML = "DRAW!";}
        if (randomNumber2 == 3) {document.querySelector("h1").innerHTML = "Player 1 WINS!";}
     }

     if (randomNumber1 == 3) {
        if (randomNumber2 == 1) {document.querySelector("h1").innerHTML = "Player 1 WINS!";}
        if (randomNumber2 == 2) {document.querySelector("h1").innerHTML = "Player 2 WINS!";}
        if (randomNumber2 == 3) {document.querySelector("h1").innerHTML = "DRAW!";}
     }

     if (document.querySelector("h1").innerHTML == "Player 1 WINS!") {
         document.querySelector("h1").style.color = "darkblue";
     } else if (document.querySelector("h1").innerHTML == "Player 2 WINS!") {
        document.querySelector("h1").style.color = "darkred";
     }
