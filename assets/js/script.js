const click = document.querySelector("#click");
const score = document.querySelector("#score");
const shopitem1 = document.querySelector("#shopitem1");
const shopitem2 = document.querySelector("#shopitem2");
const shopitem3 = document.querySelector("#shopitem3");
const shopitem4 = document.querySelector("#shopitem4");
console.log(click);
console.log(score);




var compteur = 0;
var clicksouris = 1;
var prix1 = 10;
var prix2 = 30;
var prix3 = 100;
var prix4 = 300;
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
        if(click.src == "https://sparalaux.github.io/clicker_game/assets/image/oeuf_axolotl.jpg"){
            click.src = "https://sparalaux.github.io/clicker_game/assets/image/bébé_axolotl.jpg";
            console.log("image changer");
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