const ButtonMessage = document.getElementById("ButtonMessage");
const FormuContactUS = document.getElementById("FormuContactUS");

ButtonMessage.addEventListener("click", function(){
    console.log("yes");
    FormuContactUS.style.display = "block"; //affiche le formulaire
});
//FormuContactUS.style.display = "block"; 