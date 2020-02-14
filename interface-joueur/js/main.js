var aleatoire = Math.floor((Math.random() * 10) + 1);
console.log(aleatoire)

let home = document.querySelector("#ac");
let win = document.querySelector("#win");
let loose = document.querySelector("#loose");


var btn1 = document.querySelector('.bt1');
var btn3 = document.querySelector('.bt3');

let counter = 0


btn1.onclick = function() {
    var num1 = document.querySelector('#utilisateur1').value;
    console.log(num1)

    if (num1 == aleatoire) {
        home.style.display = "none";
        win.style.display = "flex";
    }
    else{
        home.style.backgroundImage = 'url("./img/games-pics/retry.png")';
        counter++;
        if (counter == 3) {
        home.style.display = "none";
        loose.style.display = "flex";
        }
    }
}

btn3.onclick = function(){
    location.reload();
}