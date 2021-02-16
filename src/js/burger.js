const navSlide = () => {
  const burger = document.querySelector(".nav__burger");
  const nav = document.querySelector(".nav-list");
  const navLinks = document.querySelectorAll(".nav-list__item");
  const darkScreen = document.querySelector(".dark-screen");
  let isBurgerOpen = false;
  let isAnimathionStop = true;

  const openBurger = () => {
    if (isAnimathionStop === true) {
      isAnimathionStop = false;
      isBurgerOpen = true;
      darkScreen.style.display = "block";

      navLinks.forEach((link, index) => {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +
          0.5}s `;
      });
    }
  };

  const closeBurger = () => {
    if (isBurgerOpen === true) {
      navLinks.forEach((link) => {
        link.style.animation = "";
      });
      nav.classList.remove("nav-active");
      darkScreen.style.display = "none";
      isBurgerOpen = false;
      isAnimathionStop = true;
    }
  };

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    if (isBurgerOpen) {
      closeBurger();
    } else {
      openBurger();
    }
    burger.classList.toggle("toggle");
  });

  darkScreen.addEventListener('click', () => {
    
  burger.classList.toggle("toggle");
    closeBurger();

  });

  window.addEventListener("keydown", evt => {
    burger.classList.toggle("toggle");
    if (evt.key === "Escape") {
      evt.preventDefault;
      if (isBurgerOpen) {
        closeBurger();
      }
    }
  });
};
navSlide();
