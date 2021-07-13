let fruit = { 
    name: 'grape', 
    description: 'Popular and famous fruit',
    colors: ['purple', 'green'], 
    isSmall: true,
    order: 1
}

console.log(fruit['isSmall']);
console.log(fruit.description);

let keys = Object.keys(fruit);
let values = Object.values(fruit);
let entries = Object.entries(fruit);

fruit.price = 25000;

console.log(fruit);
delete fruit.price;
console.log(fruit);