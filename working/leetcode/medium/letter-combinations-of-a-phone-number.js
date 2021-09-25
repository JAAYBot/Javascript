/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    let len = digits.length, ansArr = [];
    if (!len) return [];
    const phoneKeys = {
        1: null,
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
        0: null
    }

    dfs(0, "");

    return ansArr;

    function dfs(pos, str) {
        if (pos === len) ansArr.push(str);
        else {
            let letters = phoneKeys[digits[pos]];
            for (let c of letters) {
                dfs(pos + 1, str + c);
            }
        }

    }
};