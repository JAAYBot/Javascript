let s;

var lengthOfLastWord = function(s) {
    let temp = s.split(' ').filter(item => item);
    return temp[temp.length-1].length;
};


s = "Hello World";
console.log(lengthOfLastWord(s));

s = "   fly me   to   the moon  ";
console.log(lengthOfLastWord(s));

s = "luffy is still joyboy"
console.log(lengthOfLastWord(s));