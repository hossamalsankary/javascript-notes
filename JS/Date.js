//The number of milliseconds since 1 January 1970 00:00:00.000 UTC (Unix epoch)
const log = (example)=>console.log(example);


// Creates a Date object with the current date and time from the
var now = new Date();
//  log(now.toString());

// Creates a Date object at the Unix Epoch (i.e., '1970-01-01T00:00:00.000Z')
var epoch = new Date(0);
//  log(epoch.toISOString() === '1970-01-01T00:00:00.000Z') // true

// Creates a Date object at the Unix Epoch 2012
var epoch = new Date(2020);
//log(epoch.toISOString() ) // true

//local timezone and UTC
//timezone
let timenow = new Date(2020, 0);
log(timenow);
//UTC
let utcTime = new Date(Date.UTC(2020, 0));
log(utcTime);

/*  In this problem we want to communicate a speciﬁc date (day, month, year) with someone in a diﬀerent timezone.
The ﬁrst implementation naively uses local times, which results in wrong results. The second implementation uses
UTC dates to avoid timezones where they are not needed.*/

//bon lives in a country with timezone GMT + 1

function formatDate(dayOfWeek, day, month, year) {
  var daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return daysOfWeek[dayOfWeek] + " " + months[month] + " " + day + " " + year;
}

var birthday = new Date(2000, 0, 1);
log(
  "bon was born on: " +
    formatDate(
      birthday.getDay(),
      birthday.getDate(),
      birthday.getMonth(),
      birthday.getFullYear()
    )
);
log("we send the bon birthDay to hossam " + birthday.getTime());

//hossam lives in country with TimeZone GMT-1
//we convert bon birthDay but as we are in the same timezone we need to update time
bonbirthdayInHossamTimeZone = birthday.getTime() - 31104000000;
var bonbirthday = new Date(bonbirthdayInHossamTimeZone);

log(
  "bon was born on: " +
    formatDate(
      bonbirthday.getDay(),
      bonbirthday.getDate(),
      bonbirthday.getMonth(),
      bonbirthday.getFullYear()
    )
);

//And thus, hossam would always believe Foo was born on the last day of 1999.
//Correct approach

//bon lives in a country with timezone GMT + 1

var birthday = new Date(Date.UTC(2000, 0, 1));
log(
  "bon was born on: " +
    formatDate(
      birthday.getUTCDay(),
      birthday.getUTCDate(),
      birthday.getUTCMonth(),
      birthday.getUTCFullYear()
    )
);
log("-----------------------------------------------------------------------");
log("we send the bon birthDay to hossam with UTC " + birthday.getTime());

//hossam lives in country with TimeZone GMT-1
bonbirthdayInHossamTimeZoneWithUTC = birthday.getTime();
var bonbirthday = new Date(birthday.getTime());

log(
  "bon was born on With UTC: " +
    formatDate(
      bonbirthday.getUTCDay(),
      bonbirthday.getUTCDate(),
      bonbirthday.getUTCMonth(),
      bonbirthday.getUTCFullYear()
    )
);

//Unsurprisingly, the diﬀerence between UTC time and local time is, in fact, the timezone oﬀset converted tomilliseconds.
var utcDate = new Date(Date.UTC(2000, 0, 31, 12));
var localDate = new Date(2000, 0, 31, 12);
log(localDate - utcDate === utcDate.getTimezoneOffset() * 60 * 1000);


// Date Comparison
// Comparing Date values
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