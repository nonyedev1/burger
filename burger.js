const menu = document.querySelector(".menu");
const burger = document.querySelectorAll(".burger");
const addBtn = document.querySelectorAll(".addToCartBtn");
const navBarlist = document.querySelector(".list");

menu.addEventListener("click", () => {
  document.querySelector(".navbar ul").classList.toggle("hide");
});

//add to cart button to appear
for (let i = 0; i < burger.length; i++) {
  burger[i].addEventListener("click", () => {
    addBtn[i].classList.toggle("hide");
    if (burger[i].style.transform == "scale(1.01)") {
      burger[i].style.transform = "scale(1)";
    } else {
      burger[i].style.transform = "scale(1.01)";
    }
    burger[i].style.transition = "0.5s ease-in-out";
  });
}
//for scroll button to disappear
function scrollDisappear() {
  if (window.pageYOffset > 600) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
window.addEventListener("scroll", scrollDisappear);

//WhatsApp icon to disappear
function whatsappIconDisappear() {
  if (window.pageYOffset > 600) {
    document.querySelector(".whatsapp").style.display = "block";
  } else {
    document.querySelector(".whatsapp").style.display = "none";
  }
}
window.addEventListener("scroll", whatsappIconDisappear);

//scrollbutton working
document.getElementById("myBtn").addEventListener("click", () => {
  // window.scrollTo (0, 0) to top
  window.scrollTo(0, document.body.scrollHeight);
});
