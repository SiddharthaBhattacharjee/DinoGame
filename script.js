const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
let score = 0;

function jump(){
    if(dino.classList != "jump"){
        dino.classList.add("jump");

        setTimeout(function(){
            dino.classList.remove("jump");
        }
        , 300);
    }
    
}

function start(){
    if(cactus.classList != "start"){
        cactus.classList.add("start");
    }
    
}

let isAlive = setInterval(function(){
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusPos = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
    
    if(cactusPos < 50 && cactusPos > 0 && dinoTop >= 140){
        alert("Game Over , Score : "+score);
        location.reload();
    }
    if(cactusPos <=0){
        score++;
        if(score<10){
            document.getElementById("score").innerHTML = "Score : 000"+score;
        }
        else if(score>=10 && score<100){
            document.getElementById("score").innerHTML = "Score : 00"+score;
        }
        else if(score>=100 && score<1000){
            document.getElementById("score").innerHTML = "Score : 0"+score;
        }
        else{
            document.getElementById("score").innerHTML = "Score : "+score;
        }
    }

},10);

document.addEventListener("keydown", function (event) {
    jump();
});

document.addEventListener("keydown", function (event) {
    start();
});