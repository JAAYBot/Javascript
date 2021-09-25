

function revString(str){
    if(str.length <= 1) return str;

    return str[str.length-1] + revString(str.substring(1, str.length-1)) + str[0];
}


console.log(revString("john!"));

/// this was sample code... like myway better
function reverseStringRecursive (str) {
    if (str === "") {
      return "";
    } else {
      return reverseStringRecursive(str.substr(1)) + str.charAt(0);
    }
  }


console.log(reverseStringRecursive("john!"));