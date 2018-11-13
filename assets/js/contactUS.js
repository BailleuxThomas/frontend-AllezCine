const contactUs = document.getElementById("contactUs");
const ButtonMessage = document.getElementById("ButtonMessage");
const formulaire = document.getElementById("formulaire");
const buttonSendContactUS = document.getElementById("buttonSendContactUS");
const CancelMessage = document.getElementById("CancelMessage");
//stock dans des constantes les 4 formulaires
const FirstName = document.getElementById("FirstName");
const LastName = document.getElementById("LastName");
const email = document.getElementById("email");
const Subject = document.getElementById("Subject");
const Message = document.getElementById("Message");

ButtonMessage.addEventListener("click", function(){
    formulaire.style.display = "block"; //affiche le formulaire
    contactUs.className += " active";
});

CancelMessage.addEventListener("click", function(){
    formulaire.style.display = "none"; //cache le formulaire
    CancelMessage.setAttribute("class", "");
});

/*
buttonSendContactUS.addEventListener("click", function(){
    alert("Your first name is : "+FirstName.value
    +"\nYour Last name is : "+LastName.value+"\nYour Email is : "+email.value+"\nYour Subject name is : "+Subject.value);
});
*/

/*
buttonSendContactUS.addEventListener("click", function(){
    if (FirstName.value != null && LastName.value != null && email.value != null && Subject.value != null){
        alert("Merci pour ton message, "+FirstName.value);
    }
});
*/
