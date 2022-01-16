const theDate = new Date();
//1년이 가지고 있는 ms
const oneYear = 60 * 60 * 24 * 365 * 1000;
console.log(Math.floor(theDate.getTim() / oneYear) + 1970);
