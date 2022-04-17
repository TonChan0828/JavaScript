const dayUnit =1000*60*60*24;

const dayBegin = new Date("2022-05-20");
const dayEnd = new Date("2022-06-12");
const diffDays = Math.abs(dayEnd - dayBegin) / dayUnit;
console.log(diffDays);
