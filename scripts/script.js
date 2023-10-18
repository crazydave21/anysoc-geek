const menuBtn = document.querySelector(".menu-btn");
const showMenu = document.querySelector(".menu-links");
const closeBtn = document.querySelector(".menu-close-btn");
const body = document.querySelector("body");

menuBtn.addEventListener("click", (event) => {
  //   showMenu.style.display = "inline";
  //   closeBtn.style.display = "flex";
  showMenu.style.transform = "translateX(0px)";
  showMenu.style.boxShadow = "10px 0px 10px 10px rgba(0, 0, 0, 0.5)";

  closeBtn.addEventListener("click", (event) => {
    showMenu.style.transform = "translateX(350px)";
    showMenu.style.boxShadow = "none";
  });
});
