
// function createElement() {
//     scrollTo(document.body, 0, 600);
//   }
//   let scrollme;
// scrollme = document.querySelector("#scrollme");
// scrollme.addEventListener("click",runScroll,false)

// function scrollTo(element, to, duration) {
//   if (duration <= 0) return;
//   let difference = to - element.scrollTop;
//   let perTick = difference / duration * 10;

//   setTimeout(function() {
//     element.scrollTop = element.scrollTop + perTick;
//     if (element.scrollTop == to) return;
//     scrollTo(element, to, duration - 10);
//   }, 10);
// }

let arrow = document.createElement("i");
arrow.setAttribute("id", "arrow");
arrow.setAttribute("class","row fas fa-arrow-alt-circle-up fa-3x arrow float-right col-2");
let connect = document.getElementById("footerfin");
connect.appendChild(arrow);

jQuery(function(){
  $(function () {
  $(window).scroll(function () { //Fonction appelée quand on descend la page
  if ($(this).scrollTop() > 200 ) {  // Quand on est à 200pixels du haut de page,
  $('#arrow').css('right','10px'); // Replace à 10pixels de la droite l'image
  } else { 
  $('#arrow').removeAttr( 'style' ); // Enlève les attributs CSS affectés par javascript
  }
  });
  });
  });

