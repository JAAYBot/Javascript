/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let i = 0, j = height.length-1;
    let ans = 0;
   
    while(i < j){
        
        //console.log("i: ", i, ", j: ", j);
        let breath = height[i] < height[j] ? height[i] : height[j];
        let length = j - i;
        
        let area = length*breath;
        //console.log("area: ", area);
        
        if(area>ans)
            ans = area;
              
        if(height[i] < height[j])
            i++;
        else
            j--;
    }
    
    return ans;
    
};