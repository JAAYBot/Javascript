
var longestCommonPrefix2 = function (strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    let ans = [];

    strs.sort((a, b) => {
        return a.length - b.length;
    })

    for (let j = 0; j < strs[0].length; j++) {
        let counter = 0;
        for (let i = 0; i < strs.length; i++) {
            console.log(strs[0][j], " ? ", strs[i][j])
            if (strs[0][j] === strs[i][j]) {
                counter++;
            }

        }
        console.log("c: ", counter, ", l: ", strs.length);
        if (counter === strs.length)
            ans.push(strs[0][j]);
        else
            return ans.join("");

    }

    return ans.join("");
};

var longestCommonPrefix3 = function (strs) {
    let ans = [""];

    for (let j = 0; j < strs[0].length; j++) {
        console.log("word: ", strs[j], "count: ", j);
        for (let i = 0; i < strs.length; i++) {
            console.log(strs[0][j], " ? ", strs[i][j])
            if (strs[0][j] !== strs[i][j])
                return ans.join('')

        }
        ans.push(strs[0][j]);
        console.log("here: ", ans)

    }

    return ans.join("");
};


test = ["aaa", "bb", "cccc", "dd", "eee", "f"];


// let length = test[0].length;
// let i = 0;
// while(i < length){

//     if(test[i+1] && test[i+1].length > length) length = test[i+1].length;

//     let str = "";
//     for(let j = 0 ; j < test.length; j++){
//         if(test[j][i] !== undefined)
//             str += test[j][i];
//     }  
//     console.log("str", str);

//     i++;
// }

var longestCommonPrefix = function (strs) {
    let length = strs[0].length, ans = [""], i = 0;

    while (i < length) {
        if (strs[i + 1] && strs[i + 1].length > length) length = strs[i + 1].length;
        
        for (let j = 0; j < strs.length; j++) {
            if (strs[0][i] !== strs[j][i])
                return ans.join('')

        }
        ans.push(strs[0][i]);

        i++;
    }

    return ans.join("");

};

let strs;


strs = ["flower", "flow", "flight"];

console.log("ans: ", longestCommonPrefix(strs));
strs = ["dog", "racecar", "car"];
console.log(longestCommonPrefix(strs));
strs = ["", ""];
console.log(longestCommonPrefix(strs));
strs = ["ab", "a"];
console.log(longestCommonPrefix(strs));

strs = ["a"];
console.log(longestCommonPrefix(strs));