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


const products = [
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://247foods.ng/public/uploads/1596636815-h-250-big-bull-rice-50kg.jpg', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://247foods.ng/public/uploads/1596636815-h-250-big-bull-rice-50kg.jpg', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://m.media-amazon.com/images/I/71Y9KTWOdUL._SL1500_.jpg', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Malta Guinness Can (330Ml)', 
price: '₦640', 
img: 'https://shoprite.ng/wp-content/uploads/2023/04/p64-600x600.jpg', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'indomie noodles super pack chicken flavour (120g)', 
price: '₦350', 
img: 'https://uzoebo.com/images/uzoebo/1676899924_indomie%20super%20pack.jpeg', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'minimie instant noodles chicken flavour (70g)', 
price: '₦200', 
img: 'https://i0.wp.com/htsplus.ng/wp-content/uploads/Minimie-Noodles-Wholesale-in-Nigeria.jpg?fit=500%2C333&ssl=1', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://247foods.ng/public/uploads/1596636815-h-250-big-bull-rice-50kg.jpg', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://247foods.ng/public/uploads/1596636815-h-250-big-bull-rice-50kg.jpg', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://m.media-amazon.com/images/I/71Y9KTWOdUL._SL1500_.jpg', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Malta Guinness Can (330Ml)', 
price: '₦640', 
img: 'https://shoprite.ng/wp-content/uploads/2023/04/p64-600x600.jpg', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'indomie noodles super pack chicken flavour (120g)', 
price: '₦350', 
img: 'https://uzoebo.com/images/uzoebo/1676899924_indomie%20super%20pack.jpeg', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'minimie instant noodles chicken flavour (70g)', 
price: '₦200', 
img: 'https://i0.wp.com/htsplus.ng/wp-content/uploads/Minimie-Noodles-Wholesale-in-Nigeria.jpg?fit=500%2C333&ssl=1', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://247foods.ng/public/uploads/1596636815-h-250-big-bull-rice-50kg.jpg', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://247foods.ng/public/uploads/1596636815-h-250-big-bull-rice-50kg.jpg', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://m.media-amazon.com/images/I/71Y9KTWOdUL._SL1500_.jpg', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Malta Guinness Can (330Ml)', 
price: '₦640', 
img: 'https://shoprite.ng/wp-content/uploads/2023/04/p64-600x600.jpg', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'indomie noodles super pack chicken flavour (120g)', 
price: '₦350', 
img: 'https://uzoebo.com/images/uzoebo/1676899924_indomie%20super%20pack.jpeg', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'minimie instant noodles chicken flavour (70g)', 
price: '₦200', 
img: 'https://i0.wp.com/htsplus.ng/wp-content/uploads/Minimie-Noodles-Wholesale-in-Nigeria.jpg?fit=500%2C333&ssl=1', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://247foods.ng/public/uploads/1596636815-h-250-big-bull-rice-50kg.jpg', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://247foods.ng/public/uploads/1596636815-h-250-big-bull-rice-50kg.jpg', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://m.media-amazon.com/images/I/71Y9KTWOdUL._SL1500_.jpg', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Malta Guinness Can (330Ml)', 
price: '₦640', 
img: 'https://shoprite.ng/wp-content/uploads/2023/04/p64-600x600.jpg', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'indomie noodles super pack chicken flavour (120g)', 
price: '₦350', 
img: 'https://uzoebo.com/images/uzoebo/1676899924_indomie%20super%20pack.jpeg', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'minimie instant noodles chicken flavour (70g)', 
price: '₦200', 
img: 'https://i0.wp.com/htsplus.ng/wp-content/uploads/Minimie-Noodles-Wholesale-in-Nigeria.jpg?fit=500%2C333&ssl=1', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://247foods.ng/public/uploads/1596636815-h-250-big-bull-rice-50kg.jpg', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://247foods.ng/public/uploads/1596636815-h-250-big-bull-rice-50kg.jpg', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://m.media-amazon.com/images/I/71Y9KTWOdUL._SL1500_.jpg', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Malta Guinness Can (330Ml)', 
price: '₦640', 
img: 'https://shoprite.ng/wp-content/uploads/2023/04/p64-600x600.jpg', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'indomie noodles super pack chicken flavour (120g)', 
price: '₦350', 
img: 'https://uzoebo.com/images/uzoebo/1676899924_indomie%20super%20pack.jpeg', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'minimie instant noodles chicken flavour (70g)', 
price: '₦200', 
img: 'https://i0.wp.com/htsplus.ng/wp-content/uploads/Minimie-Noodles-Wholesale-in-Nigeria.jpg?fit=500%2C333&ssl=1', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://247foods.ng/public/uploads/1596636815-h-250-big-bull-rice-50kg.jpg', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://247foods.ng/public/uploads/1596636815-h-250-big-bull-rice-50kg.jpg', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://m.media-amazon.com/images/I/71Y9KTWOdUL._SL1500_.jpg', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Malta Guinness Can (330Ml)', 
price: '₦640', 
img: 'https://shoprite.ng/wp-content/uploads/2023/04/p64-600x600.jpg', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'indomie noodles super pack chicken flavour (120g)', 
price: '₦350', 
img: 'https://uzoebo.com/images/uzoebo/1676899924_indomie%20super%20pack.jpeg', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'minimie instant noodles chicken flavour (70g)', 
price: '₦200', 
img: 'https://i0.wp.com/htsplus.ng/wp-content/uploads/Minimie-Noodles-Wholesale-in-Nigeria.jpg?fit=500%2C333&ssl=1', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://247foods.ng/public/uploads/1596636815-h-250-big-bull-rice-50kg.jpg', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://247foods.ng/public/uploads/1596636815-h-250-big-bull-rice-50kg.jpg', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://m.media-amazon.com/images/I/71Y9KTWOdUL._SL1500_.jpg', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Malta Guinness Can (330Ml)', 
price: '₦640', 
img: 'https://shoprite.ng/wp-content/uploads/2023/04/p64-600x600.jpg', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'indomie noodles super pack chicken flavour (120g)', 
price: '₦350', 
img: 'https://uzoebo.com/images/uzoebo/1676899924_indomie%20super%20pack.jpeg', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'minimie instant noodles chicken flavour (70g)', 
price: '₦200', 
img: 'https://i0.wp.com/htsplus.ng/wp-content/uploads/Minimie-Noodles-Wholesale-in-Nigeria.jpg?fit=500%2C333&ssl=1', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://247foods.ng/public/uploads/1596636815-h-250-big-bull-rice-50kg.jpg', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://247foods.ng/public/uploads/1596636815-h-250-big-bull-rice-50kg.jpg', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://m.media-amazon.com/images/I/71Y9KTWOdUL._SL1500_.jpg', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Malta Guinness Can (330Ml)', 
price: '₦640', 
img: 'https://shoprite.ng/wp-content/uploads/2023/04/p64-600x600.jpg', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'indomie noodles super pack chicken flavour (120g)', 
price: '₦350', 
img: 'https://uzoebo.com/images/uzoebo/1676899924_indomie%20super%20pack.jpeg', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'minimie instant noodles chicken flavour (70g)', 
price: '₦200', 
img: 'https://i0.wp.com/htsplus.ng/wp-content/uploads/Minimie-Noodles-Wholesale-in-Nigeria.jpg?fit=500%2C333&ssl=1', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Big Bull Parboiled Rice (50kg)', 
price: '₦91,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'High quality parboiled rice perfect for family meals.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Titus Sardine in Vegetable Oil (125g)', 
price: '₦1,100', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Nutritious sardines preserved in vegetable oil.'
},
{ 
name: 'Big Bull Parboiled Rice (25kg)', 
price: '₦47,000', 
img: 'https://via.placeholder.com/300x200', 
status: 'IN STOCK',
description: 'Smaller pack of Big Bull rice for everyday cooking.'
},
];

