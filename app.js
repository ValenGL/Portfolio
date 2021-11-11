mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    mybutton.classList.add("slide-in-elliptic-bottom-fwd");
    mybutton.classList.remove("slide-out-fwd-bottom");
  } else {
    mybutton.classList.add("slide-out-fwd-bottom");
    mybutton.classList.remove("lide-in-elliptic-bottom-fwd");
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
