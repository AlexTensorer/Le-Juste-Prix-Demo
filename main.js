let nombreAleatoire = Math.random() * 500

let nombreJuste = parseInt((Math.round(nombreAleatoire)))

console.log(nombreAleatoire)
console.log(nombreJuste)


let tentativeUtilisateur = parseInt(prompt("Quel est le juste prix?"))
let tentatives = 0


while(tentativeUtilisateur !== nombreJuste) {
    tentatives++
    if (tentativeUtilisateur > nombreJuste) {
        tentativeUtilisateur = parseInt(prompt("Raté ! Trop élevé ! Essayes encore !"))
    } else {
        tentativeUtilisateur = parseInt(prompt("Raté ! Trop bas ! Essayes encore !"))
    }
}
alert("Bravooooooo! C'est le juste prix ! Il ne vous a fallu que " + (tentatives + 1) + " tentatives !")