

function coinChangeReturnAllWays(coins, target) {
    if (target <= 0 || target == undefined) return "false";

    return helper(0, target);

    function helper(idx, n) {
        console.log("N: ", n, ", idx: ", idx);
        if (n == 0) return 1;
        if (n < 0) return 0;
        if (n > 0 && idx == coins.length) return 0;

        return helper(idx, n - coins[idx]) + helper(idx + 1, n);

    }
}


function coinChange(coins, amount) {
    if (amount < 1) return 0;
    let count = new Array(amount).fill(0);
    return coinChangeHelper(amount);


    function coinChangeHelper(rem) {
        if (rem < 0) return -1;
        if (rem == 0) return 0;
        if (count[rem - 1] != 0) return count[rem - 1];

        let min = Number.MAX_VALUE;
        for (coin in coins) {
            let res = coinChangeHelper(rem - coins[coin]);
            if (res >= 0 && res < min){
                min = 1 + res;
            }    
        }

        count[rem - 1] = (min == Number.MAX_VALUE) ? -1 : min;
        console.log(count.join(','));
        return count[rem - 1];
    }
}



console.log(coinChange([1, 2, 5], 11));
console.log("----------------------");
console.log(coinChange([2, 3, 5], 7));
