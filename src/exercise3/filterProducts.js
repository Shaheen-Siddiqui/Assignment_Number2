// 3. Write an ES6 function that takes an array of objects with name, price and quantity, and returns the new array having only names of products who are having a quantity of more than 10 and a name of more than 5 characters in length.

export const filterProducts = (arr) =>
  arr.reduce((acc, item) => {
    return item.name.length > 5 && item.quantity > 10
      ? [...acc, item.name]
      : acc;
  }, []);

const products = [
  { name: "Bread", price: 150, quantity: 20 },
  { name: "Hoodie", price: 200, quantity: 50 },
  { name: "Pyjama", price: 307, quantity: 10 },
  { name: "Slipper", price: 480, quantity: 30 }
];

console.log(filterProducts(products)); // Output: ["Hoodie", "Slipper"]
