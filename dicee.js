let player1 = document.getElementsByClassName('btn-1');
let player2 = document.getElementsByClassName('btn-2');
let res = document.getElementsByClassName('heading');
let val1, val2; 
let ctr = 0;
dice_images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

player1[0].addEventListener('click', function(){
    val1 = Math.floor(Math.random() * 6);
    console.log(val1);
    let ul = dice_images[val1];
    player1[0].style.background = "url(" + ul + ")";
    player1[0].style.backgroundSize =  "145px 145px";
    ctr = ctr + 1;
    if(ctr >= 2)
    con();
});

player2[0].addEventListener('click', function(){
    val2 = Math.floor(Math.random() * 6);
    let ul = dice_images[val2];
    console.log(ul);
    player2[0].style.background = "url(" + ul + ")";
    player2[0].style.backgroundSize =  "145px 145px";
    ctr = ctr + 1;
    if(ctr >= 2)
    con(); 
});

let con = function(){
if(val1 > val2)
res[0].textContent = "Player1 is the winner!!!";
else {if(val2 > val1)
res[0].textContent = "Player2 is the winner!!!";
else
res[0].textContent = "It's a tie!!!";}}



