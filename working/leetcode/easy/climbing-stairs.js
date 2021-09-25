function climbStairs(n) {
    let cache = {};
    cache[0] = 1;
    cache[1] = 1;
   
    return climbStairsHelper(n);
      
    function climbStairsHelper(n){
        if(n in cache) return cache[n];    
        cache[n] = climbStairsHelper(n-1) + climbStairsHelper(n-2);
        return cache[n];
        
    }
    
}