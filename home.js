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

const slidesData = [
  {
    title: "Fresh in!",
    subtitle: "Go-Vita!",
    description: "Powder chocolate drink!",
    price: "₦2,200",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4e24a336629257.5722f196e7ba8.jpg",
  },
  {
    title: "Fresh Arrival!",
    subtitle: "Mealmate Poundo yam",
    description: "Enjoy sweet and healthy poundo yam flour!",
    price: "₦2,400",
    image:"https://costa-verde.com/wp-content/uploads/2020/04/71-cabazes-de-fruta-e-legumes-1-1024x549.jpg",
  },
  {
    title: "New in!",
    subtitle: "Reos Handwash",
    description: "Soft on hands, tough on gems!",
    price: "₦900",
    image: "https://i.pinimg.com/1200x/e8/98/e0/e898e0478993e98432a56148bcbcf616.jpg",
  },
];

const slidesContainer = document.querySelector('.slides-container');
const dotsContainer = document.querySelector('.dots-container');

let currentSlide = 0;

// Create slides and dots dynamically
slidesData.forEach((slide, index) => {
  const slideDiv = document.createElement('div');
  slideDiv.classList.add('slide');
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

  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => setSlide(index));
  dotsContainer.appendChild(dot);
});

// Clone first and last slides for seamless looping
const firstClone = slidesContainer.firstElementChild.cloneNode(true);
const lastClone = slidesContainer.lastElementChild.cloneNode(true);
slidesContainer.appendChild(firstClone);
slidesContainer.insertBefore(lastClone, slidesContainer.firstElementChild);

// Update slides position
function updateSlides() {
  const dots = document.querySelectorAll('.dot');
  slidesContainer.style.transform = `translateX(-${(currentSlide + 1) * 100}%)`;
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentSlide);
  });
}

// Set specific slide
function setSlide(index) {
  currentSlide = index;
  updateSlides();
}

// Next slide logic
function nextSlide() {
  currentSlide++;
  if (currentSlide >= slidesData.length) {
    setTimeout(() => {
      slidesContainer.style.transition = 'none';
      currentSlide = 0;
      updateSlides();   
    }, 500);
  } else {
    slidesContainer.style.transition = 'transform 0.5s ease-in-out';
  }
  updateSlides();
}

// Auto-slide every 6 seconds
setInterval(nextSlide, 6000);

// Initialize
slidesContainer.style.transform = `translateX(-100%)`;


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

  let slideIndex = 0;
  let slideWidth;
  let interval;

  // Function to render slides
  function renderSlides() {
    testimonials.forEach((testimonial) => {
      const slide = document.createElement("div");
      slide.classList.add("testimonial-slide");
      slide.innerHTML = `
        <img src="${testimonial.image}" alt="${testimonial.name}">
        <h3>${testimonial.name}</h3>
        <p>${testimonial.feedback}</p>
      `;
      slidesContainer.appendChild(slide);
    });

    // Clone slides for seamless infinite scrolling
    const slides = document.querySelectorAll(".testimonial-slide");
    const firstClone = slides[0].cloneNode(true);
    const secondClone = slides[1].cloneNode(true);
    const lastClone = slides[slides.length - 1].cloneNode(true);
    const secondLastClone = slides[slides.length - 2].cloneNode(true);

    slidesContainer.appendChild(firstClone);
    slidesContainer.appendChild(secondClone);
    slidesContainer.insertBefore(lastClone, slides[0]);
    slidesContainer.insertBefore(secondLastClone, slides[0]);

    slideWidth = slidesContainer.querySelector(".testimonial-slide").offsetWidth;
    slidesContainer.style.transform = `translateX(-${slideWidth * 2}px)`;
  }

  // Update slide position
  function moveSlide() {
    slideIndex++;
    slidesContainer.style.transition = "transform 0.5s ease-in-out";
    slidesContainer.style.transform = `translateX(-${slideWidth * (slideIndex + 2)}px)`;

    slidesContainer.addEventListener("transitionend", () => {
      const slides = document.querySelectorAll(".testimonial-slide");
      if (slideIndex >= testimonials.length) {
        slideIndex = 0;
        slidesContainer.style.transition = "none";
        slidesContainer.style.transform = `translateX(-${slideWidth * 2}px)`;
      }
    });
  }

  // Start auto-slide
  function startAutoSlide() {
    interval = setInterval(moveSlide, 7000);
  }

  // Handle resize
  window.addEventListener("resize", () => {
    slideWidth = slidesContainer.querySelector(".testimonial-slide").offsetWidth;
    slidesContainer.style.transform = `translateX(-${slideWidth * (slideIndex + 2)}px)`;
  });

  // Initialize slider
  renderSlides();
  startAutoSlide();
});
