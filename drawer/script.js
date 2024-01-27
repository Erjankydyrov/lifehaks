let toggle = document.querySelector("#toggle");
let drawer = document.querySelector("#drawer");
let backdrop = document.querySelector(".backdrop");

toggle.addEventListener("click", () => {
  drawer.classList.toggle("open");
  document.body.classList.toggle("hidden");
});
backdrop.addEventListener("click", () => {
  drawer.classList.toggle("open");
  document.body.classList.toggle("hidden");
});
