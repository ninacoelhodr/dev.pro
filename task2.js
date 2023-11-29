// Task 2: Inventory Management
function sortProducts(products, sortKey, ascending) {
  return products.sort((a, b) => {
    if (ascending) {
      return a[sortKey] - b[sortKey];
    } else {
      return b[sortKey] - a[sortKey];
    }
  });
}

// Example Input:
const products = [
  { name: "Product A", price: 100, stock: 5 },
  { name: "Product B", price: 200, stock: 3 },
  { name: "Product C", price: 50, stock: 10 }
];

const sortedProducts = sortProducts(products, "price", false);
console.log(sortedProducts);

// Answers to your questions:
// 1. Test automation tasks in the last ~6 months:
//    - Automated regression testing of a web application using Playwright.
//    - API testing using tools like Postman.

// 2. Tools used for automated testing:
//    - Playwright, Cypress, postman
//    
//    