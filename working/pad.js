


function isPalindrome(str) {
    let p1 = 0;
    let p2 = str.length - 1;

    while (p1 <= p2) {
        if (str[p1] != str[p2])
            return -1;

        p1++;
        p2--;
    }

    return str.length;
}


console.log(isPalindrome("aba"));


console.log(isPalindrome("baab"));


console.log(isPalindrome("acab"));

console.log(isPalindrome("acb"));

console.log("abc".slice(0, 4).length);


func longestPalindrome(s string) {

    let max = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j <= s.length; j++) {
            let temp = isPalindrome(s.slice(i, j))
            if (temp > max)
                max = temp

        }
    }


    return max;

    function isPalindrome(str) {
        let p1 = 0;
        let p2 = str.length - 1;

        while (p1 <= p2) {
            if (p1 != p2)
                return false;

            p1++;
            p2--;
        }

        return str.length;
    }

}