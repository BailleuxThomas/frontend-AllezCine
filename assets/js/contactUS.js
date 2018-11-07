const ButtonMessage = document.getElementById("ButtonMessage");
const formulaire = document.getElementById("formulaire");
const buttonSendContactUS = document.getElementById("buttonSendContactUS");
//stock dans des constantes les 4 formulaires
const FirstName = document.getElementById("FirstName");
const LastName = document.getElementById("LastName");
const email = document.getElementById("email");
const Subject =document.getElementById("Subject");

ButtonMessage.addEventListener("click", function(){
    console.log("yes");
    formulaire.style.display = "block"; //affiche le formulaire
});
//formulaire.style.display = "block"; 

buttonSendContactUS.addEventListener("click", function(){
    alert("Your first name is : "+FirstName.value);
});