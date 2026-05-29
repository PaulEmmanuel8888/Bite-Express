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

  //Menu items
  const menuItems = [
    {
      id: 1,
      img: "./images/vibrant-vegetable-salad-bowl-healthy-delicious-meal.png",
      name: "Vegetable Salad",
      description:
        " A fresh bowl of crisp salad with juicy tomatoes, crunchy onions, and sweet peppers, tossed for a light and refreshing bite.",
      price: "4.99",
    },
    {
      id: 2,
      img: "./images/juicy-cheeseburger-gourmet-burger-perfection (2).png",
      name: "Beef Cheeseburger",
      description:
        " A juicy beef cheeseburger with tomatoes, onions, and lettuce between hot buns. ",
      price: "5.99",
    },
    {
      id: 3,
      img: "./images/orange-juice (2).png",
      name: "Orange Juice",
      description:
        " A chilled glass of freshly squeezed orange juice, bursting with bright citrus flavor for a sweet and refreshing sip.",
      price: "0.99",
    },
    {
      id: 4,
      img: "./images/juicy-cheeseburger-gourmet-burger-perfection (2).png",
      name: "Beef Cheeseburger",
      description:
        " A juicy beef cheeseburger with tomatoes, onions, and lettuce between hot buns. ",
      price: "5.99",
    },
  ];

  const menuContainer = document.querySelector(".menu-container");

  menuItems.forEach((item) => {
    console.log(item.img);
    const divItem = document.createElement("div");
    divItem.className = "menu-item";
    divItem.innerHTML = `
    <img
      id="food-img-${item.id}"
      class="food-img"
      src="${item.img}"
      alt="menu item image"
    />
    <p class="food-name">${item.name}</p>
    <p class="food-description">
      ${item.description}
    </p>
    <div class="details">
      <p class="price">$${item.price}</p>
      ${item.id == 2 ? `<p class="popular-tag">Most Popular</p>` : ``}
      
    </div>
    `;

    menuContainer.appendChild(divItem);
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
