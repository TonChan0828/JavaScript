const orders =[
  ["八宝菜", 1,600],
  ["餃子",4,200],
  ["回鍋肉",1,500],
  ["青椒肉絲",2,700]
];

const newOrders = orders.filter(([itemName])=> itemName !== "回鍋肉");
console.log(newOrders);


const result = orders.every(([,,price])=> price <1000);
console.log(result);

console.log(orders.sort(([,,price1], [,,price2]) => price2 -price1));

orders.forEach(([itemName, num,price]) => {
  console.log(`${itemName}を${price}円で${num}個注文しました。`);
});

const reducer =(accu,[,amount,price])=> accu + amount * price;
const sumPrice = orders.reduce(reducer,0);
console.log(`合計金額は${sumPrice}円です。`);
