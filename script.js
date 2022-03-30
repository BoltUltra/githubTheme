// mobile menu
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

// mobile menu event listeners
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

let tab = document.querySelectorAll(".tab");

for (let i = 0; i < tab.length; i++) {
  tab[i].addEventListener("click", function (e) {
    e.currentTarget.classList.add("active");
  });

  tab[i].className = tab[i].className.replace("active", "");
}
