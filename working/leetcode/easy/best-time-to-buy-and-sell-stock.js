

function maxProfit(prices) {
    let profit = 0;
    
    for(let i = 0, j = 1; i < prices.length-1; ){
        console.log("i: ", i, ", j: ", j);
        if(prices[j] - prices[i] > profit)
            profit = prices[j] - prices[i];
        
        if(prices[i] < prices[j])
            j++;
        else{
            i++;
            j=i+1;
        }
     
    }
    
    return profit;

};









function maxProfit(prices) {
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