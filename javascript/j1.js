const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    image: "https://tse2.mm.bing.net/th/id/OIP.J7ll0u--eis2_6rLF8SS6gHaHa?w=626&h=626&rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2999,
    image: "https://www.dhresource.com/f2/albu/g5/M01/BC/F5/rBVaI1mK6ZmAF7KrAAHpbIMhSZg252.jpg"
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 999,
    image: "https://tse3.mm.bing.net/th/id/OIP.TRUtk49ZHYreQI5R7dgSFgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 4,
    name: "Keyboard",
    price: 1299,
    image: "https://tse4.mm.bing.net/th/id/OIP.T8Z4xGosip_KYkKnXZWJCAHaE7?w=2000&h=1333&rs=1&pid=ImgDetMain&o=7&rm=3"
  }
];

let cartCount = 0;

const productContainer = document.getElementById("products");
const cartCounter = document.getElementById("cart-count");

products.forEach(product => {
  const div = document.createElement("div");
  div.classList.add("product");
  div.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button onclick="addToCart()">Add to Cart</button>
  `;
  productContainer.appendChild(div);
});

function addToCart() {
  cartCount++;
  cartCounter.textContent = cartCount;
}