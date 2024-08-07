function toggleVisibility(id) {
  // Get all children and titles
  const allChildren = document.querySelectorAll("#child1, #child2, #child3");
  const allTitles = document.querySelectorAll(".title");

  // Hide all children
  allChildren.forEach((child) => {
    child.classList.remove("show");
  });

  // Remove active class from all titles
  allTitles.forEach((title) => {
    title.classList.remove("active");
  });

  // Show the clicked child's content
  document.getElementById(id).classList.add("show");

  // Add active class to the clicked title
  const activeTitle = Array.from(allTitles).find((title) =>
    title.getAttribute("onclick").includes(id)
  );
  if (activeTitle) {
    activeTitle.classList.add("active");
  }
}

// Initialize the page to show the first child
document.addEventListener("DOMContentLoaded", () => {
  toggleVisibility("child1"); // Default to showing 'child1'
});
