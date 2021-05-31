// const startDate = new Date("05/16/2021");
// const today = new Date();
// const dd = today.getDate();
// const mm = today.getMonth()+1;
// const yyyy = today.getFullYear();
// const endDate = new Date(mm + "/" + dd + "/" + yyyy);
// console.log(startDate)
// console.log(endDate)
// const timeDifference = endDate.getTime() - startDate.getTime();
// const dayDifference = timeDifference / (1000 * 3600 * 24);
// console.log(dayDifference)
//
//
// var d = new Date();
// console.log(d.toString())
// d.setDate(d.getDate()-6);
// console.log(d.toString())

// for(let i=0; i<100; i++) {
//     const rand = Math.floor(Math.random() * 10000)
//     const date = Date.now() * 10000
//     console.log(rand, date, rand+date)
// }
// // IT LOSES PRECISION???
// console.log("1621816116065".length)
// const now = new Date();
// const dd = now.getDate();
// const mm = now.getMonth()+1;
// const yyyy = now.getFullYear();
// const todayDate = new Date(mm + "/" + dd + "/" + yyyy);
// const lastDate = new Date(todayDate - 30*1000*60*60*24)
//
// let buckets = [];
// for(let i=todayDate; i>=lastDate; i-=1000*60*60*24) {
//     console.log(new Date(i).toISOString().split("T")[0])
// }

const today = new Date()
const tomorrow = new Date(today)
tomorrow.setDate(tomorrow.getDate() + 1)

console.log(today)
console.log(today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate())
console.log(tomorrow)
console.log(tomorrow.getFullYear() + "-" + (tomorrow.getMonth()+1) + "-" + tomorrow.getDate())

const products = ["p1", "p2", "p3"];
for(let product in products) {
    console.log(products[product])
}

const { v4: uuidv4 } = require('uuid');
console.log(uuidv4())

const oneDay = tomorrow - today
console.log(oneDay / 1000 / 24)

var currentDate = new Date();
var twentyMinutesLater = new Date(currentDate.getTime() + (30 * 60 * 1000));
console.log(currentDate)
console.log(twentyMinutesLater)


var convertDate = new Date("2021-05-28T21:40:02.447Z");
console.log(new Date(), convertDate)
console.log(convertDate > new Date())