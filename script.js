// Simulate fetching products from an API
const products = [
    { id: 1, name: "Creative Notebook", description: "A unique design notebook.", price: 10 },
    { id: 2, name: "Colorful Pens", description: "Set of 10 pens in vibrant colors.", price: 5 },
    { id: 3, name: "Custom Bookmark", description: "Personalized bookmark.", price: 2 },
  ];
  
  // Dynamically populate product list (on customer.html)
  const productList = document.getElementById("product-list");
  
  if (productList) {
    products.forEach((product) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
  
      productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p>Price: $${product.price}</p>
      `;
  
      productList.appendChild(productDiv);
    });
  }
  
