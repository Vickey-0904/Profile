window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  // About
  if (document.documentElement.scrollTop < 380) {
    document.getElementById("at").style.color = "#2C3E50";
  } else document.getElementById("at").style.color = "#808b96";

  //Skills
  if (
    document.documentElement.scrollTop > 380 &&
    document.documentElement.scrollTop < 910
  ) {
    document.getElementById("ss").style.color = "#2C3E50";
  } else document.getElementById("ss").style.color = "";

  //Portfolio
  if (document.documentElement.scrollTop > 910)
    document.getElementById("po").style.color = "#2C3E50";
  else document.getElementById("po").style.color = "";
}

// Button action
function btnact() {
  alert("🚧 Site under construction 🛠️.");
}
