const click = document.querySelector("#click");
const score = document.querySelector("#score");
const shopitem1 = document.querySelector("#shopitem1")
console.log(click);
console.log(score);




var compteur = 0;

click.addEventListener("click", () => {
    compteur+=1;
    score.innerHTML = "score: "+compteur;

})

shopitem1.addEventListener("click", () =>{
    if(compteur>=10){
        compteur-=10;
        score.innerHTML = "score: "+compteur;
        setInterval(()=>{
            compteur+=1;
            score.innerHTML = "score: "+compteur;
        }, 1000)
    }
})