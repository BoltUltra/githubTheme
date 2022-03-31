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

let modeButton = document.getElementById("mode-button");
let body = document.getElementById("body");
let navbar = document.getElementById("navbar");

function mode() {
  if (modeButton.classList.contains("text-white")) {
    modeButton.classList.replace("text-white", "text-black");
    body.classList.replace("bg-navbar", "bg-white");
    navbar.classList.replace("bg-navbar", "bg-white");
  } else if (modeButton.classList.contains("text-black")) {
    modeButton.classList.replace("text-black", "text-white");
    body.classList.replace("bg-white", "bg-navbar");
    navbar.classList.replace("bg-white", "bg-navbar");
  }
}
