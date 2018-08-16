// Modal to change MenuState bring up nav links in large screen

const modal = document.querySelector(".menuState");
const trigger = document.querySelector(".trigger");
const menu = document.getElementById('menu');

function toggleModal() {
    modal.classList.toggle("show-menuState");
    if (menu.textContent === "MENU") {
        menu.innerHTML = "CLOSE";
    } else {
      menu.innerHTML = "MENU";
    }
  }

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
  }

trigger.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);




// Mobile Nav Icon toggle navigation
const mobile = document.querySelector(".mobile");
const trig = document.querySelector(".hamburger");

function toggleMobileNav() {
    mobile.classList.toggle("show-mobileNav");
  }

trig.addEventListener("click", toggleMobileNav);
