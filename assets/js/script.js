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
    score.innerHTML = "score: "+compteur;

});

shopitem1.addEventListener("click", () =>{
    if(compteur>=prix1){
        compteur-=prix1;
        Math.ceil(prix1 = prix1*1.2);
        score.innerHTML = "score: "+compteur;
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
        score.innerHTML = "score: "+compteur;
        clicksouris+=1;
        if(click.outerHTML == '<img id="click" src="./assets/image/oeuf_axolotl.jpg" alt="">'){
            click.outerHTML = '<img id="click" src="./assets/image/bébé_axolotl.jpg" alt="">';
            console.log("image changer");
        }
    }
});