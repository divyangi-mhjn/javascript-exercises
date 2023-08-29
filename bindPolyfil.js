Function.prototype.myBind = function(value,...args){
 let func = this;
 return function(...callArgs){
    func.apply(value,[...args,...callArgs])
 }
}

let obj1 = {
    name:'divyangi',
    surname:'mahajan'
}

function printNames(city,age){
console.log(`My names is ${this.name} ${this.surname} and I live in city ${city} and my age is ${age}`)
}

//original bind function
let callFunc = printNames.bind(obj1,'jammu')
callFunc('27')

//my bind function
let callFunc2 = printNames.myBind(obj1,'delhi')
callFunc2('27')