const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const nav = document.querySelector("nav");
  nav.classList.toggle("nav-active");
});
