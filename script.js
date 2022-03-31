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

// Dark Mode and Light Mode
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

// Portfolio navigation
let overview = document.getElementById("overview");
let all = document.getElementById("all");
let project = document.getElementById("projects");
let stack = document.getElementById("stack");
let contactEl = document.getElementById("contact");

function home() {
  overview.classList.remove("hidden");
  project.classList.remove("hidden");
  stack.classList.remove("hidden");
  contactEl.classList.remove("hidden");
}

function projects() {
  overview.classList.add("hidden");
  stack.classList.add("hidden");
  project.classList.remove("hidden");
  contactEl.classList.add("hidden");
}
function skill() {
  overview.classList.add("hidden");
  stack.classList.remove("hidden");
  contactEl.classList.add("hidden");
  project.classList.add("hidden");
}

function contact() {
  overview.classList.add("hidden");
  stack.classList.add("hidden");
  contactEl.classList.remove("hidden");
  project.classList.add("hidden");
}
