// Remove space in string

function removeSpace(str){
  let newString = str.split(' ').join('');
  console.log(newString)
}

removeSpace("abc  def ghi")    // OUTPUT is abcdefghi

// Count vowels in a string

const countVowels = (str) =>{
const vowels = ['a','e','i','o','u']
const count = str.split('').filter(e=> vowels.includes(e)).length;
console.log(count)
}

countVowels("divyangi mahajan")     // OUTPUT is 6