// Check if the given sring is pangram or not

const checkPangram = (stringExample) =>{
    let arr = new Set();
    let result = false;
    let pattern = /[A-Z]/i
    
    for(let i=0;i<= stringExample.length ; i++){
        // if(pattern.test(stringExample.charAt(i)))
        //    arr.add(stringExample.charAt(i))

        if(stringExample.charAt(i).match(pattern))
           arr.add(stringExample.charAt(i))
    }

    
    if(arr.size === 26 )
      result = true
    
    return result;
}

console.log(checkPangram("The quick brown fox jumps over a lazy dog"));
console.log(checkPangram("abcd efg hi"));

// OUTPUT
// true
// false