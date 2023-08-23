// print a table containing multiplication table

const printMultiplicationTable = (value, index) =>{
     console.log(`The multiplication table for ${value} is as below:`)
     for(let i =1; i<=index; i++){
       console.log(`${value} * ${i} = ${value*i}`)
     }
}
printMultiplicationTable(3,10)

// OUTPUT
// The multiplication table for 3 as below:
// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9
// 3 * 4 = 12
// 3 * 5 = 15
// 3 * 6 = 18
// 3 * 7 = 21
// 3 * 8 = 24
// 3 * 9 = 27
// 3 * 10 = 30