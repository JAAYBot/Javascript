

var isValid = function(s) {

    let bracket = new Map([
        ['(', ')'],
        ['{', '}'],
        ['[', ']']
    ]);

    let stack = [];

    for(let char of s){
        console.log(char, ", b char:", bracket.has(char));

        if(bracket.has(char)){
            stack.push(bracket.get(char))
            console.log("stack: ", stack);
        }else{
            if(stack.pop() !== char)
                return false
        }
    }
    
    return (!stack.length);
     
};

let s1 = "()";
let s2 = "{[()]}";
let s3 = "(]";
let s4 = "([)]";
let s5 = "{[]}";

console.log(isValid(s2));
//console.log(isValid(s2));
//console.log(isValid(s3));
//console.log(isValid(s4));