const productContainer = document.getElementById('productContainer');
const overlay = document.getElementById('productOverlay');
const paginationContainer = document.getElementById('pagination');
const maxProductsPerPage = 24; // Maximum products to display per page
let currentPage = 1;

// Create a product card
function createProductCard(product, index) {
  return `
    <div class="product-card" onclick="showModal(${index})">
      <img src="${product.img}" alt="${product.name}" class="product-img" />
      <div class="product-name">${product.name}</div>
      <div class="product-footer">
        <div class="product-price">${product.price}</div>
        <div class="product-status">${product.status}</div>
      </div>
    </div>
  `;
}

const resultsCounter = document.getElementById('resultsCounter');

// Update displayProducts function
function displayProducts() {
  const start = (currentPage - 1) * maxProductsPerPage + 1;
  const end = Math.min(start + maxProductsPerPage - 1, products.length);

  // Update the results counter
  resultsCounter.textContent = `Showing ${start} – ${end} of ${products.length} products`;

  // Display the products
  const productsToDisplay = products.slice(start - 1, end);
  const cards = productsToDisplay.map((product, index) => createProductCard(product, start - 1 + index)).join('');
  productContainer.innerHTML = cards;

  createPaginationControls();
}


// Show the product modal
function showModal(index) {
  const product = products[index];
  document.getElementById('modalImage').src = product.img;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalPrice').textContent = `Price: ${product.price}`;
  document.getElementById('modalStatus').textContent = `Status: ${product.status}`;
  document.getElementById('modalDescription').textContent = product.description;

  overlay.style.display = 'flex';
}

// Close the modal
function closeModal() {
  overlay.style.display = 'none';
}

function closeModalOutside(event) {
  if (event.target === overlay) {
    closeModal();
  }
}

// Create pagination controls with a maximum of 5 visible buttons
function createPaginationControls() {
  const totalPages = Math.ceil(products.length / maxProductsPerPage);
  let paginationHTML = '';
  const maxVisiblePages = 5;

  const startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  // Add "Previous" button
  if (currentPage > 1) {
    paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage - 1})">&laquo;</button>`;
  }

  // Add page numbers dynamically
  for (let i = startPage; i <= endPage; i++) {
    paginationHTML += `
      <button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">${i}</button>
    `;
  }

  // Add "Next" button
  if (currentPage < totalPages) {
    paginationHTML += `<button class="page-btn" onclick="changePage(${currentPage + 1})">&raquo;</button>`;
  }

  paginationContainer.innerHTML = paginationHTML;
}

// Change the page and scroll to the top
function changePage(pageNumber) {
  currentPage = pageNumber;
  displayProducts();

  // Scroll to the top of the page
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initial display
displayProducts();
