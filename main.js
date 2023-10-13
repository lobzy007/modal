let a = document.querySelectorAll(".show");
let modal = document.querySelector(".modal");
let close = document.querySelector(".close_modal");
let ov = document.querySelector(".overlay")

for (let i in a) {
  a[i].addEventListener("click", () => {
    modal.classList.remove("hidden");
    ov.classList.remove("hidden")
  });
  close.addEventListener("click", () => {
    modal.classList.add("hidden");
    ov.classList.add("hidden");
  });
}
