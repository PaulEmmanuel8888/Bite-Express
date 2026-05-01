document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
      hamburger.classList.remove("fa-bars");
      hamburger.classList.add("fa-xmark");
    } else {
      hamburger.classList.remove("fa-xmark");
      hamburger.classList.add("fa-bars");
    }
  });

  function removeActive(options) {
    options.forEach((option) => {
      option.classList.remove("active");
    });
  }

  const navOptions = document.querySelectorAll(".nav-link");

  navOptions.forEach((option) => {
    option.addEventListener("click", function (e) {
      removeActive(navOptions);
      const selectedOption = this;
      selectedOption.classList.add("active");
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const target = document.querySelector(targetId);
      if (targetId === "#home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  const items = document.querySelectorAll(".menu-item");
  const button = document.querySelector(".view-more-btn");

  let expanded = false;
  items.forEach((item, index) => {
    if (index > 2) {
      item.classList.add("hidden");
    }
  });

  button.addEventListener("click", () => {
    expanded = !expanded;

    items.forEach((item, index) => {
      if (index > 2) {
        item.classList.toggle("hidden", !expanded);
      }
    });

    button.textContent = expanded ? "View Less" : "View More";
  });
});
