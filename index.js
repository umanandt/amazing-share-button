var screen_Large = false;



document.querySelector(".main-button").addEventListener("click", function () {
  if (!screen_Large) {
    document.querySelector(".box").classList.add("active");
    document.querySelector(".box").classList.add("boxTrans");
    document.querySelector(".divider-1").classList.add("divider-1-opa");
    document.querySelector(".divider-2").classList.add("divider-1-opa");
    document.querySelector(".divider-3").classList.add("divider-1-opa");
    document.querySelector(".divider-4").classList.add("divider-1-opa");
    screen_Large = true;
    
  } else {
    document.querySelector(".box").classList.remove("active");
    screen_Large = false;
    document.location.reload(true);
  }
});
