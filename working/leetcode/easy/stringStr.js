
var strStr2 = function (haystack, needle) {
    if(haystack.length === 0 && needle.length === 0) return 0;
    

    console.log("length: ", haystack.length);

    for (let i = 0; i < haystack.length; i++) {
        let flag = true;
        console.log("i: ", i);
        if (haystack[i] === needle[0]) {
            console.log("needle equals haystack - N: ", i, " - ", needle[0], ", H: 0 - ",  haystack[i]);
            for (let j = i, k = 0; j < needle.length + i; j++, k++) {
                console.log(haystack[j], " === ", needle[k]);
                if (haystack[j] !== needle[k])
                    flag = false;
            }


            if (flag)
                return i;

        }


    }

    return -1;
};

let strStr = function(haystack, needle) {
    if (needle === "") return 0;
    let length = needle.length;
    for (let i=0; i<=haystack.length-length; i++) {
        if (haystack.slice(i, i+length) === needle)
            return i;
    }
    return -1;
};


let haystack1 = "hello", needle1 = "ll";
let haystack2 = "aaaaa", needle2 = "bba"
let haystack3 = "", needle3 = "";
let haystack4 = " ", needle4 = " ";
let haystack5 = "mississippi", needle5 = "issip";

console.log(strStr(haystack1, needle1));
console.log(strStr(haystack2, needle2));

console.log(strStr(haystack3, needle3));
console.log(strStr(haystack4, needle4));
console.log(strStr(haystack5, needle5));
