
    var randomNumber1 = Math.floor(Math.random()*6)+1;
    var diceImage1="dice" + randomNumber1 +".png";// random images we've get
    var diceImageSource1="images/"+diceImage1;//source Images
    var image1=document.querySelectorAll("img")[0];
    image1.setAttribute("src",diceImageSource1);

    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var diceImage2="dice" + randomNumber2 +".png";// random images we've get
    var diceImageSource2="images/"+diceImage2;//source Images
    var image2=document.querySelectorAll("img")[1];
    image2.setAttribute("src",diceImageSource2)    

    if (randomNumber1>randomNumber2 ) {
        document.querySelector("h1").innerHTML="Player first Wins!";
    }
    else if (randomNumber2>randomNumber1 ) {
        document.querySelector("h1").innerHTML="Player Second Wins!";
    }
    else{
        document.querySelector("h1").innerHTML="It's Draw!";
    }
