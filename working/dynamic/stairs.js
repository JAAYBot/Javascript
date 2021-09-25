

function climbStairs() {
    let cache = {}

    cache[0] = 1;
    cache[1] = 1;

    return function helper(n) {
        if (n in cache) {
            return cache[n];
        }
        else {
            if (n == 1 || n == 0) {
                return 1
            } else {
                cache[n] = helper(n - 1) + helper(n - 2);
                return cache[n];
            }
        }
    }
};

function climbStairs2(n) {
    let cache = {}

    cache[0] = 1;
    cache[1] = 1;
    
    return helper(n);

    function helper(n) {
        if (n in cache) {
            return cache[n];
        }
        else {
            if (n == 1 || n == 0) {
                return 1
            } else {
                cache[n] = helper(n - 1) + helper(n - 2);
                return cache[n];
            }
        }
    }
    
};

const climber = climbStairs();
console.log(climber(3));

console.log(climbStairs2(3));


