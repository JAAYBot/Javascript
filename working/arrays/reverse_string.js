

//pointers moving in opposite directions

function reverse(str){
    if(!str || str.length<2 || typeof str !== 'string')
        return "Invalid Param";

    let res = str.split("");
    for(let start=0, end=res.length-1; start<end; start++, end--){
        let temp = res[start];
        res[start] = res[end];
        res[end] = temp;
    }

    return res.join("");
}

//
function reverse2(str){
    return str.split("").reverse().join("");
}

const reverse3 = str => str.split("").reverse().join("");


const reverse4 = str => [...str].reverse().join("");

console.log(reverse4("hell"));
console.log(reverse4("hello"));
console.log(reverse4("Md"));
console.log(reverse4("K"));
//console.log(reverse2(1));