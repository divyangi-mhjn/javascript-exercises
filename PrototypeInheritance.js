Activity.prototype.setAmount = function(a1){
    if(a1 <= 0)
      return false
    this.amount = a1;
}

Activity.prototype.getAmount = function(){
   return this.amount;
}

Payment.prototype = Object.create(Activity.prototype);

//need to explicitly set the constructor
Payment.prototype.constructor = Payment;
Payment.prototype.setReceiver = function(a1){
    this.receiver = a1;
}

Payment.prototype.getReceiver = function(){
   return this.receiver;
}


Refund.prototype.setSender = function(sen){
    this.sender =sen
}

Refund.prototype.getSender = function(){
    return this.sender;
}

function Activity(amount) {
    this.amount = amount;    
}

function Payment(amount, receiver) {
    Activity.call(this,amount)
    this.receiver = receiver;
}

function Refund(amount, sender) {
    this.sender = sender;
    Activity.call(this,amount);
}

let paymentObj  = new Payment(22,'eee');
console.log(paymentObj.getReceiver())