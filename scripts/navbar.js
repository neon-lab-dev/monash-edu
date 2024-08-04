
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
  responsiveNavbar.style.marginLeft =0; // Show the responsive navbar
});

// Add click event listener to the close icon
closeIcon.addEventListener("click", function () {
  responsiveNavbar.style.marginLeft="-50rem"; // Hide the responsive navbar
});
 




   document.querySelectorAll(".nav_select").forEach((navItem) => {
     navItem.addEventListener("click", function (event) {
       // Get the target div to show
       const targetSelector = this.getAttribute("data-target");
       const targetDiv = document.querySelector(targetSelector);

       // Hide all other .hide divs
       document.querySelectorAll(".hide").forEach((hideDiv) => {
         if (hideDiv !== targetDiv) {
           hideDiv.style.display = "none";
         }
       });

       // Toggle visibility of the clicked .hide div
       targetDiv.style.display =
         targetDiv.style.display === "block" ? "none" : "block";

       // Prevent click event from propagating to the document
       event.stopPropagation();
     });
   });

   // Hide the .hide divs when clicking anywhere else on the webpage
   document.addEventListener("click", function () {
     document.querySelectorAll(".hide").forEach((hideDiv) => {
       hideDiv.style.display = "none";
     });
   });

   // Prevent clicks inside the .hide div from closing it
   document.querySelectorAll(".hide").forEach((hideDiv) => {
     hideDiv.addEventListener("click", function (event) {
       event.stopPropagation();
     });
   });