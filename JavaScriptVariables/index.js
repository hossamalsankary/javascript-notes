// 32-bit number (from -2,147,483,648 to 2,147,483,647)
var myInteger = 12;

// 64-bit number (from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)
var myLong = 9310141419482; 

// 32-bit floating-point number (decimal)
var myFloat = 5.5; 

// 64-bit floating-point number
var myDouble = 9310141419482.22; 

// 1-bit true/false (0 or 1)
var myBoolean = true; 
var myBoolean2 = false;
var myNotANumber = NaN;

// NaN: Division by Zero is not possible
var NaN_Example = 0/0; 
// undefined: we didn't define it to anything yet

var notDefined;
console.log(typeof(myInteger)) ;
console.log(typeof(myFloat)) ;
console.log(typeof(myDouble)) ;
console.log(typeof(myBoolean));
console.log(typeof(myBoolean));
console.log(typeof(notDefined));
console.log(typeof(NaN_Example));

//The JavaScript statement Object.prototype.toString.call() can indeed differentiate between numbers, objects, and even arrays, because it returns a string that specifies the object type in more detail than typeof.
console.log(Object.prototype.toString.call(myInteger)) ;
console.log(Object.prototype.toString.call(myFloat)) ;
console.log(Object.prototype.toString.call(myDouble)) ;
console.log(Object.prototype.toString(myBoolean));
console.log(Object.prototype.toString(myBoolean));
console.log(Object.prototype.toString(notDefined));
console.log(Object.prototype.toString(NaN_Example));



