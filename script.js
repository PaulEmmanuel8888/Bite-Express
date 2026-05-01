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

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      console.log("Working");

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
});
