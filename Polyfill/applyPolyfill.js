function printNames(age){
    console.log(`The names are as follows ${this.firstName} and ${this.lastName} and age is ${age}`)
}

let obj = {
    firstName:'Divyangi',
    lastName:'Mahajan'
}

printNames.apply(obj,['28']);

//My polyfill

Function.prototype.myApply = function(obj,args){
 obj.funcName = this;
 obj.funcName(...args)
}

printNames.myApply(obj,['27'])