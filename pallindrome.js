let str="naman"
function reversestring(string) {

  for (let i = str.length -1; i >= 0; i--) {
    bag += string[i]

  }
return bag;
}

let rev=reversestring(str)
console.log(rev)
if (str==rev){
  console.log(palidrome)
}else{
  console.log(no palidrome)
}
