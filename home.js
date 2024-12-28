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

document.addEventListener("DOMContentLoaded", () => {
  const slidesContainer = document.querySelector(".slides-container");
  const dotsContainer = document.querySelector(".dots-container");

  const slidesData = [
    {
      title: "Fresh in!",
      subtitle: "Go-Vita!",
      description: "Powder chocolate drink!",
      price: "₦2,200",
      image: "/images/go-vita!.jpg",
    },
    {
      title: "Fresh Arrival!",
      subtitle: "Mealmate Poundo yam",
      description: "Enjoy sweet and healthy poundo yam flour!",
      price: "₦2,400",
      image: "/images/mealmate.jpg",
    },
    {
      title: "New in!",
      subtitle: "Reos Handwash",
      description: "Soft on hands, tough on germs!",
      price: "₦900",
      image: "/images/reos.jpg",
    },
  ];

  let currentSlide = 0;
  let isDragging = false;
  let startX = 0;
  let currentX = 0;

  // Populate slides and dots
  slidesData.forEach((slide, index) => {
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("slide");
    slideDiv.style.backgroundImage = `url(${slide.image})`;
    slideDiv.innerHTML = `
      <div class="hero-content">
        <h4>${slide.title}</h4>
        <h1>${slide.subtitle}</h1>
        <p>${slide.description}</p>
        <h2><strong>${slide.price}</strong></h2>
        <br>
        <a href="location.html" class="btn">Buy Now</a>
      </div>
    `;
    slidesContainer.appendChild(slideDiv);

    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => goToSlide(index));
    dotsContainer.appendChild(dot);
  });

  // Clone first and last slides for seamless looping
  const firstClone = slidesContainer.firstElementChild.cloneNode(true);
  const lastClone = slidesContainer.lastElementChild.cloneNode(true);
  slidesContainer.appendChild(firstClone);
  slidesContainer.insertBefore(lastClone, slidesContainer.firstElementChild);

  const slidesCount = slidesData.length;

  // Update slides position
  function updateSlides() {
    const dots = document.querySelectorAll(".dot");
    slidesContainer.style.transition = "transform 0.5s ease-in-out";
    slidesContainer.style.transform = `translateX(-${(currentSlide + 1) * 100}%)`;

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }

  // Handle seamless transition
  slidesContainer.addEventListener("transitionend", () => {
    if (currentSlide === slidesCount) {
      slidesContainer.style.transition = "none";
      currentSlide = 0;
      slidesContainer.style.transform = `translateX(-${(currentSlide + 1) * 100}%)`;
      updateDots(); // Update dots after resetting position
    } else if (currentSlide === -1) {
      slidesContainer.style.transition = "none";
      currentSlide = slidesCount - 1;
      slidesContainer.style.transform = `translateX(-${(currentSlide + 1) * 100}%)`;
      updateDots(); // Update dots after resetting position
    }
  });

  // Update dots manually
  function updateDots() {
    const dots = document.querySelectorAll(".dot");
    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentSlide);
    });
  }

  // Go to specific slide
  function goToSlide(index) {
    currentSlide = index;
    updateSlides();
  }

  // Handle swiping logic
  slidesContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    slidesContainer.style.transition = "none";
  });

  slidesContainer.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX - startX;
    slidesContainer.style.transform = `translateX(calc(-${(currentSlide + 1) * 100}% + ${currentX}px))`;
  });

  slidesContainer.addEventListener("touchend", () => {
    isDragging = false;
    const movedBy = currentX;

    if (movedBy < -50) {
      currentSlide++;
    } else if (movedBy > 50) {
      currentSlide--;
    }

    updateSlides();
    currentX = 0; // Reset currentX
  });

  // Auto-slide every 6 seconds
  setInterval(() => {
    currentSlide++;
    updateSlides();
  }, 6000);

  // Initialize slides
  slidesContainer.style.transform = `translateX(-100%)`;
});


