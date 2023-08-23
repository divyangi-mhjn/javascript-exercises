// 1. Reverse an array

// sampleArray.reverse()
const reverseArray = () => {
    const sampleArray = [1, 2, 3, 4, 5];
    let reverseArr = [];
    // Approach 1
    //   for (let i = sampleArray.length - 1;i>=0;i--){
    //     reverseArr.push(sampleArray[i])
    //   }

    // Approach 2
    reverseArr = sampleArray.sort((a, b) => b - a);
    console.log(reverseArr);
}


//2. sort an array from lowest to highest -> bubble sort

// arr.sort((a,b) => a-b)
const sort = () => {
    const arr = [3, 1, 50, 6, 2, 10];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                //swap
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    console.log(arr)
}

// 3. filter out array to remove negative numbers
const sampleArray = [1, -10, 2, 6, 3, 4, 5, -3, -2];
const result = sampleArray.filter(e => e > 0)

// 4. Sum of numbers in array
const sumOfArray = () => {
    const sampleArray = [1, 4, 2, 6, 7, -3, 0, -10.2, 6];
    const sum1 = sampleArray.reduce((prev, curr) => prev + curr,0);
    console.log(sum1);
}

// 5. Return boom if array has 7 in it otherwise statment.
const printBoom = (arr) => {
    if (typeof arr != 'object') {
        console.log('Send an array')
        return;
    }

    if (arr.some(el => el == 7)) {
        console.log('BOOM');
        return;
    }
    console.log("The array doesn't have 7 in it");
}

// 6. Get Total Price for a array having details of purchase

const getPurchaseTotal = () => {
    const purchaseDetails = [{ id: 1, product: 'table', qty: 1, price: 600 }, { id: 2, product: 'chair', qty: 6, price: 100 }, { id: 3, product: 'lamp', qty: 1, price: 150 }, { id: 4, product: 'spoons', qty: 12, price: 50 }]
    const totalAmt = purchaseDetails.reduce((prev, curr) => { return prev + curr.price * curr.qty }, 0)
    console.log(totalAmt)
}

// 7. Sort array of array 

const sortArr = () =>{
    const students = [
        { name: "Alex", grade: 6 },
        { name: "Eagle", grade: 3 },
        { name: "Sam", grade: 9 },
        { name: "Devlin", grade: 10 },
      ];
    // sort the object according to grade  
      const result = students.sort((a,b) => a.grade - b.grade)
      console.log(result)
    // sort the object according to name  
      const compareFunc = (a,b) =>{
          if(a.name<b.name)
            return -1
          else if(a.name>b.name)
            return +1
          else if (a.name == b.name)
           return 0
      }
      const result2 = students.sort(compareFunc)
      console.log(result2)
      // second approach for sorting according to name
      const result4 = students.sort((a,b) => a.name.localeCompare(b.name))
      console.log(result4)
      // sort the array of alphabets
      const arr = ["a","c","b","l","f","d"];
      const result3 = arr.sort((a,b) => a.localeCompare(b));
      console.log(result3)
}


// CALLING METHODS
reverseArray()
sort()
console.log(result)
sumOfArray()
printBoom([1, 5, 3, 7, 4])
printBoom([2, 4, 6])
getPurchaseTotal()
sortArr()

//OUTPUT
// [ 5, 4, 3, 2, 1 ]
// [ 1, 2, 3, 6, 10, 50 ]
// [ 1, 2, 6, 3, 4, 5 ]
// 12.8
// BOOM
// The array doesn't have 7 in it
// 1950
// [
//     { name: 'Eagle', grade: 3 },
//     { name: 'Alex', grade: 6 },
//     { name: 'Sam', grade: 9 },
//     { name: 'Devlin', grade: 10 }
//   ]

// [
//     { name: 'Alex', grade: 6 },
//     { name: 'Devlin', grade: 10 },
//     { name: 'Eagle', grade: 3 },
//     { name: 'Sam', grade: 9 }
//   ]

//   [
//     { name: 'Alex', grade: 6 },
//     { name: 'Devlin', grade: 10 },
//     { name: 'Eagle', grade: 3 },
//     { name: 'Sam', grade: 9 }
//   ]
//   [ 'a', 'b', 'c', 'd', 'f', 'l' ]
  