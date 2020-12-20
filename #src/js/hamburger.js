let hamburger = document.querySelectorAll(".hamburger")[0],
navbarlist = document.querySelectorAll(".navbar__list")[0];

hamburger.addEventListener("click", (e) => {
  document.body.classList.toggle("overflowLock");
  e.currentTarget.classList.toggle("is-active");
  navbarlist.classList.toggle("showed");
})