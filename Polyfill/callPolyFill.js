let obj = {
    firstName:'Divyangi',
    lastName:'Mahajan'
}

function printNames(age){
    console.log(`The names are as follows ${this.firstName} and ${this.lastName} and age is ${age}`)
}

Function.prototype.myCall = function(obj,...args){
 obj.funcName = this
 obj.funcName(...args)
}
//The polyfill
printNames.myCall(obj,'27')

// or simply call
printNames.call(obj,'27')
