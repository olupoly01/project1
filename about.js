document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  // Toggle navigation menu on hamburger click
  hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open"); // Correct class name
  });

  // Close navigation menu when clicking outside
  document.addEventListener("click", (event) => {
      if (
          !navLinks.contains(event.target) &&
          !hamburger.contains(event.target)
      ) {
          navLinks.classList.remove("open"); // Correct class name
      }
  });
});
