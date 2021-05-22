const startDate = new Date("05/16/2021");
const today = new Date();
const dd = today.getDate();
const mm = today.getMonth()+1;
const yyyy = today.getFullYear();
const endDate = new Date(mm + "/" + dd + "/" + yyyy);
console.log(startDate)
console.log(endDate)
const timeDifference = endDate.getTime() - startDate.getTime();
const dayDifference = timeDifference / (1000 * 3600 * 24);
console.log(dayDifference)


var d = new Date();
console.log(d.toString())
d.setDate(d.getDate()-6);
console.log(d.toString())