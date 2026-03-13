const list = ["tyler", "bryant", "drew"];

// prints list normally
console.log(list)

// sorts alphabetically and saves list
list.sort()

// prints new list
console.log(list)



const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];

function compareProducts(a, b) {
    if (a.price > b.price) {
        return -1;
    } else if (a.price < b.price) {
        return 1;
    }
    return 0;
    }

    let sortedProducts = products.sort(compareProducts);

    console.log(sortedProducts)