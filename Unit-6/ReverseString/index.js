var string="anushka"

// inbuilt method
string=string.split("")

console.log(string.reverse().join(""))

// iteratively

function iteratively(string){
    var newString=""
    for(var i=string.length-1;i>=0;i--){
        newString+=string[i]
    }
    return newString
}


// recursively

function reverseString(str) {
    if (str === "")
      return "";
    else
      return reverseString(str.substr(1)) + str.charAt(0);
  }
  console.log(reverseString("hello"));

