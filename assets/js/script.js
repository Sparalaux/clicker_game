const click = document.querySelector("#click");
const score = document.querySelector("#score");
const shopitem1 = document.querySelector("#shopitem1");
const shopitem2 = document.querySelector("#shopitem2");
const shopitem3 = document.querySelector("#shopitem3");
const shopitem4 = document.querySelector("#shopitem4");
const shopitem5 = document.querySelector("#shopitem5");
const shopitem6 = document.querySelector("#shopitem6");
const shopitem7 = document.querySelector("#shopitem7");
const shopitem8 = document.querySelector("#shopitem8");
console.log(click);
console.log(score);




var compteur = 0;
var clicksouris = 1;
var imagechanger1 = false;
var imagechanger2 = false;
var imagechanger3 = false;
var prix1 = 10;
var prix2 = 30;
var prix3 = 100;
var prix4 = 300;
var prix5 = 1000;
var prix6 = 1500;
var prix7 = 1700;
var prix8 = 2500;
click.addEventListener("click", () => {
    compteur+=clicksouris;
    score.innerHTML = "score: "+Math.ceil(compteur);

});

shopitem1.addEventListener("click", () =>{
    if(compteur>=prix1){
        compteur-=prix1;
        Math.ceil(prix1 = prix1*1.2);
        score.innerHTML = "score: "+Math.ceil(compteur);
        shopitem1.innerHTML = "nourriture: daphnies "+Math.ceil(prix1);
        setInterval(()=>{
            compteur+=1;
            score.innerHTML = "score: "+Math.ceil(compteur);
        }, 1000);
    }
});

shopitem2.addEventListener("click",()=>{
    if(compteur>=prix2){
        compteur-=prix2;
        Math.ceil(prix2 = prix2*3);
        score.innerHTML = "score: "+Math.ceil(compteur);
        clicksouris+=1;
        shopitem2.innerHTML = "petit aquarium "+Math.ceil(prix2);
        if(click.src == "https://sparalaux.github.io/clicker_game/assets/image/oeuf_axolotl.jpg" && !imagechanger1){
            click.src = "https://sparalaux.github.io/clicker_game/assets/image/bébé_axolotl.jpg";
            imagechanger1 = true;
            console.log(click.src);
        }
    }
});

shopitem3.addEventListener("click", () =>{
    if(compteur>=prix3){
        compteur-=prix3;
        Math.ceil(prix3 = prix3*1.5);
        score.innerHTML = "score: "+Math.ceil(compteur);
        shopitem3.innerHTML = "nourriture: vers de vase "+Math.ceil(prix3);
        setInterval(()=>{
            compteur+=5;
            score.innerHTML = "score: "+Math.ceil(compteur);
        }, 3000);
    }
});

shopitem4.addEventListener("click", () =>{
    if(compteur>=prix4){
        compteur-=prix4;
        Math.ceil(prix4 = prix4*1.5);
        score.innerHTML = "score: "+Math.ceil(compteur);
        shopitem4.innerHTML = "nourriture: petite crevette "+Math.ceil(prix4);
        setInterval(()=>{
            compteur+=15;
            score.innerHTML = "score: "+Math.ceil(compteur);
        }, 5000);
    }
});

shopitem5.addEventListener("click",()=>{
    if(compteur>=prix5){
        compteur-=prix5;
        Math.ceil(prix5 = prix5*5);
        score.innerHTML = "score: "+Math.ceil(compteur);
        clicksouris+=5;
        shopitem5.innerHTML = "grand aquarium "+Math.ceil(prix5);
        if(click.src == "https://sparalaux.github.io/clicker_game/assets/image/b%C3%A9b%C3%A9_axolotl.jpg" && !imagechanger2){
            click.src = "https://sparalaux.github.io/clicker_game/assets/image/axolotl.jpg";
            imagechanger2 = true;
            console.log(console.log(click.src));
        }
    }
});

shopitem6.addEventListener("click", () =>{
    if(compteur>=prix6){
        compteur-=prix6;
        Math.ceil(prix6 = prix6*1.7);
        score.innerHTML = "score: "+Math.ceil(compteur);
        shopitem4.innerHTML = "nourriture: petite crevette "+Math.ceil(prix6);
        setInterval(()=>{
            compteur+=25;
            score.innerHTML = "score: "+Math.ceil(compteur);
        }, 7000);
    }
});

shopitem7.addEventListener("click", () =>{
    if(compteur>=prix7){
        compteur-=prix7;
        Math.ceil(prix7 = prix7*1.7);
        score.innerHTML = "score: "+Math.ceil(compteur);
        shopitem4.innerHTML = "nourriture: petite crevette "+Math.ceil(prix7);
        setInterval(()=>{
            compteur+=50;
            score.innerHTML = "score: "+Math.ceil(compteur);
        }, 10000);
    }
});

shopitem8.addEventListener("click",()=>{
    if(compteur>=prix8){
        compteur-=prix8;
        Math.ceil(prix8 = prix8*5);
        score.innerHTML = "score: "+Math.ceil(compteur);
        clicksouris+=20;
        shopitem5.innerHTML = "grand aquarium "+Math.ceil(prix8);
        if(click.src == "https://sparalaux.github.io/clicker_game/assets/image/b%C3%A9b%C3%A9_axolotl.jpg" && !imagechanger3){
            click.src = "https://sparalaux.github.io/clicker_game/assets/image/sauvage_axolotl.jpg";
            imagechanger2 = true;
            console.log(console.log(click.src));
        }
    }
});