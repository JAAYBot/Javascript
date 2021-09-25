/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];
    dfs("", 0, 0);
    return result;

    function dfs(str, left, right) {
        if (left === n && right === n) {
            result.push(str);
            return;
        }

        if (left !== n) {
            dfs(str + '(', left + 1, right)
        }

        if (left > right) {
            dfs(str + ')', left, right + 1)
        }

    }
};