
  const collapsableDiv = document.querySelector(".collapsable_div");
  const hoverDivs = document.querySelectorAll(".hover_div");

  collapsableDiv.addEventListener("mouseover", function (event) {
    if (event.target.tagName === "P") {
      const nextSibling = event.target.nextElementSibling;
      if (nextSibling && nextSibling.classList.contains("hover_div")) {
        nextSibling.classList.add("show");
      }
    }
  });

  collapsableDiv.addEventListener("mouseout", function (event) {
    if (event.target.tagName === "P") {
      const nextSibling = event.target.nextElementSibling;
      if (nextSibling && nextSibling.classList.contains("hover_div")) {
        nextSibling.classList.remove("show");
      }
    }
  });
const navbarIcon = document.querySelector(".navbarIcon_threeLines");
const responsiveNavbar = document.querySelector(".responsive_left_navbar");
const closeIcon = document.querySelector(".responsive_left_navbar .fa-xmark");

// Add click event listener to the navbar icon
navbarIcon.addEventListener("click", function () {
  responsiveNavbar.style.display = "block"; // Show the responsive navbar
});

// Add click event listener to the close icon
closeIcon.addEventListener("click", function () {
  responsiveNavbar.style.display = "none"; // Hide the responsive navbar
});
