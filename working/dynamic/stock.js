

function maxProfit (prices) {

    let min = prices[0];
    let max = -Infinity;

    for(let i = 1; i < prices.length; i++){
        if(prices[i]<min){
            min = prices[i];
        }else {
            if (prices[i] - min > max)
                max = prices[i] - min;
        }
            

    }

    return max <= 0 ? 0 : max;

};



console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([7,6,4,3,1]));
