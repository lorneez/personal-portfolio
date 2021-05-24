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

for(let i=0; i<100; i++) {
    const rand = Math.floor(Math.random() * 10000)
    const date = Date.now() * 10000
    console.log(rand, date, rand+date)
}
// IT LOSES PRECISION???
console.log("1621816116065".length)