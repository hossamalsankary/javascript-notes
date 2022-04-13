// Date Comparison
// Comparing Date values
const log = (...example) => console.log(...example);
var date1 = new Date();
var date2 = new Date(date1.valueOf() + 1000);
log(date1 < date2);
log(date1.getTime(), "==", date1.valueOf());

//To compare the diﬀerence of two dates, we can do the comparison based on the timestamp.
var date1 = new Date();
var date2 = new Date(date1.valueOf() + 5000);
var dateDiff = date1.valueOf() - date2.valueOf();
var dateDiffInYears = dateDiff/1000/60/60/24/365; //convert milliseconds into years
log("Date difference in years : " + dateDiffInYears);