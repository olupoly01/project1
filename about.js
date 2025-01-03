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
  
  // Select all elements with the 'animate' class
const animatedElements = document.querySelectorAll('.animate');

// Create an Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'active' class when in view
            entry.target.classList.add('active');
            // Optionally unobserve the element to prevent repeated triggers
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1 // Trigger when 10% of the element is visible
});

// Observe each animated element
animatedElements.forEach(el => observer.observe(el));