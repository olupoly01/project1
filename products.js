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
];

const productContainer = document.getElementById('productContainer');
const overlay = document.getElementById('productOverlay');

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

function displayProducts() {
  const cards = products.map((product, index) => createProductCard(product, index)).join('');
  productContainer.innerHTML = cards;
}

function showModal(index) {
  const product = products[index];
  document.getElementById('modalImage').src = product.img;
  document.getElementById('modalName').textContent = product.name;
  document.getElementById('modalPrice').textContent = `Price: ${product.price}`;
  document.getElementById('modalStatus').textContent = `Status: ${product.status}`;
  document.getElementById('modalDescription').textContent = product.description;

  overlay.style.display = 'flex';
}

function closeModal() {
  overlay.style.display = 'none';
}

function closeModalOutside(event) {
  if (event.target === overlay) {
    closeModal();
  }
}

displayProducts();
