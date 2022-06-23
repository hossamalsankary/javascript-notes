
var hello = "Hello Man This Str For Examples";

//use String as a constructor.
var objectString = new String("Yes, I am a String object");

console.log(objectString, hello);

// Concatenating Strings
console.log("data + somedata");

var concat = hello.concat(objectString);
// console.log(concat);

//String Templates ``;
let tamplates = `hello we using string templtes add varibles ${objectString}`;
console.log(tamplates);

//reverse string
function reverseString(str) {
  // return String(str).split().reverse().join("");
  return [...String(str)].reverse().join("");
}
console.log(reverseString("stackoverflow"));

console.log(hello.localeCompare(objectString));
console.log(hello.localeCompare(hello));
console.log(objectString.localeCompare(hello));

// This is especially useful when using a sorting function that compares based on the sign of the return value (such as
var arr = ["bananas", "cranberries", "apples"];
arr.sort((a, b) => a.localeCompare(b));

console.log(arr);

var s = "0123456789abcdefg";
console.log(s.slice(0, 5) );// "01234"
console.log(s.slice(5, 6)); // "5"

var string = "Hello, World!";
console.log(string.indexOf("o")); // 4
console.log(string.indexOf("foo")); // -1

var string = "Hello, World!";
console.log(string.lastIndexOf("o"));// 8
console.log(string.lastIndexOf("foo")); // -1

console.log(string.includes("Hello")); // true
console.log(string.includes("foo")); // false

string = string.replace("Hello", "Bye");
console.log(string);

"Hellow World".indexOf("Wor");
