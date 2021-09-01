function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "flex";
  evt.currentTarget.className += " active";
}

function navFuntion() {
  var Hamburger = document.getElementById("hamburgerIcon");
  var bodyFix = document.querySelector('body');
  checkClass = Hamburger.classList.contains("active");
  if (checkClass == true) {
    Hamburger.classList.remove("active");
    bodyFix.classList.remove("fix");
  }
  else {
    Hamburger.classList.add("active");
    bodyFix.classList.add("fix");
  }
}