function BracketMatcher(str) {
    //solution
    const arr = str.split('');
    const bracketsArr = arr.filter(e => e == '(' || e == ')')
    const countOfBrackets = bracketsArr.length;
    if (countOfBrackets % 2 == 0) {
        let flag = 0
        for (let i = 0; i < countOfBrackets; i++) {
            if (bracketsArr.toString().charAt(i) == '(')
                flag++;
            else if (bracketsArr.toString().charAt(i) == ')')
                flag--;
            if (flag < 0)
                return 0;
        }
        return 1;
    }
    else
        return 0;

}

// keep this function call here 
console.log(BracketMatcher(readline()));