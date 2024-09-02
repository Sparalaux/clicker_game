const click = document.querySelector("#click");
const score = document.querySelector("#score");
console.log(click);
console.log(score);
var compteur = 0;
click.addEventListener("click", () => {
    compteur+=1;
    score.innerHTML = "score: "+compteur;

})