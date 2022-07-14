const mycar = document.getElementById("mycar");
const enemycar = document.getElementsByClassName("cars")[0];

let carpos = 1;
let enemypos = 1;


document.addEventListener("keydown", function(e){
    if (e.code=="KeyA"){
        if (carpos==1){ 
            move10();
            carpos=0;
            mycar.style.left = "50px";
        }
        if (carpos==2){ 
            move21();
            carpos=1;
            mycar.style.left = "125px";
        }
    }
    if (e.code=="KeyD"){
        if (carpos==1){
            move12();
            carpos=2; 
            mycar.style.left = "200px";
        }
        if (carpos==0){ 
            move01();
            carpos=1;
            mycar.style.left = "125px"; 
        }
    }
})

function move10(){
    mycar.classList.add("move10");
}
function move01(){
    mycar.classList.add("move01");
}
function move12(){
    mycar.classList.add("move12");
}
function move21(){
    mycar.classList.add("move21");
}
function CarsMov(){
    document.getElementsByClassName("cars").classList.add("CarsMov")
}

let theEnd = setInterval( function(){
    let enemycarTop = parseInt(window.getComputedStyle(enemycar).getPropertyValue("top"));
    let enemycarLeft = parseInt(window.getComputedStyle(enemycar).getPropertyValue("left"));
    let mycarLeft = parseInt(window.getComputedStyle(mycar).getPropertyValue("left"));
    if (enemycarTop>460 && Math.abs(enemycarLeft-mycarLeft)<50){
        alert("Game over, press f5 to try again "+enemypos);
    }
}, 5)

/*
let newEnemy = setInterval( function(){
    let enemycarTop = parseInt(window.getComputedStyle(enemycar).getPropertyValue("top"));
    if (enemycarTop>490){   
        enemypos = Math.floor(Math.random() * 3);
        if (enemypos==0){
            document.getElementsByClassName("cars")[0].remove();
            document.getElementsByClassName("cars").add(document.createElement("mycar"));
        };
        if (enemypos==1){
            document.getElementsByClassName("cars")[0].remove();
            document.getElementsByClassName("cars").add();
        }
        if (enemypos==2){
            document.getElementsByClassName("cars")[0].remove();
            document.getElementsByClassName("cars").add();
        }
    }
}, 5)
*/