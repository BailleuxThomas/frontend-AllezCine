window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0.5)";
  } else if (document.body.scrollTop < 100 || document.documentElement.scrollTop < 100){
    document.getElementById("navbar").style.top = "0px";
    document.getElementById("navbar").style.backgroundColor = "";
    document.getElementById("navbar").style.margin = "0";
  } else  {
    document.getElementById("navbar").style.top = "0px";
  }
}
