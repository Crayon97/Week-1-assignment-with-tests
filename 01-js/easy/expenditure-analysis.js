/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {

  let ans = [];
  let cats = {}

  for (let trans of transactions){
    let category = trans.category;
    let price = trans.price;
    if(cats[category]){
      cats[category] = cats[category] + price
    }
    else{
      cats[category]=price;
    }
  }

  for(let key in cats){
    console.log(key);
    let newObj = { category: key,  totalSpent : cats[key]};
    ans.push(newObj);
  }

  return ans;
}

module.exports = calculateTotalSpentByCategory;
