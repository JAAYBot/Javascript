

function numIslands(grid) {
    const H = grid.length;
    console.log("= ", 9&&4);
    const W = H && grid[0].length;
    console.log("H:", H);
    console.log("W:", W);
    let count = 0;
    
    for (let r = 0; r < H; r++) {
      for (let c = 0; c < W; c++) {
        if (grid[r][c] === '0') continue;
        
        count++;
        dfs(r, c);
      }
    }
    return count;
    
    function dfs(r, c) {
      if (r < 0 || c < 0 || r === H || c === W) return;
      if (grid[r][c] === '0') return;
      
      grid[r][c] = '0';
      dfs(r-1, c);
      dfs(r+1, c);
      dfs(r, c-1);
      dfs(r, c+1);
    }
  }

  console.log(numIslands([
    ["1","1","1","1","0","0"],
    ["1","1","0","1","0","0"],
    ["1","1","0","0","0","0"],
    ["0","0","0","0","0","0"]
  ]));

console.log(numIslands([
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]));

console.log(numIslands([
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
  ]));