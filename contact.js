document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const icon = hamburger.querySelector("i");
  
    // Toggle navigation menu on hamburger click
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      // Toggle between menu and cancel icons
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-times");
    });
  
    // Close navigation menu when clicking outside
    document.addEventListener("click", (event) => {
      if (
        !navLinks.contains(event.target) &&
        !hamburger.contains(event.target)
      ) {
        navLinks.classList.remove("open");
        // Ensure the icon resets to the menu icon
        if (icon.classList.contains("fa-times")) {
          icon.classList.remove("fa-times");
          icon.classList.add("fa-bars");
        }
      }
    });
  });
  