document.addEventListener("DOMContentLoaded", () => {
  const testimonials = [
    {
      name: "daviesoryan",
      feedback: "Its bokku Bread, sardine, eggs and small bama mayonnaise. Go-vita for smooth entry. Let me enjoy my salary please",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s",
    },
    {
      name: "Emily Johnson",
      feedback: "No cap, they really do well with prices on their goods, and i love the guys they employ as cashier, they sabi talk well.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s",
    },
    {
      name: "John Smith",
      feedback: "Just found out about @bokkumart and omo these prices are ridiculously cheap in this economy",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s",
    },
    {
      name: "Sarah Parker",
      feedback: "You guys have made this rich people on the island to save a lot now.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s",
    },
    {
      name: "Chioma",
      feedback: "Omo bokku na 3 for idimu Road oooo see enjoyment 😉",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqafzhnwwYzuOTjTlaYMeQ7hxQLy_Wq8dnQg&s",
    },
  ];

  const slidesContainer = document.getElementById("testimonial-slides-container");

  let currentSlide = 0;
  let slideWidth = 0;
  let isDragging = false;
  let startX = 0;
  let currentX = 0;
  let autoSlideInterval;

  // Render slides
  function renderSlides() {
    testimonials.forEach((testimonial) => {
      const slide = document.createElement("div");
      slide.classList.add("testimonial-slide");
      slide.innerHTML = `
        <div class="testimonial-content">
          <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-image">
          <h3 class="testimonial-name">${testimonial.name}</h3>
          <p class="testimonial-feedback">${testimonial.feedback}</p>
        </div>
      `;
      slidesContainer.appendChild(slide);
    });

    // Clone slides for seamless looping
    const slides = document.querySelectorAll(".testimonial-slide");
    const firstClone = slides[0].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);

    slidesContainer.appendChild(firstClone);
    slidesContainer.insertBefore(lastClone, slides[0]);
  }

  // Set slide width and update container
  function updateSlideWidth() {
    const slides = document.querySelectorAll(".testimonial-slide");
    slideWidth = slides[0].offsetWidth;

    slides.forEach((slide) => {
      slide.style.width = `${slideWidth}px`;
    });

    slidesContainer.style.transform = `translateX(-${slideWidth * (currentSlide + 1)}px)`;
  }

  // Move to a specific slide
  function moveToSlide(slideIndex) {
    currentSlide = slideIndex;
    slidesContainer.style.transition = "transform 0.5s ease-in-out";
    slidesContainer.style.transform = `translateX(-${slideWidth * (currentSlide + 1)}px)`;
  }

  // Handle seamless looping
  function handleLoop() {
    const slides = document.querySelectorAll(".testimonial-slide");
    slidesContainer.addEventListener("transitionend", () => {
      if (currentSlide >= testimonials.length) {
        slidesContainer.style.transition = "none";
        currentSlide = 0;
        slidesContainer.style.transform = `translateX(-${slideWidth}px)`;
      } else if (currentSlide < 0) {
        slidesContainer.style.transition = "none";
        currentSlide = testimonials.length - 1;
        slidesContainer.style.transform = `translateX(-${slideWidth * (currentSlide + 1)}px)`;
      }
    });
  }

  // Handle touch events for swiping
  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
    isDragging = true;
    slidesContainer.style.transition = "none";
    clearInterval(autoSlideInterval); // Pause auto-slide during manual interaction
  }

  function handleTouchMove(event) {
    if (!isDragging) return;
    currentX = event.touches[0].clientX;
    const deltaX = currentX - startX;

    slidesContainer.style.transform = `translateX(-${slideWidth * (currentSlide + 1) + deltaX}px)`;
  }

  function handleTouchEnd() {
    if (!isDragging) return;
    isDragging = false;
    const deltaX = currentX - startX;

    if (deltaX > 50) {
      moveToSlide(currentSlide - 1);
    } else if (deltaX < -50) {
      moveToSlide(currentSlide + 1);
    } else {
      moveToSlide(currentSlide);
    }

    startAutoSlide(); // Resume auto-slide after interaction
  }

  // Auto-slide logic
  function autoSlide() {
    moveToSlide(currentSlide + 1);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 5000); // Adjust interval as needed
  }

  // Initialize slider
  function initSlider() {
    renderSlides();
    updateSlideWidth();
    handleLoop();

    window.addEventListener("resize", updateSlideWidth);

    slidesContainer.addEventListener("touchstart", handleTouchStart);
    slidesContainer.addEventListener("touchmove", handleTouchMove);
    slidesContainer.addEventListener("touchend", handleTouchEnd);

    startAutoSlide();
  }

  initSlider();
});

