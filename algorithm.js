/*
 * Problem statement:
 * For a refrigerator software coded in JavaScript, write a program that manages the
 * number of bananas in it and takes actions accordingly.
 * Entities:
 * Refrigerator
 * Fruits
 * Person
 * Grocery Order
 * Solution Steps:
 * The refrigerator shows the number of fruits available, by fruit kind.
 * The person tells the refrigerator the quantity of fruits required.
 * The person takes a number of fruits of a kind.
 * The refrigerator updates the number of fruits available.
 * If the quantity reaches a critical level of 1, the refrigerator adds a number of fruits
 * to the next express grocery order.
 *
 */

const refrigerator = {
  brand: 'Samsung',
  bananas: 13,
  pineapples: 3,
  apples: 10,
  fruitUnavail: 1,
  fruitOrderNum: 5
};

const person = {
  name: 'Esteban',
  hungry: true,
  openRefrigerator: true,
  takeFruit: 'bananas',
  fruitsRequired: 4
};

const groceryOrder = {
  orderNumber: 12354,
  bananas: 0,
  pineapples: 0,
  apples: 0
};

if(person.openRefrigerator) {
  console.log('The refrigerator is open ...');
  if (person.takeFruit === 'bananas') {
    console.log(`User ${person.name} requires: ${person.takeFruit}`);
    if (person.fruitsRequired < refrigerator.bananas) {
      if (refrigerator.bananas <= refrigerator.fruitUnavail) {
        console.log('There are not bananas available');
        groceryOrder.bananas = groceryOrder.bananas + refrigerator.fruitOrderNum;
        console.log(`${groceryOrder.bananas} bananas where added to the next order`);
      } else {
          refrigerator.bananas = refrigerator.bananas - person.fruitsRequired;
          console.log(`Take your ${person.fruitsRequired} bananas`);
        }
    } else {
        console.log(`There are only ${refrigerator.bananas} bananas available`);
      }
  }
  if (person.takeFruit === 'pineapples') {
    console.log(`User ${person.name} requires: ${person.takeFruit}`);
    if (person.fruitsRequired < refrigerator.pineapples) {
      if (refrigerator.pineapples <= refrigerator.fruitUnavail) {
        console.log('There are not pineapples available');
        groceryOrder.pineapples = groceryOrder.pineapples + refrigerator.fruitOrderNum;
        console.log(`${groceryOrder.pineapples} pineapples where added to the next order`);
      } else {
          refrigerator.pineapples = refrigerator.pineapples - person.fruitsRequired;
          console.log(`Take your ${person.fruitsRequired} pineapples`);
        }
    } else {
        console.log(`There are only ${refrigerator.pineapples} pineapples available`);
      }
  }
  if (person.takeFruit === 'apples') {
    console.log(`User ${person.name} requires: ${person.takeFruit}`);
    if (person.fruitsRequired < refrigerator.apples) {
      if (refrigerator.apples <= refrigerator.fruitUnavail) {
        console.log('There are not apples available');
        groceryOrder.apples = groceryOrder.apples + refrigerator.fruitOrderNum;
        console.log(`${groceryOrder.apples} apples where added to the next order`);
      } else {
          refrigerator.apples = refrigerator.apples - person.fruitsRequired;
          console.log(`Take your ${person.fruitsRequired} apples`);
        }
    } else {
        console.log(`There are only ${refrigerator.apples} apples available`);
      }
  }
} else {
    console.log('The refrigerator is closed');
}
