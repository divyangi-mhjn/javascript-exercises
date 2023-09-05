// count occurence of element

const countOccurence = () => {
    let arr = [1, 2, 3, 2, 3, 1, 5]
    let arr2 = {}
    arr.forEach(el => {
        if (arr2[el]) arr2[el]++
        else arr2[el] = 1
    })
    return arr2
}

// console.log(countOccurence())

//group items on basis of age.

const groupItems = () => {
    let people = [
        { name: 'Nav', age: 20 },
        { name: 'Divyangi', age: 21 },
        { name: 'Shubu', age: 21 },
        { name: 'Kamal', age: 22 },
    ]

    let groupedPeople = people.reduce((allValues, curr) => {
        let age = curr.age;
        (allValues[age] = allValues[age] || []).push(curr)

        return allValues
    }, {});

    return groupedPeople
}
// console.log(groupItems())

// Program to check a string with balanced brackets

const sumIsEqualToTarget = () =>{
  let arr = [1,2,3,4,6,7,8,9];
  let target = 9;
  let answer = new Set();

  for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        if(arr[i] + arr[j] == target){
            let s= `${arr[i]} + ${arr[j]}`
            answer.add(s)
        }
    }
  }
  console.log(answer)
}
sumIsEqualToTarget()
