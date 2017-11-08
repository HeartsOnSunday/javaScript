
function reverseString(str) {
  str = str.split("");
  // console.log("splitting the string:");
  // console.log(strArray);
  str.reverse();
  // console.log("after reverse");
  // console.log(strArray);
  return str.join("");
  // console.log("after join");
  // console.log(reverseStr);
  
}

console.log(reverseString("THe End is Near"));
