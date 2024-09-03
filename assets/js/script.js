const click = document.querySelector("#click");
const score = document.querySelector("#score");
const shopitem1 = document.querySelector("#shopitem1");
const shopitem2 = document.querySelector("#shopitem2");
console.log(click);
console.log(score);




var compteur = 0;
var clicksouris = 1;
click.addEventListener("click", () => {
    compteur+=clicksouris;
    score.innerHTML = "score: "+compteur;

});

shopitem1.addEventListener("click", () =>{
    if(compteur>=10){
        compteur-=10;
        score.innerHTML = "score: "+compteur;
        setInterval(()=>{
            compteur+=1;
            score.innerHTML = "score: "+compteur;
        }, 1000);
    }
});

shopitem2.addEventListener("click",()=>{
    if(compteur>=30){
        compteur-=30;
        score.innerHTML = "score: "+compteur;
        clicksouris+=1;
        if(click.outerHTML == '<img id="click" src="./assets/image/oeuf_axolotl.jpg" alt="">'){
            click.outerHTML = '<img id="click" src="./assets/image/bébé_axolotl.jpg" alt="">';
            console.log("image changer");
        }
    }
});