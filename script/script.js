window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop < 380) {
    document.getElementById("at").style.color = "#2C3E50";
  } else document.getElementById("at").style.color = "#808b96";
  if (
    document.documentElement.scrollTop > 380 &&
    document.documentElement.scrollTop < 910
  ) {
    // document.getElementById("at").style.color = "blue";

    //else
    document.getElementById("ss").style.color = "#2C3E50";
  } else document.getElementById("ss").style.color = "";

  if (document.documentElement.scrollTop > 910)
    document.getElementById("po").style.color = "#2C3E50";
  else document.getElementById("po").style.color = "";
}
