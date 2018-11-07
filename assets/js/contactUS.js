const ButtonMessage = document.getElementById("ButtonMessage");
const formulaire = document.getElementById("formulaire");
const buttonSendContactUS = document.getElementById("buttonSendContactUS");

ButtonMessage.addEventListener("click", function(){
    console.log("yes");
    formulaire.style.display = "block"; //affiche le formulaire
});
//formulaire.style.display = "block"; 