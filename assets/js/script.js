const click = document.querySelector("#click");
const score = document.querySelector("#score");
const shopitem1 = document.querySelector("#shopitem1");
const shopitem2 = document.querySelector("#shopitem2");
console.log(click);
console.log(score);




var compteur = 0;
var clicksouris = 1;
var prix1 = 10;
var prix2 = 30;
click.addEventListener("click", () => {
    compteur+=clicksouris;
    score.innerHTML = "score: "+Math.ceil(compteur);

});

shopitem1.addEventListener("click", () =>{
    if(compteur>=prix1){
        compteur-=prix1;
        Math.ceil(prix1 = prix1*1.2);
        score.innerHTML = "score: "+Math.ceil(compteur);
        setInterval(()=>{
            compteur+=1;
            score.innerHTML = "score: "+compteur;
        }, 1000);
    }
});

shopitem2.addEventListener("click",()=>{
    if(compteur>=prix2){
        compteur-=prix2;
        Math.ceil(prix2 = prix2*1.2);
        score.innerHTML = "score: "+Math.ceil(compteur);
        clicksouris+=1;
        if(click.currentSrc == "https://sparalaux.github.io/clicker_game/assets/image/oeuf_axolotl.jpg"){
            click.currentSrc = "https://sparalaux.github.io/clicker_game/assets/image/bébé_axolotl.jpg";
            console.log("image changer");
            console.log(click);
        }
    }
});