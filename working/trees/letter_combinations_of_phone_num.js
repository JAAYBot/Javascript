/*
2   abc
3   def
4   ghi
5   jkl
6   mno
7   pqrs
8   tuv
9   wxyz
*/

//depth first search

// two ways recursive

const L = {'2':"abc",'3':"def",'4':"ghi",'5':"jkl",
     '6':"mno",'7':"pqrs",'8':"tuv",'9':"wxyz"}

function letterCombinations(D) {
    let len = D.length, ans = [];
    if (!len) return [];
    
    bfs(0,"");

    return ans;

    function bfs (pos, str){
        console.log("calling..");
        if (pos === len) ans.push(str);
        else {
            let letters = L[D[pos]];
            console.log("letters: ", letters);
            for (let i = 0; i < letters.length; i++)
                bfs(pos+1,str+letters[i]);
        }
    }
};

// no recursive

console.log(letterCombinations("23"));

//test("hello");